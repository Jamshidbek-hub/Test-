import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getStats } from '../utils/storage'
import { formatTime } from '../utils/quiz'
import './ResultsPage.css'

export default function ResultsPage({ results = [] }) {
  const stats = useMemo(() => getStats(results), [results])

  return (
    <div className="results-page container animate-fade-in">
      <div className="results-page__header">
        <h1 className="results-page__title">
          <span aria-hidden="true">📊</span> Natijalar va statistika
        </h1>
        <p className="results-page__subtitle">
          Barcha topshirilgan testlar va imtihonlar tarixi hamda umumiy ko'rsatkichlaringiz
        </p>
      </div>

      {results.length === 0 ? (
        <div className="results-page__empty">
          <div className="results-page__empty-icon" aria-hidden="true">📝</div>
          <h2>Hozircha natijalar yo'q</h2>
          <p>Test yoki imtihon topshiring va natijalaringiz shu yerda jamlanadi.</p>
          <Link to="/" className="btn btn--primary btn--lg">
            Mashqni boshlash
          </Link>
        </div>
      ) : (
        <>
          {/* Overview Grid */}
          <div className="stats__grid results-page__stats-grid">
            <div className="stat-card">
              <span className="stat-card__value">{stats.totalQuizzes}</span>
              <span className="stat-card__label">Jami testlar</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__value">{stats.totalQuestions}</span>
              <span className="stat-card__label">Yechilgan savollar</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__value">{stats.averageScore}%</span>
              <span className="stat-card__label">O'rtacha natija</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__value">{stats.totalCorrect}</span>
              <span className="stat-card__label">To'g'ri javoblar</span>
            </div>
          </div>

          {/* Weak Topics */}
          {stats.weakTopics.length > 0 && (
            <div className="stats__weak results-page__weak">
              <h2 className="stats__weak-title">
                <span aria-hidden="true">⚠️</span> Ko'proq e'tibor qaratish kerak bo'lgan mavzular
              </h2>
              <div className="stats__weak-list">
                {stats.weakTopics.map((t, i) => (
                  <div key={i} className="weak-topic">
                    <span className="weak-topic__name">{t.topic}</span>
                    <div className="weak-topic__bar-wrap">
                      <div
                        className="weak-topic__bar"
                        style={{ width: `${t.errorRate}%` }}
                        role="progressbar"
                        aria-valuenow={t.errorRate}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${t.topic}: ${t.errorRate}% xato`}
                      />
                    </div>
                    <span className="weak-topic__pct">{t.errorRate}% xato</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* History List */}
          <div className="results-page__history">
            <h2 className="results-page__section-title">
              <span aria-hidden="true">📜</span> Testlar tarixi
            </h2>
            <div className="results-page__list">
              {results.map((res) => {
                const dateStr = res.date
                  ? new Date(res.date).toLocaleString('uz-UZ', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })
                  : 'Noma\'lum'

                const isGood = res.percentage >= 70

                return (
                  <div key={res.id} className="history-card">
                    <div className="history-card__main">
                      <div className="history-card__type">
                        <span className={`history-badge history-badge--${res.type}`}>
                          {res.type === 'imtihon' ? '⏱️ Imtihon' : '📝 Mashq'}
                        </span>
                        {res.sinf && (
                          <span className="history-badge history-badge--sinf">
                            {res.sinf}-sinf
                          </span>
                        )}
                        {res.bolim && (
                          <span className="history-badge history-badge--bolim">
                            {res.bolim === 'uzbekiston' ? "O'zbekiston tarixi" : 'Jahon tarixi'}
                          </span>
                        )}
                      </div>
                      <div className="history-card__topic">
                        {res.mavzu || "Barcha mavzular"}
                      </div>
                      <div className="history-card__meta">
                        <span>{dateStr}</span>
                        {res.timeSpent && <span>• Vaqt: {formatTime(res.timeSpent)}</span>}
                        <span>• {res.correctCount} / {res.totalQuestions} to'g'ri</span>
                      </div>
                    </div>
                    <div className="history-card__score">
                      <span className={`history-card__pct ${isGood ? 'history-card__pct--good' : 'history-card__pct--bad'}`}>
                        {res.percentage}%
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

