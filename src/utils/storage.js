const STORAGE_KEY = 'tarix_tayyorlov_results'

export function loadResults() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export function saveResults(results) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(results))
  } catch {
    // localStorage might be full or unavailable
    console.warn('Natijalarni saqlashda xatolik yuz berdi')
  }
}

export function getStats(results) {
  if (!results.length) {
    return {
      totalQuizzes: 0,
      totalQuestions: 0,
      totalCorrect: 0,
      averageScore: 0,
      weakTopics: [],
      recentResults: []
    }
  }

  const totalQuizzes = results.length
  const totalQuestions = results.reduce((sum, r) => sum + r.totalQuestions, 0)
  const totalCorrect = results.reduce((sum, r) => sum + r.correctCount, 0)
  const averageScore = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  // Find weak topics
  const topicStats = {}
  results.forEach(r => {
    if (r.wrongAnswers) {
      r.wrongAnswers.forEach(w => {
        const key = w.mavzu || r.mavzu || 'Noma\'lum'
        if (!topicStats[key]) {
          topicStats[key] = { total: 0, wrong: 0 }
        }
        topicStats[key].wrong++
        topicStats[key].total++
      })
    }
    if (r.correctAnswers) {
      r.correctAnswers.forEach(c => {
        const key = c.mavzu || r.mavzu || 'Noma\'lum'
        if (!topicStats[key]) {
          topicStats[key] = { total: 0, wrong: 0 }
        }
        topicStats[key].total++
      })
    }
  })

  const weakTopics = Object.entries(topicStats)
    .map(([topic, stats]) => ({
      topic,
      errorRate: stats.total > 0 ? Math.round((stats.wrong / stats.total) * 100) : 0,
      totalQuestions: stats.total,
      wrongCount: stats.wrong
    }))
    .filter(t => t.wrongCount > 0)
    .sort((a, b) => b.errorRate - a.errorRate)
    .slice(0, 5)

  return {
    totalQuizzes,
    totalQuestions,
    totalCorrect,
    averageScore,
    weakTopics,
    recentResults: results.slice(0, 5)
  }
}
