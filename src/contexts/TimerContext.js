import React, { useContext, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const ReactGridContext = React.createContext()

export const useReactGridContext = () => {
    return useContext(ReactGridContext)
}

export const ReactGridProvider = ({ children , }) => {
    const [items, setItems] = useLocalStorage('Timer-Records', [])
    const [mode, setMode] = useState('view')

    const editMode = mode === 'edit'
    const toggleEditMode = () => {
        setMode(editMode ? 'view' : 'edit')
    }

    return (
        <ReactGridContext.Provider
            value={{
                items,
                setItems,
                mode,
                setMode,
                editMode,
                toggleEditMode
            }}
        >
            {children}
        </ReactGridContext.Provider>
    )
}