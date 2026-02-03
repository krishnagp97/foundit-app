import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-gray-400 border-t-2 border-gray-500 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <p className="text-xs text-gray-600 text-center mb-8">
          <span className="font-medium">Disclaimer:</span> FoundIt is a community-driven platform. 
          Please verify ownership before handing over items.
        </p>

        <div className="flex flex-wrap gap-y-10">
 
          <div className="w-full md:w-1/2 lg:w-5/12">
            <div className="flex flex-col h-full justify-between">
              <div className="flex items-center mb-4">
                <Logo width="50px" />
                <span className="ml-2 text-xl font-semibold text-gray-800">FoundIt</span>
              </div>
              <p className="text-sm text-gray-600 max-w-sm">
                Helping lost items find their way back through a trusted community.
              </p>
              <p className="text-sm text-gray-500 mt-6">
                © 2026 FoundIt. All rights reserved.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-2/12">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-wide text-gray-700">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link className="text-gray-800 hover:text-blue-700 transition" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-gray-800 hover:text-blue-700 transition" to="/all-posts">
                  All Posts
                </Link>
              </li>
              <li>
                <Link className="text-gray-800 hover:text-blue-700 transition" to="/add-post">
                  Add Post
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12">
                <a
                  href="mailto:support@foundit.com"
                  className="hover:text-blue-700 transition"
                >
                  Support/Feedback
                </a>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
