import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}