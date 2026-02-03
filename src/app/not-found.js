import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4 animate-bounce">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Oops! This page ran away...
      </h2>

      {/* Funny GIF */}
      <img
        src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
        alt="Funny 404"
        className="w-64 h-64 mb-6 rounded-lg shadow-lg animate-pulse"
      />

      <p className="text-gray-500 mb-6">
        The page you’re looking for is hiding. Don’t worry, it happens to the best of us!
      </p>

      <Link href="/">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition transform hover:scale-105 animate-bounce">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
