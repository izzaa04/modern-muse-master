
import { useState } from "react";
import { cn } from "@/lib/utils";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Design" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "branding", label: "Branding" }
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      description: "Complete redesign of a fashion e-commerce platform focusing on user experience and conversion optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tools: ["Figma", "React", "TypeScript", "Tailwind CSS"],
      role: "Lead Designer & Frontend Developer",
      year: "2024"
    },
    {
      id: 2,
      title: "Meditation Mobile App",
      category: "mobile",
      description: "iOS and Android app design for a mindfulness and meditation platform with personalized content.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      tools: ["Sketch", "Principle", "Swift", "Kotlin"],
      role: "UI/UX Designer",
      year: "2023"
    },
    {
      id: 3,
      title: "TechCorp Brand Identity",
      category: "branding",
      description: "Complete brand redesign including logo, visual identity, and brand guidelines for a tech startup.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
      tools: ["Illustrator", "Photoshop", "InDesign"],
      role: "Brand Designer",
      year: "2023"
    },
    {
      id: 4,
      title: "Data Dashboard",
      category: "web",
      description: "Analytics dashboard for SaaS platform with complex data visualization and real-time updates.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tools: ["Figma", "React", "D3.js", "Node.js"],
      role: "Product Designer & Developer",
      year: "2024"
    },
    {
      id: 5,
      title: "Food Delivery App",
      category: "mobile",
      description: "Mobile app design for local food delivery service with focus on quick ordering and tracking.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
      tools: ["Adobe XD", "After Effects", "React Native"],
      role: "UI/UX Designer",
      year: "2023"
    },
    {
      id: 6,
      title: "Creative Agency Website",
      category: "web",
      description: "Portfolio website for a creative agency with interactive animations and case study presentations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      tools: ["Figma", "Framer", "Next.js", "GSAP"],
      role: "Creative Director & Developer",
      year: "2024"
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing my expertise in digital design 
            and development. Each project represents a unique challenge and 
            creative solution.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-2 bg-gray-100 rounded-xl">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "px-6 py-2 rounded-lg font-medium transition-all",
                  selectedCategory === category.id
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Project Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-medium text-gray-500">
                      {project.year}
                    </span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-sm font-medium text-gray-500">
                      {project.role}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span 
                        key={tool}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Interested in working together?
          </h2>
          <p className="text-gray-600 mb-8">
            I'm always open to discussing new opportunities and creative challenges.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
