import { useState, useMemo, Suspense, lazy } from 'react'
import { useNavigate } from 'react-router-dom'
import { SINFLAR, BOLIMLAR, QIYINLIK_DARAJALARI } from '../data/questions'
import { getTopics, getQuestionCount } from '../utils/quiz'
import { getStats } from '../utils/storage'
import './HomePage.css'

const Globe3D = lazy(() => import('../components/Globe3D'))

export default function HomePage({ results }) {
  const navigate = useNavigate()

  const [sinf, setSinf] = useState(null)
  const [bolim, setBolim] = useState(null)
  const [mavzu, setMavzu] = useState(null)
  const [qiyinlik, setQiyinlik] = useState(null)

  const topics = useMemo(() => getTopics(sinf, bolim), [sinf, bolim])
  const questionCount = useMemo(
    () => getQuestionCount({ sinf, bolim, mavzu, qiyinlik }),
    [sinf, bolim, mavzu, qiyinlik]
  )
  const stats = useMemo(() => getStats(results), [results])

  const handleSinfChange = (s) => {
    setSinf(s)
    setBolim(null)
    setMavzu(null)
    setQiyinlik(null)
  }

  const handleBolimChange = (b) => {
    setBolim(b)
    setMavzu(null)
  }

  const startQuiz = () => {
    if (!sinf) return
    const params = new URLSearchParams()
    params.set('sinf', sinf)
    if (bolim) params.set('bolim', bolim)
    if (mavzu) params.set('mavzu', mavzu)
    if (qiyinlik) params.set('qiyinlik', qiyinlik)
    navigate(`/quiz?${params.toString()}`)
  }

  const startExam = () => {
    if (!sinf) return
    const params = new URLSearchParams()
    params.set('sinf', sinf)
    if (bolim) params.set('bolim', bolim)
    if (qiyinlik) params.set('qiyinlik', qiyinlik)
    navigate(`/exam?${params.toString()}`)
  }

  const canStart = sinf && questionCount > 0

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__bg-pattern pattern-overlay"></div>
        <div className="hero__globe">
          <Suspense fallback={<div className="globe-placeholder" aria-hidden="true" />}>
            <Globe3D />
          </Suspense>
        </div>
        <div className="hero__content container">
          <h1 className="hero__title animate-fade-in">
            Tarix bo'yicha sertifikat<br />
            imtihoniga <span className="hero__title-accent">tayyorlaning</span>
          </h1>
          <p className="hero__desc animate-fade-in" style={{ animationDelay: '0.15s' }}>
            O'zbekiston tarixi va Jahon tarixidan namunaviy savollar bilan bilimingizni sinang.
            5-11-sinf o'quvchilari uchun mo'ljallangan.
          </p>
        </div>
      </section>

      {/* Selection Section */}
      <section className="selection container animate-slide-up" style={{ animationDelay: '0.25s' }}>
        <div className="selection__card">
          <h2 className="selection__title">
            <span className="selection__title-icon" aria-hidden="true">🎯</span>
            Mavzuni tanlang
          </h2>

          {/* Sinf */}
          <div className="selection__group">
            <label className="selection__label">Sinf</label>
            <div className="selection__chips" role="radiogroup" aria-label="Sinf tanlash">
              {SINFLAR.map(s => (
                <button
                  key={s}
                  className={`chip ${sinf === s ? 'chip--active' : ''}`}
                  onClick={() => handleSinfChange(s)}
                  role="radio"
                  aria-checked={sinf === s}
                >
                  {s}-sinf
                </button>
              ))}
            </div>
          </div>

          {/* Bo'lim */}
          {sinf && (
            <div className="selection__group animate-fade-in">
              <label className="selection__label">Bo'lim</label>
              <div className="selection__chips" role="radiogroup" aria-label="Bo'lim tanlash">
                {BOLIMLAR.map(b => (
                  <button
                    key={b.id}
                    className={`chip chip--wide ${bolim === b.id ? 'chip--active' : ''}`}
                    onClick={() => handleBolimChange(b.id)}
                    role="radio"
                    aria-checked={bolim === b.id}
                  >
                    {b.nomi}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Mavzu */}
          {bolim && topics.length > 0 && (
            <div className="selection__group animate-fade-in">
              <label className="selection__label">Mavzu <span className="selection__optional">(ixtiyoriy)</span></label>
              <div className="selection__chips" role="radiogroup" aria-label="Mavzu tanlash">
                <button
                  className={`chip chip--wide ${mavzu === null ? 'chip--active' : ''}`}
                  onClick={() => setMavzu(null)}
                  role="radio"
                  aria-checked={mavzu === null}
                >
                  Barcha mavzular
                </button>
                {topics.map(t => (
                  <button
                    key={t}
                    className={`chip chip--wide ${mavzu === t ? 'chip--active' : ''}`}
                    onClick={() => setMavzu(t)}
                    role="radio"
                    aria-checked={mavzu === t}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Qiyinlik */}
          {sinf && (
            <div className="selection__group animate-fade-in">
              <label className="selection__label">Qiyinlik darajasi <span className="selection__optional">(ixtiyoriy)</span></label>
              <div className="selection__chips" role="radiogroup" aria-label="Qiyinlik darajasi">
                <button
                  className={`chip ${qiyinlik === null ? 'chip--active' : ''}`}
                  onClick={() => setQiyinlik(null)}
                  role="radio"
                  aria-checked={qiyinlik === null}
                >
                  Barchasi
                </button>
                {QIYINLIK_DARAJALARI.map(q => (
                  <button
                    key={q.id}
                    className={`chip ${qiyinlik === q.id ? 'chip--active' : ''}`}
                    onClick={() => setQiyinlik(q.id)}
                    role="radio"
                    aria-checked={qiyinlik === q.id}
                  >
                    {q.nomi}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question count & actions */}
          {sinf && (
            <div className="selection__footer animate-fade-in">
              <p className="selection__count">
                {questionCount > 0 ? (
                  <>Mavjud savollar: <strong>{questionCount} ta</strong></>
                ) : (
                  <span className="selection__count--empty">Bu tanlov uchun savollar topilmadi</span>
                )}
              </p>
              <div className="selection__actions">
                <button
                  className="btn btn--primary btn--lg"
                  onClick={startQuiz}
                  disabled={!canStart}
                  aria-label="Mashqni boshlash"
                >
                  <span aria-hidden="true">📝</span> Mashqni boshlash
                </button>
                <button
                  className="btn btn--secondary btn--lg"
                  onClick={startExam}
                  disabled={!canStart}
                  aria-label="Imtihon rejimini boshlash"
                >
                  <span aria-hidden="true">⏱️</span> Imtihon rejimi
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      {stats.totalQuizzes > 0 && (
        <section className="stats container animate-slide-up" style={{ animationDelay: '0.35s' }}>
          <h2 className="stats__title">
            <span aria-hidden="true">📈</span> Sizning rivojlanishingiz
          </h2>
          <div className="stats__grid">
            <div className="stat-card">
              <span className="stat-card__value">{stats.totalQuizzes}</span>
              <span className="stat-card__label">Mashqlar soni</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__value">{stats.totalQuestions}</span>
              <span className="stat-card__label">Jami savollar</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__value">{stats.averageScore}%</span>
              <span className="stat-card__label">O'rtacha ball</span>
            </div>
            <div className="stat-card">
              <span className="stat-card__value">{stats.totalCorrect}</span>
              <span className="stat-card__label">To'g'ri javoblar</span>
            </div>
          </div>

          {stats.weakTopics.length > 0 && (
            <div className="stats__weak">
              <h3 className="stats__weak-title">
                <span aria-hidden="true">⚠️</span> Ko'proq e'tibor qarating
              </h3>
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
        </section>
      )}

      {/* Footer */}
      <footer className="home-footer container">
        <p>Namunaviy savollar — faqat tayyorlanish uchun. Rasmiy imtihon savollari emas.</p>
      </footer>
    </div>
  )
}
