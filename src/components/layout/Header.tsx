import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, BriefcaseIcon, UserIcon, MessageCircleIcon } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from auth context in a real app
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <BriefcaseIcon className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-gray-900">JobPortal</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link to="/jobs" className="text-gray-700 hover:text-blue-600 font-medium">
            Jobs
          </Link>
          <Link to="/companies" className="text-gray-700 hover:text-blue-600 font-medium">
            Companies
          </Link>
          {isLoggedIn ? <div className="flex items-center space-x-6">
              <Link to="/chat" className="text-gray-700 hover:text-blue-600">
                <MessageCircleIcon className="h-6 w-6" />
              </Link>
              <Link to="/profile/johndoe" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <UserIcon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="font-medium">John Doe</span>
              </Link>
            </div> : <div className="flex items-center space-x-4">
              <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                Login
              </Link>
              <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
                Register
              </Link>
            </div>}
        </nav>
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium py-2">
              Home
            </Link>
            <Link to="/jobs" className="text-gray-700 hover:text-blue-600 font-medium py-2">
              Jobs
            </Link>
            <Link to="/companies" className="text-gray-700 hover:text-blue-600 font-medium py-2">
              Companies
            </Link>
            {isLoggedIn ? <>
                <Link to="/chat" className="text-gray-700 hover:text-blue-600 font-medium py-2 flex items-center">
                  <MessageCircleIcon className="h-5 w-5 mr-2" />
                  Messages
                </Link>
                <Link to="/profile/johndoe" className="text-gray-700 hover:text-blue-600 font-medium py-2 flex items-center">
                  <UserIcon className="h-5 w-5 mr-2" />
                  Profile
                </Link>
              </> : <div className="flex flex-col space-y-3 pt-2">
                <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                  Login
                </Link>
                <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium text-center">
                  Register
                </Link>
              </div>}
          </nav>
        </div>}
    </header>;
};
export default Header;