import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, Sparkles, Code, Palette } from "lucide-react";

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
      {/* Hero Section */}
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
                    <Palette className="w-5 h-5" />
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

      {/* Skills Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold gradient-text mb-6">
              Cosmic Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Wielding design magic and code sorcery to create digital experiences 
              that transcend the ordinary and inspire the extraordinary.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="w-8 h-8 text-pink-400" />,
                title: "UI/UX Design",
                description: "Creating intuitive and beautiful interfaces that prioritize user experience and accessibility across all dimensions.",
                skills: ["Figma", "Adobe XD", "Sketch", "Principle"],
                gradient: "from-pink-400/20 to-purple-400/20"
              },
              {
                icon: <Code className="w-8 h-8 text-purple-400" />,
                title: "Frontend Development", 
                description: "Building responsive web applications with modern technologies and cosmic-level best practices.",
                skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
                gradient: "from-purple-400/20 to-blue-400/20"
              },
              {
                icon: <Sparkles className="w-8 h-8 text-blue-400" />,
                title: "Brand Design",
                description: "Developing cohesive visual identities that communicate brand values across the digital universe.",
                skills: ["Illustrator", "Photoshop", "InDesign", "After Effects"],
                gradient: "from-blue-400/20 to-pink-400/20"
              }
            ].map((service, index) => (
              <div key={index} className={`glass-card p-8 hover:bg-gradient-to-br hover:${service.gradient} transition-all duration-500 group border border-white/10 hover:border-white/20`}>
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full border border-white/10 hover:border-pink-400/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 border border-white/10">
            <h2 className="text-5xl font-bold gradient-text mb-8">
              Let's Create Magic Together
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Ready to embark on a creative journey through the cosmos? 
              Let's collaborate and bring extraordinary digital experiences to life.
            </p>
            <Link to="/contact">
              <button className="glow-button text-xl px-12 py-4 flex items-center gap-3 mx-auto">
                <Sparkles className="w-6 h-6" />
                Start Our Journey
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
