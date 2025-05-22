import { useEffect, useState } from "react"
import { PhrasesDevServices } from "../services/PhrasesDevServices"


export const usePhrasesDev = () => {
  const { getFrase } = PhrasesDevServices()
  const [advice, setAdvice] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [current, setCurrent] = useState<number>(-1)
  const [shown, setShown] = useState<Set<string>>(new Set())
  const [favorite, setFavorite] = useState<string | null>(null)


  useEffect(() => {
    const fetchAdvice = async () => {
      const frase = await getFrase()
      setAdvice(frase)
      setHistory([frase])
      setCurrent(0)
      setShown(new Set([frase]))
    }
    fetchAdvice()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const nextFrase = async () => {
    let frase: string = ''
    let attempts = 0
    do {
      frase = await getFrase()
      attempts++
      if (attempts > 10) break
    } while (shown.has(frase))
    setAdvice(frase)
    setHistory(prev => [...prev.slice(0, current + 1), frase])
    setCurrent(prev => prev + 1)
    setShown(prev => new Set(prev).add(frase))
  }

  const prevFrase = () => {
    if (current > 0) {
      setCurrent(prev => prev - 1)
      setAdvice(history[current - 1])
    }
  }

  const toggleFavorite = () => {
    if (advice === favorite) {
      setFavorite(null)
    } else {
      setFavorite(advice)
    }
  }

  const goToFavorite = () => {
    if (favorite) {
      setAdvice(favorite)
      setHistory(prev => [...prev.slice(0, current + 1), favorite])
      setCurrent(prev => prev + 1)
      setShown(prev => new Set(prev).add(favorite))
    }
  }

  return {
    advice,
    nextFrase,
    prevFrase,
    toggleFavorite,
    goToFavorite,
    isFavorite: advice === favorite,
    favorite,
    history,
    current,
    totalSeen: shown.size
  }
}