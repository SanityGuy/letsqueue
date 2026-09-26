export default function NotFound() {
    return (
        <div className="flex min-h-[100vh] items-center justify-center bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
            <div className="max-w-2xl text-center">
                <h1 className="text-8xl font-bold tracking-tight text-brand-primary sm:text-9xl">
                    404
                </h1>
                <p className="mt-2 text-3xl font-bold tracking-light text-brand-primary sm:text-4xl">
                    Page not found
                </p>
            </div>
        </div>
    )
}