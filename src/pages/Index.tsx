
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Column - Text */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Alex
                  <br />
                  Designer
                </h1>
                <div className="w-24 h-1 bg-gray-900"></div>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Digital designer and developer crafting meaningful experiences 
                through thoughtful design and clean code. Passionate about 
                creating solutions that bridge creativity and technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/portfolio">
                  <Button 
                    size="lg" 
                    className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg font-medium"
                  >
                    View My Work
                  </Button>
                </Link>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={handleDownloadResume}
                  className="px-8 py-3 text-lg font-medium border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                >
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative animate-fade-in">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face"
                  alt="Alex Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="text-sm text-gray-600 mb-1">Currently at</div>
                <div className="font-semibold text-gray-900">TechCorp</div>
                <div className="text-sm text-gray-600">Senior UI/UX Designer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What I Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combining design thinking with technical expertise to create 
              digital experiences that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "UI/UX Design",
                description: "Creating intuitive and beautiful user interfaces that prioritize user experience and accessibility.",
                skills: ["Figma", "Adobe XD", "Sketch", "Principle"]
              },
              {
                title: "Frontend Development",
                description: "Building responsive web applications with modern technologies and best practices.",
                skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
              },
              {
                title: "Brand Design",
                description: "Developing cohesive visual identities that communicate brand values effectively.",
                skills: ["Illustrator", "Photoshop", "InDesign", "After Effects"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
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
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with 
            creative teams. Let's discuss how we can bring your ideas to life.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg font-medium"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
