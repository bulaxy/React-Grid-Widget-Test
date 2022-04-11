import { NavbarProvider } from "../../contexts/NavbarContext";
import Navbar from './Navbar'
import SettingsOffCanvas from './SettingsOffCanvas'
import NotificationsDropdown from './NotificationsDropdown'

export default function GridContentLayout() {
    return (
        <NavbarProvider>
            <Navbar />
            <SettingsOffCanvas />
            <NotificationsDropdown />
        </NavbarProvider>
    );
}