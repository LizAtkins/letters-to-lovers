import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'a-love-lost', label: 'I lost', path: '/category/a-love-lost' },
    { id: 'i-regret', label: 'I regret', path: '/category/i-regret' },
    { id: 'i-cant-have', label: "I can't have", path: '/category/i-cant-have' },
    { id: 'scarred-me', label: 'Scarred me', path: '/category/scarred-me' },
    { id: 'understands', label: 'Understands', path: '/category/understands' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown and mobile menu when route changes
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-coquette-card-bg border-b border-coquette-card-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home Link */}
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
            >
              Home
            </Link>
            
            {/* Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="nav-link flex items-center space-x-1 hover:text-coquette-text"
              >
                <span>A love that...</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Content */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-coquette-card-bg border border-coquette-card-border rounded-lg shadow-lg py-2 z-50">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={category.path}
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        isActive(category.path)
                          ? 'nav-link-active bg-coquette-primary/10'
                          : 'nav-link hover:bg-coquette-primary/5'
                      }`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {category.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Secondary Navigation */}
            <Link
              to="/about"
              className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-4 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-coquette-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-coquette-card-border">
            <div className="space-y-2">
              <Link
                to="/"
                className={`block px-4 py-2 text-sm nav-link ${
                  isActive('/') ? 'nav-link-active' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="border-t border-coquette-card-border my-2" />
              <div className="block px-4 py-2 text-sm nav-link font-medium text-coquette-text mb-3">A love that...</div>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={category.path}
                  className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                    isActive(category.path)
                      ? 'nav-link-active bg-coquette-primary/10'
                      : 'nav-link hover:bg-coquette-primary/5'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {category.label}
                </Link>
              ))}
              <div className="border-t border-coquette-card-border pt-2 mt-4">
                <Link
                  to="/about"
                  className={`block px-4 py-2 text-sm nav-link ${
                    isActive('/about') ? 'nav-link-active' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className={`block px-4 py-2 text-sm nav-link ${
                    isActive('/contact') ? 'nav-link-active' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 