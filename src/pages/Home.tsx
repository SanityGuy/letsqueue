export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-4">
            <h1 className="text-3xl font-bold">LetsQueue!</h1>
            <p className="text-lg">
                A simple queue app to demonstrate how to use React hooks.
            </p>
        </div>
        <div className="w-full max-w-md space-y-4">
            <h2 className="text-2xl font-bold">
                Features
            </h2>
            <ul className="list-disc list-inside">
                <li>Simple Queue</li>
                <li>Add to Queue</li>
                <li>Remove from Queue</li>
                <li>Clear Queue</li>
            </ul>
        </div>
    </div>
  )
}   