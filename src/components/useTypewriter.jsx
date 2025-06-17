import { useState, useEffect } from "react"

export function useTypewriter(words, delay = 2000, typingSpeed = 100) {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!words || words.length === 0) return;

    // Update the text on each change
    setText(words[index].substring(0, subIndex))

    // If word is fully typed and not deleting
    if (subIndex === words[index].length && !deleting) {
      const timeout = setTimeout(() => setDeleting(true), delay)
      return () => clearTimeout(timeout)
    }

    // If word is fully deleted
    if (subIndex === 0 && deleting) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    // Continue typing or deleting
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1))
    }, deleting ? 50 : typingSpeed)

    return () => clearTimeout(timeout)
  }, [subIndex, index, deleting, words, delay, typingSpeed])

  return text
}
