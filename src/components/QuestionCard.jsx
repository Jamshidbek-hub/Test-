import { useState } from 'react'
import './QuestionCard.css'

const VARIANT_LABELS = ['A', 'B', 'C']

export default function QuestionCard({ question, onAnswer, isAnswered, selectedAnswer }) {
  const [selected, setSelected] = useState(selectedAnswer ?? null)

  const handleSelect = (index) => {
    if (isAnswered || selected !== null) return
    setSelected(index)
    onAnswer(index)
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleSelect(index)
    }
  }

  const getVariantClass = (index) => {
    if (selected === null) return ''
    if (index === question.togriJavob) return 'variant--correct'
    if (index === selected && index !== question.togriJavob) return 'variant--wrong'
    return 'variant--dimmed'
  }

  const getVariantIcon = (index) => {
    if (selected === null) return null
    if (index === question.togriJavob) return '✓'
    if (index === selected && index !== question.togriJavob) return '✗'
    return null
  }

  const answered = selected !== null

  return (
    <div className="question-card animate-scale-in">
      <div className="question-card__pattern pattern-overlay"></div>

      {/* Metadata */}
      <div className="question-card__meta">
        <span className="question-card__badge question-card__badge--sinf">
          {question.sinf}-sinf
        </span>
        <span className="question-card__badge question-card__badge--bolim">
          {question.bolim === 'uzbekiston' ? "O'zbekiston tarixi" : "Jahon tarixi"}
        </span>
        <span className={`question-card__badge question-card__badge--${question.qiyinlik === "o'rta" ? 'orta' : question.qiyinlik}`}>
          {question.qiyinlik === 'oson' ? 'Oson' : (question.qiyinlik === 'orta' || question.qiyinlik === "o'rta") ? "O'rta" : 'Qiyin'}
        </span>
      </div>

      {/* Question text */}
      <h2 className="question-card__text">{question.savol}</h2>

      {/* Variants */}
      <div className="question-card__variants" role="radiogroup" aria-label="Javob variantlari">
        {question.variantlar.map((variant, index) => (
          <button
            key={index}
            className={`variant ${getVariantClass(index)}`}
            onClick={() => handleSelect(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            disabled={answered}
            role="radio"
            aria-checked={selected === index}
            aria-label={`${VARIANT_LABELS[index]}: ${variant.replace(/^[A-C]\)\s*/, '')}`}
          >
            <span className="variant__label" aria-hidden="true">
              {VARIANT_LABELS[index]}
            </span>
            <span className="variant__text">
              {variant.replace(/^[A-C]\)\s*/, '')}
            </span>
            {getVariantIcon(index) && (
              <span className={`variant__icon ${getVariantIcon(index) === '✓' ? 'variant__icon--correct' : 'variant__icon--wrong'}`} aria-hidden="true">
                {getVariantIcon(index)}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Explanation */}
      {answered && (
        <div className={`question-card__explanation animate-fade-in ${selected === question.togriJavob ? 'question-card__explanation--correct' : 'question-card__explanation--wrong'}`}>
          <div className="explanation__header">
            <span className="explanation__icon" aria-hidden="true">
              {selected === question.togriJavob ? '🎉' : '💡'}
            </span>
            <span className="explanation__status">
              {selected === question.togriJavob ? "To'g'ri javob!" : "Noto'g'ri javob"}
            </span>
          </div>
          <p className="explanation__text">{question.izoh}</p>
        </div>
      )}

      {/* Demo notice */}
      <p className="question-card__notice">Namunaviy savol</p>
    </div>
  )
}
