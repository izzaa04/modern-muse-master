
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

  const handleDownloadResume = () => {
    const resumeContent = `
IZZA FATIMA
Creative Computing Graduate & Digital Creator

Contact: izza@example.com | (555) 123-4567
Portfolio: izzafatima.com

EDUCATION:
BSc Creative Computing Graduate

EXPERIENCE:
- UI/UX Design Projects
- Web Development & Game Creation
- Stop Motion & Video Production
- Interactive Storytelling (Twine)
- Mobile App Design

SKILLS:
- Design: Figma, Adobe Creative Suite, Prototyping
- Development: Unity, HTML/CSS, JavaScript, Bitsy
- Creative: Stop Motion, Video Editing, Interactive Media
- Tools: Git, Creative Software, Game Development

ADDITIONAL QUALIFICATIONS:
Valid Driving License - Ready for on-site and collaborative work
    `;

    const blob = new Blob([resumeContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "izza-fatima-resume.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

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
            <button
              onClick={handleDownloadResume}
              className="glow-button text-white flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </button>
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
              <button
                onClick={() => {
                  handleDownloadResume();
                  setIsMenuOpen(false);
                }}
                className="glow-button text-white flex items-center gap-2 w-fit"
              >
                <Download size={16} />
                Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
