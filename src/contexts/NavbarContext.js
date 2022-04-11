import React, { useContext, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

const NavbarContext = React.createContext()

export const useNavbarContext = () => {
    return useContext(NavbarContext)
}

export const NavbarProvider = ({ children , }) => {
    const [items, setItems] = useLocalStorage('Navbar', [])
    const [mode, setMode] = useState('view')

    const editMode = mode === 'edit'
    const toggleEditMode = () => {
        setMode(editMode ? 'view' : 'edit')
    }

    return (
        <NavbarContext.Provider
            value={{
            }}
        >
            {children}
        </NavbarContext.Provider>
    )
}