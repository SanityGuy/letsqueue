import { Outlet } from 'react-router-dom'
import Footer from '../components/homepage/Footer'

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}