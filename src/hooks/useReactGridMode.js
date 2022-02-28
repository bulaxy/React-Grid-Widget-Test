import { useState } from "react"
import useLocalStorage from "./useLocalStorage"

export default function useReactGridMode() {
  const [items, setItems] = useLocalStorage('RGLItems', [])
  const [mode, setMode] = useState('view')

  return { mode, setMode, items, setItems }
}