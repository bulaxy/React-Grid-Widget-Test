import { useState } from "react"

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(() => {
    if (typeof defaultValue === "function") {
      return defaultValue()
    } else {
      return defaultValue
    }
  })

  const onToggle = (value) => {
    setValue(prevVal => typeof value === 'boolean' ? value : !prevVal)
  }
  
  return [value, onToggle]
}