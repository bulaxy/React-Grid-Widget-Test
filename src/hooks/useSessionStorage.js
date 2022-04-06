import { useState, useEffect } from "react"

export default function useSessionStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = sessionStorage.getItem(key)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof defaultValue === "function") {
      return defaultValue()
    } else {
      return defaultValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}