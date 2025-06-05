import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/certificates", label: "Certificates" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-0 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-3xl font-bold gradient-text hover:scale-110 transition-transform duration-300"
          >
            IF
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative group",
                  location.pathname === item.path
                    ? "text-purple-300"
                    : "text-gray-300 hover:text-white"
                )}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 transition-all duration-300 group-hover:w-full"></span>
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-300 to-pink-300"></span>
                )}
              </Link>
            ))}
            <a
              href="/Resume.pdf"
              download
              className="glow-button text-white flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div className={cn(
                "w-6 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 transition-all",
                isMenuOpen ? "rotate-45 translate-y-0.5" : ""
              )} />
              <div className={cn(
                "w-6 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 mt-1 transition-all",
                isMenuOpen ? "-rotate-45 -translate-y-0.5" : ""
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    location.pathname === item.path
                      ? "text-purple-300"
                      : "text-gray-300"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/Resume.pdf"
                download
                className="glow-button text-white flex items-center gap-2 w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
