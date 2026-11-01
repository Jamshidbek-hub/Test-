import { useState, useEffect, useCallback } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { getQuizQuestions } from '../utils/quiz'
import QuestionCard from '../components/QuestionCard'
import QuizSummary from '../components/QuizSummary'
import './QuizPage.css'

export default function QuizPage({ onFinish }) {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const sinf = parseInt(searchParams.get('sinf')) || null
  const bolim = searchParams.get('bolim') || null
  const mavzu = searchParams.get('mavzu') || null
  const qiyinlik = searchParams.get('qiyinlik') || null

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([]) // { questionId, selected, isCorrect, question }
  const [isFinished, setIsFinished] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!sinf) {
      setError('Sinf tanlanmagan. Bosh sahifaga qaytib sinf tanlang.')
      setLoading(false)
      return
    }

    const quizQuestions = getQuizQuestions({ sinf, bolim, mavzu, qiyinlik, count: 15 })
    if (quizQuestions.length === 0) {
      setError('Bu tanlov uchun savollar topilmadi.')
      setLoading(false)
      return
    }

    setQuestions(quizQuestions)
    setLoading(false)
  }, [sinf, bolim, mavzu, qiyinlik])

  const handleAnswer = useCallback((selectedIndex) => {
    const question = questions[currentIndex]
    const isCorrect = selectedIndex === question.togriJavob
    setAnswers(prev => [
      ...prev,
      {
        questionId: question.id,
        selected: selectedIndex,
        isCorrect,
        question
      }
    ])
  }, [questions, currentIndex])

  const handleNext = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1)
    } else {
      finishQuiz()
    }
  }, [currentIndex, questions.length])

  const finishQuiz = () => {
    const correctCount = answers.length > 0
      ? answers.filter(a => a.isCorrect).length
      : 0

    // Include current last answer if just answered
    const allAnswers = answers
    const totalCorrect = allAnswers.filter(a => a.isCorrect).length

    const result = {
      id: Date.now(),
      type: 'mashq',
      date: new Date().toISOString(),
      sinf,
      bolim,
      mavzu,
      qiyinlik,
      totalQuestions: questions.length,
      correctCount: totalCorrect,
      percentage: Math.round((totalCorrect / questions.length) * 100),
      wrongAnswers: allAnswers
        .filter(a => !a.isCorrect)
        .map(a => ({
          savol: a.question.savol,
          mavzu: a.question.mavzu,
          tanlanganJavob: a.question.variantlar[a.selected],
          togriJavob: a.question.variantlar[a.question.togriJavob],
          izoh: a.question.izoh
        })),
      correctAnswers: allAnswers
        .filter(a => a.isCorrect)
        .map(a => ({
          mavzu: a.question.mavzu
        }))
    }

    onFinish(result)
    setIsFinished(true)
  }

  const currentQuestion = questions[currentIndex]
  const currentAnswer = answers.find(a => a.questionId === currentQuestion?.id)
  const isAnswered = !!currentAnswer

  if (loading) {
    return (
      <div className="quiz-page">
        <div className="container">
          <div className="quiz-loading">
            <div className="quiz-loading__spinner" aria-label="Yuklanmoqda"></div>
            <p>Savollar yuklanmoqda...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="quiz-page">
        <div className="container">
          <div className="quiz-error">
            <span className="quiz-error__icon" aria-hidden="true">😕</span>
            <p className="quiz-error__text">{error}</p>
            <button className="btn btn--primary" onClick={() => navigate('/')}>
              Bosh sahifaga qaytish
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (isFinished) {
    const lastResult = {
      totalQuestions: questions.length,
      correctCount: answers.filter(a => a.isCorrect).length,
      percentage: Math.round((answers.filter(a => a.isCorrect).length / questions.length) * 100),
      wrongAnswers: answers
        .filter(a => !a.isCorrect)
        .map(a => ({
          savol: a.question.savol,
          mavzu: a.question.mavzu,
          tanlanganJavob: a.question.variantlar[a.selected],
          togriJavob: a.question.variantlar[a.question.togriJavob],
          izoh: a.question.izoh
        }))
    }

    return (
      <div className="quiz-page">
        <div className="container">
          <QuizSummary
            result={lastResult}
            type="mashq"
            onGoHome={() => navigate('/')}
            onRetry={() => {
              setAnswers([])
              setCurrentIndex(0)
              setIsFinished(false)
              setQuestions(getQuizQuestions({ sinf, bolim, mavzu, qiyinlik, count: 15 }))
            }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-page">
      <div className="container">
        {/* Progress */}
        <div className="quiz-progress">
          <div className="quiz-progress__info">
            <span className="quiz-progress__current">
              Savol {currentIndex + 1} / {questions.length}
            </span>
            {mavzu && <span className="quiz-progress__topic">{mavzu}</span>}
          </div>
          <div
            className="quiz-progress__bar"
            role="progressbar"
            aria-valuenow={currentIndex + 1}
            aria-valuemin={1}
            aria-valuemax={questions.length}
            aria-label={`${currentIndex + 1}-savol ${questions.length} tadan`}
          >
            <div
              className="quiz-progress__fill"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <QuestionCard
          key={currentQuestion.id}
          question={currentQuestion}
          onAnswer={handleAnswer}
          isAnswered={isAnswered}
          selectedAnswer={currentAnswer?.selected}
        />

        {/* Navigation */}
        <div className="quiz-nav">
          <button
            className="btn btn--primary btn--lg"
            onClick={handleNext}
            disabled={!isAnswered}
            aria-label={currentIndex < questions.length - 1 ? 'Keyingi savol' : 'Natijalarni ko\'rish'}
          >
            {currentIndex < questions.length - 1 ? (
              <>Keyingi savol <span aria-hidden="true">→</span></>
            ) : (
              <>Natijalarni ko'rish <span aria-hidden="true">✓</span></>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
