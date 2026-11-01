import { questions, MAVZULAR } from '../data/questions'

/**
 * Filter questions by criteria
 */
export function filterQuestions({ sinf, bolim, mavzu, qiyinlik }) {
  return questions.filter(q => {
    if (sinf && q.sinf !== sinf) return false
    if (bolim && q.bolim !== bolim) return false
    if (mavzu && q.mavzu !== mavzu) return false
    if (qiyinlik) {
      const qDiff = q.qiyinlik === "o'rta" ? 'orta' : q.qiyinlik
      const filterDiff = qiyinlik === "o'rta" ? 'orta' : qiyinlik
      if (qDiff !== filterDiff) return false
    }
    return true
  })
}

/**
 * Shuffle array using Fisher-Yates
 */
export function shuffleArray(arr) {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * Get a set of quiz questions
 */
export function getQuizQuestions({ sinf, bolim, mavzu, qiyinlik, count = 10 }) {
  let filtered = filterQuestions({ sinf, bolim, mavzu, qiyinlik })
  filtered = shuffleArray(filtered)
  return filtered.slice(0, Math.min(count, filtered.length))
}

/**
 * Get topics for a given grade and section
 */
export function getTopics(sinf, bolim) {
  if (!sinf || !bolim) return []
  const sinfMavzular = MAVZULAR[sinf]
  if (!sinfMavzular) return []
  return sinfMavzular[bolim] || []
}

/**
 * Get question count for given criteria
 */
export function getQuestionCount({ sinf, bolim, mavzu, qiyinlik }) {
  return filterQuestions({ sinf, bolim, mavzu, qiyinlik }).length
}

/**
 * Format time in mm:ss
 */
export function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}
