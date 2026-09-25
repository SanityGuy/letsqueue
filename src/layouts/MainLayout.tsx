import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-light-bg text-light-text">
        <main>
            <Outlet />
        </main>
        </div>
    )
}