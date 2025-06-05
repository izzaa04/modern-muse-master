
import { Link } from "react-router-dom";
import { Download, Youtube } from "lucide-react";

const Index = () => {
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
    <div className="min-h-screen relative">
      {/* Hero Section - Only Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Column - Text */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-pink-400">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                  <span className="text-lg font-medium">Creative Computing Graduate</span>
                </div>
                <h1 className="text-6xl lg:text-8xl font-black leading-tight">
                  <span className="gradient-text">Izza</span>
                  <br />
                  <span className="text-white">Fatima</span>
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full"></div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Creative and detail-oriented digital creator with a passion for UI/UX design, 
                web development, game and app creation. Skilled in blending aesthetic design with 
                functional usability. Holds a valid driving license, which adds to my flexibility 
                and readiness for on-site or collaborative work.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <a href="https://www.youtube.com/@izzafatima5469" target="_blank" rel="noopener noreferrer">
                  <button className="glow-button flex items-center gap-3">
                    <Youtube className="w-5 h-5" />
                    Visit My YouTube
                  </button>
                </a>
                
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
                  src="/lovable-uploads/0c9a8b6e-4a8e-49dd-9fc7-7b10b4d5f0cd.png"
                  alt="Izza Fatima"
                  className="w-full h-full object-cover rounded-xl relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl z-20"></div>
              </div>
              
              {/* Floating Info Card */}
              <div className="absolute -bottom-8 -left-8 glass-card p-6 border border-pink-400/30 group">
                <div className="text-sm text-pink-400 mb-1 flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                  Status
                </div>
                <div className="font-bold text-white text-lg">Available for Work</div>
                <div className="text-sm text-gray-300">Creative Computing Graduate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
