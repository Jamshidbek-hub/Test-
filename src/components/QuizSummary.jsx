import { useState } from 'react'
import './QuizSummary.css'

export default function QuizSummary({ result, type, timeSpent, onGoHome, onRetry }) {
  const [showWrong, setShowWrong] = useState(false)

  const { totalQuestions, correctCount, percentage, wrongAnswers } = result
  const wrongCount = totalQuestions - correctCount

  const getGrade = () => {
    if (percentage >= 90) return { emoji: '🏆', text: "A'lo", color: 'gold' }
    if (percentage >= 70) return { emoji: '🎯', text: 'Yaxshi', color: 'success' }
    if (percentage >= 50) return { emoji: '📚', text: "O'rta", color: 'warning' }
    return { emoji: '💪', text: 'Mashq qiling', color: 'error' }
  }

  const grade = getGrade()

  return (
    <div className="quiz-summary animate-scale-in">
      <div className="quiz-summary__pattern pattern-overlay"></div>

      {/* Header */}
      <div className="quiz-summary__header">
        <span className="quiz-summary__emoji" aria-hidden="true">{grade.emoji}</span>
        <h2 className="quiz-summary__title">
          {type === 'imtihon' ? 'Imtihon natijasi' : 'Mashq natijasi'}
        </h2>
        <p className={`quiz-summary__grade quiz-summary__grade--${grade.color}`}>
          {grade.text}
        </p>
      </div>

      {/* Score circle */}
      <div className="quiz-summary__score">
        <svg className="quiz-summary__ring" viewBox="0 0 120 120" aria-hidden="true">
          <circle
            cx="60" cy="60" r="52"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="8"
          />
          <circle
            cx="60" cy="60" r="52"
            fill="none"
            stroke={percentage >= 70 ? 'var(--success)' : percentage >= 50 ? 'var(--gold-400)' : 'var(--error)'}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${(percentage / 100) * 327} 327`}
            transform="rotate(-90 60 60)"
            style={{ transition: 'stroke-dasharray 1s ease' }}
          />
        </svg>
        <div className="quiz-summary__score-text">
          <span className="quiz-summary__percentage">{percentage}%</span>
          <span className="quiz-summary__fraction">{correctCount}/{totalQuestions}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="quiz-summary__stats">
        <div className="summary-stat summary-stat--correct">
          <span className="summary-stat__icon" aria-hidden="true">✓</span>
          <span className="summary-stat__value">{correctCount}</span>
          <span className="summary-stat__label">To'g'ri</span>
        </div>
        <div className="summary-stat summary-stat--wrong">
          <span className="summary-stat__icon" aria-hidden="true">✗</span>
          <span className="summary-stat__value">{wrongCount}</span>
          <span className="summary-stat__label">Noto'g'ri</span>
        </div>
        {timeSpent && (
          <div className="summary-stat summary-stat--time">
            <span className="summary-stat__icon" aria-hidden="true">⏱</span>
            <span className="summary-stat__value">{timeSpent}</span>
            <span className="summary-stat__label">Vaqt</span>
          </div>
        )}
      </div>

      {/* Wrong answers review */}
      {wrongAnswers && wrongAnswers.length > 0 && (
        <div className="quiz-summary__review">
          <button
            className="btn btn--ghost"
            onClick={() => setShowWrong(!showWrong)}
            aria-expanded={showWrong}
          >
            {showWrong ? '▲ Yashirish' : '▼ Noto\'g\'ri javoblarni ko\'rish'} ({wrongAnswers.length} ta)
          </button>

          {showWrong && (
            <div className="quiz-summary__wrong-list animate-fade-in">
              {wrongAnswers.map((w, i) => (
                <div key={i} className="wrong-item">
                  <p className="wrong-item__question">
                    <span className="wrong-item__num">{i + 1}.</span> {w.savol}
                  </p>
                  <div className="wrong-item__answers">
                    <p className="wrong-item__your">
                      <span className="wrong-item__label wrong-item__label--wrong" aria-label="Sizning javobingiz">✗</span>
                      {w.tanlanganJavob}
                    </p>
                    <p className="wrong-item__correct">
                      <span className="wrong-item__label wrong-item__label--correct" aria-label="To'g'ri javob">✓</span>
                      {w.togriJavob}
                    </p>
                  </div>
                  <p className="wrong-item__explanation">
                    <span aria-hidden="true">💡</span> {w.izoh}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="quiz-summary__actions">
        <button className="btn btn--primary btn--lg" onClick={onRetry}>
          <span aria-hidden="true">🔄</span> Qayta urinish
        </button>
        <button className="btn btn--ghost btn--lg" onClick={onGoHome}>
          <span aria-hidden="true">🏠</span> Bosh sahifaga
        </button>
      </div>
    </div>
  )
}
