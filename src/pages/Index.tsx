
import { Link } from "react-router-dom";
import { Download, Sparkles } from "lucide-react";

const Index = () => {
  const handleDownloadResume = () => {
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
    <div className="min-h-screen relative">
      {/* Hero Section - Only Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Column - Text */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-pink-400">
                  <Sparkles className="w-6 h-6" />
                  <span className="text-lg font-medium">Digital Creator</span>
                </div>
                <h1 className="text-6xl lg:text-8xl font-black leading-tight">
                  <span className="gradient-text">Alex</span>
                  <br />
                  <span className="text-white">Designer</span>
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full"></div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Crafting magical digital experiences through thoughtful design and clean code. 
                Passionate about bridging creativity and technology in the cosmic realm of possibilities.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/portfolio">
                  <button className="glow-button flex items-center gap-3">
                    <Sparkles className="w-5 h-5" />
                    View My Universe
                  </button>
                </Link>
                
                <button 
                  onClick={handleDownloadResume}
                  className="glass-card px-8 py-3 text-lg font-medium text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-3 border border-white/20 hover:border-pink-400/50"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative animate-fade-in parallax">
              <div className="aspect-square glass-card p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face"
                  alt="Alex Designer"
                  className="w-full h-full object-cover rounded-xl relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl z-20"></div>
              </div>
              
              {/* Floating Info Card */}
              <div className="absolute -bottom-8 -left-8 glass-card p-6 border border-pink-400/30 group">
                <div className="text-sm text-pink-400 mb-1 flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                  Currently at
                </div>
                <div className="font-bold text-white text-lg">TechCorp</div>
                <div className="text-sm text-gray-300">Senior UI/UX Designer</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
