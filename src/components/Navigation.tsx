
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const handleDownloadResume = () => {
    // Create a simple text resume for demo purposes
    const resumeContent = `
ALEX DESIGNER
Digital Designer & Developer

Contact: alex@example.com | (555) 123-4567
Portfolio: alexdesigner.com

EXPERIENCE:
- Senior UI/UX Designer at TechCorp (2022-Present)
- Frontend Developer at CreativeStudio (2020-2022)
- Junior Designer at DesignHub (2019-2020)

SKILLS:
- Design: Figma, Adobe Creative Suite, Sketch
- Development: React, TypeScript, Tailwind CSS
- Tools: Git, Framer, Principle

EDUCATION:
Bachelor of Fine Arts in Digital Design
Creative University (2019)
    `;

    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "alex-designer-resume.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            AD
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors relative",
                  location.pathname === item.path
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-900" />
                )}
              </Link>
            ))}
            <button
              onClick={handleDownloadResume}
              className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Download Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <div className={cn(
                "w-6 h-0.5 bg-gray-900 transition-all",
                isMenuOpen ? "rotate-45 translate-y-0.5" : ""
              )} />
              <div className={cn(
                "w-6 h-0.5 bg-gray-900 mt-1 transition-all",
                isMenuOpen ? "-rotate-45 -translate-y-0.5" : ""
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    location.pathname === item.path
                      ? "text-gray-900"
                      : "text-gray-600"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  handleDownloadResume();
                  setIsMenuOpen(false);
                }}
                className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors text-left"
              >
                Download Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
