import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import ExamPage from './pages/ExamPage'
import ResultsPage from './pages/ResultsPage'
import { loadResults, saveResults } from './utils/storage'

function App() {
  const [results, setResults] = useState([])

  useEffect(() => {
    setResults(loadResults())
  }, [])

  const addResult = (result) => {
    const updated = [result, ...results].slice(0, 100) // keep last 100
    setResults(updated)
    saveResults(updated)
  }

  return (
    <>
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage results={results} />} />
          <Route path="/quiz" element={<QuizPage onFinish={addResult} />} />
          <Route path="/exam" element={<ExamPage onFinish={addResult} />} />
          <Route path="/results" element={<ResultsPage results={results} />} />
        </Routes>
      </main>
    </>
  )
}

export default App
