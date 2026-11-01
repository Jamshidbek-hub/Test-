import { useState, useEffect, useCallback, useRef } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { getQuizQuestions, formatTime, getQuestionCount } from '../utils/quiz'
import { QIYINLIK_DARAJALARI } from '../data/questions'
import QuestionCard from '../components/QuestionCard'
import QuizSummary from '../components/QuizSummary'
import './ExamPage.css'

const EXAM_PRESETS = [
  { label: '10 savol — 15 daqiqa', count: 10, time: 15 * 60 },
  { label: '20 savol — 30 daqiqa', count: 20, time: 30 * 60 },
  { label: '30 savol — 45 daqiqa', count: 30, time: 45 * 60 },
]

export default function ExamPage({ onFinish }) {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const sinf = parseInt(searchParams.get('sinf')) || null
  const bolim = searchParams.get('bolim') || null
  const qiyinlik = searchParams.get('qiyinlik') || null

  // Setup phase
  const [isSetup, setIsSetup] = useState(true)
  const [selectedPreset, setSelectedPreset] = useState(0)
  const [selectedQiyinlik, setSelectedQiyinlik] = useState(qiyinlik)

  // Quiz phase
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [timeLeft, setTimeLeft] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const timerRef = useRef(null)
  const startTimeRef = useRef(null)

  // Check available questions
  const availableCount = sinf
    ? getQuestionCount({ sinf, bolim, qiyinlik: selectedQiyinlik })
    : 0

  // Timer
  useEffect(() => {
    if (!isSetup && !isFinished && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current)
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timerRef.current)
    }
  }, [isSetup, isFinished, timeLeft > 0])

  // Auto-finish when time runs out
  useEffect(() => {
    if (!isSetup && !isFinished && timeLeft === 0 && questions.length > 0) {
      finishExam()
    }
  }, [timeLeft, isSetup, isFinished])

  const startExam = () => {
    if (!sinf) {
      setError('Sinf tanlanmagan.')
      return
    }

    const preset = EXAM_PRESETS[selectedPreset]
    const examQuestions = getQuizQuestions({
      sinf,
      bolim,
      qiyinlik: selectedQiyinlik,
      count: preset.count
    })

    if (examQuestions.length === 0) {
      setError('Savollar topilmadi.')
      return
    }

    setQuestions(examQuestions)
    setTimeLeft(preset.time)
    startTimeRef.current = Date.now()
    setIsSetup(false)
    setLoading(false)
  }

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
      finishExam()
    }
  }, [currentIndex, questions.length])

  const finishExam = () => {
    clearInterval(timerRef.current)
    const totalCorrect = answers.filter(a => a.isCorrect).length
    const elapsed = startTimeRef.current
      ? Math.round((Date.now() - startTimeRef.current) / 1000)
      : 0

    const result = {
      id: Date.now(),
      type: 'imtihon',
      date: new Date().toISOString(),
      sinf,
      bolim,
      qiyinlik: selectedQiyinlik,
      totalQuestions: questions.length,
      correctCount: totalCorrect,
      percentage: Math.round((totalCorrect / questions.length) * 100),
      timeSpent: elapsed,
      wrongAnswers: answers
        .filter(a => !a.isCorrect)
        .map(a => ({
          savol: a.question.savol,
          mavzu: a.question.mavzu,
          tanlanganJavob: a.question.variantlar[a.selected],
          togriJavob: a.question.variantlar[a.question.togriJavob],
          izoh: a.question.izoh
        })),
      correctAnswers: answers
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

  // Setup screen
  if (!sinf) {
    return (
      <div className="exam-page">
        <div className="container">
          <div className="quiz-error">
            <span className="quiz-error__icon" aria-hidden="true">😕</span>
            <p className="quiz-error__text">Sinf tanlanmagan. Bosh sahifaga qaytib sinf tanlang.</p>
            <button className="btn btn--primary" onClick={() => navigate('/')}>
              Bosh sahifaga qaytish
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (isSetup) {
    return (
      <div className="exam-page">
        <div className="container">
          <div className="exam-setup animate-scale-in">
            <div className="exam-setup__pattern pattern-overlay"></div>

            <div className="exam-setup__header">
              <span className="exam-setup__icon" aria-hidden="true">⏱️</span>
              <h1 className="exam-setup__title">Imtihon rejimi</h1>
              <p className="exam-setup__desc">
                {sinf}-sinf uchun vaqt chegarali imtihon. Tayyor bo'lganingizda boshlang.
              </p>
            </div>

            {/* Preset selection */}
            <div className="exam-setup__group">
              <label className="exam-setup__label">Savollar soni va vaqt</label>
              <div className="exam-setup__presets">
                {EXAM_PRESETS.map((preset, i) => (
                  <button
                    key={i}
                    className={`exam-preset ${selectedPreset === i ? 'exam-preset--active' : ''}`}
                    onClick={() => setSelectedPreset(i)}
                    aria-pressed={selectedPreset === i}
                  >
                    <span className="exam-preset__count">{preset.count}</span>
                    <span className="exam-preset__label">savol</span>
                    <span className="exam-preset__time">{preset.time / 60} daq.</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div className="exam-setup__group">
              <label className="exam-setup__label">Qiyinlik darajasi</label>
              <div className="selection__chips">
                <button
                  className={`chip ${selectedQiyinlik === null ? 'chip--active' : ''}`}
                  onClick={() => setSelectedQiyinlik(null)}
                >
                  Aralash
                </button>
                {QIYINLIK_DARAJALARI.map(q => (
                  <button
                    key={q.id}
                    className={`chip ${selectedQiyinlik === q.id ? 'chip--active' : ''}`}
                    onClick={() => setSelectedQiyinlik(q.id)}
                  >
                    {q.nomi}
                  </button>
                ))}
              </div>
            </div>

            <p className="exam-setup__available">
              Mavjud savollar: <strong>{availableCount} ta</strong>
              {availableCount < EXAM_PRESETS[selectedPreset].count && availableCount > 0 && (
                <span className="exam-setup__warning">
                  {' '}(Faqat {availableCount} ta savol bilan imtihon o'tkaziladi)
                </span>
              )}
            </p>

            {error && <p className="exam-setup__error">{error}</p>}

            <div className="exam-setup__actions">
              <button
                className="btn btn--primary btn--lg"
                onClick={startExam}
                disabled={availableCount === 0}
              >
                <span aria-hidden="true">🚀</span> Imtihonni boshlash
              </button>
              <button className="btn btn--ghost" onClick={() => navigate('/')}>
                Orqaga
              </button>
            </div>

            <p className="exam-setup__notice">
              Bu namunaviy imtihon — rasmiy sertifikat imtihoni emas.
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (isFinished) {
    const elapsed = startTimeRef.current
      ? Math.round((Date.now() - startTimeRef.current) / 1000)
      : 0
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
      <div className="exam-page">
        <div className="container">
          <QuizSummary
            result={lastResult}
            type="imtihon"
            timeSpent={formatTime(elapsed)}
            onGoHome={() => navigate('/')}
            onRetry={() => {
              setAnswers([])
              setCurrentIndex(0)
              setIsFinished(false)
              setIsSetup(true)
              setError(null)
            }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="exam-page">
      <div className="container">
        {/* Timer + Progress */}
        <div className="exam-topbar">
          <div className="quiz-progress" style={{ flex: 1 }}>
            <div className="quiz-progress__info">
              <span className="quiz-progress__current">
                Savol {currentIndex + 1} / {questions.length}
              </span>
            </div>
            <div
              className="quiz-progress__bar"
              role="progressbar"
              aria-valuenow={currentIndex + 1}
              aria-valuemin={1}
              aria-valuemax={questions.length}
            >
              <div
                className="quiz-progress__fill"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>
          <div
            className={`exam-timer ${timeLeft <= 60 ? 'exam-timer--warning' : ''}`}
            role="timer"
            aria-label={`Qolgan vaqt: ${formatTime(timeLeft)}`}
          >
            <span className="exam-timer__icon" aria-hidden="true">⏱</span>
            <span className="exam-timer__time">{formatTime(timeLeft)}</span>
          </div>
        </div>

        {/* Question */}
        {currentQuestion && (
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            onAnswer={handleAnswer}
            isAnswered={isAnswered}
            selectedAnswer={currentAnswer?.selected}
          />
        )}

        {/* Navigation */}
        <div className="quiz-nav">
          <button
            className="btn btn--primary btn--lg"
            onClick={handleNext}
            disabled={!isAnswered}
          >
            {currentIndex < questions.length - 1 ? (
              <>Keyingi savol <span aria-hidden="true">→</span></>
            ) : (
              <>Yakunlash <span aria-hidden="true">✓</span></>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
