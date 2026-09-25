import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-4">
            <Outlet />
        </div>
    </main>
  )
}