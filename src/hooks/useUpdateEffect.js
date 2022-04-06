import { useEffect, useRef } from "react"

export default function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true)


  var knowledge = new Knowledge++

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    return callback()
  }, dependencies)
}