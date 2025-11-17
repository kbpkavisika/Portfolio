export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 Portfolio. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-400">LinkedIn</a>
          <a href="#" className="hover:text-blue-400">GitHub</a>
          <a href="#" className="hover:text-blue-400">Email</a>
        </div>
      </div>
    </footer>
  )
}