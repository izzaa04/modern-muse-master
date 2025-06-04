
import { ExternalLink, Github, Sparkles } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Nebula E-commerce Platform",
      description: "A cosmic shopping experience with stellar UI/UX design and seamless user journey through product galaxies.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop",
      tools: ["React", "TypeScript", "Tailwind CSS", "Stripe"],
      role: "Lead Designer & Frontend Developer",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Aurora Mobile App",
      description: "A meditation and wellness app with enchanting animations and soothing user interface design.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      tools: ["Figma", "React Native", "Framer Motion", "Firebase"],
      role: "UI/UX Designer",
      category: "Mobile Design"
    },
    {
      id: 3,
      title: "Stardust Brand Identity",
      description: "Complete brand identity design for a tech startup, including logo, typography, and visual guidelines.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop",
      tools: ["Illustrator", "Photoshop", "InDesign", "After Effects"],
      role: "Brand Designer",
      category: "Branding"
    },
    {
      id: 4,
      title: "Cosmos Dashboard",
      description: "A comprehensive analytics dashboard with beautiful data visualizations and intuitive user experience.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      tools: ["Vue.js", "D3.js", "Chart.js", "Node.js"],
      role: "Full-stack Developer",
      category: "Web Development"
    },
    {
      id: 5,
      title: "Galaxy Social Platform",
      description: "A social networking platform focused on connecting creative professionals across the universe.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop",
      tools: ["Next.js", "GraphQL", "PostgreSQL", "AWS"],
      role: "Lead Frontend Developer",
      category: "Web Development"
    },
    {
      id: 6,
      title: "Moonlight Portfolio",
      description: "A stunning portfolio website for a photographer with immersive galleries and smooth animations.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      tools: ["Gatsby", "GSAP", "Contentful", "Netlify"],
      role: "Web Designer & Developer",
      category: "Web Design"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 text-pink-400 mb-6">
            <Sparkles className="w-6 h-6" />
            <span className="text-lg font-medium">My Creative Universe</span>
          </div>
          <h1 className="text-6xl lg:text-7xl font-black gradient-text mb-8">
            Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my constellation of digital creations, where design meets development 
            in perfect cosmic harmony. Each project tells a unique story of innovation and creativity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="glass-card overflow-hidden group hover:bg-gradient-to-br hover:from-pink-500/10 hover:via-purple-500/10 hover:to-blue-500/10 transition-all duration-500 border border-white/10 hover:border-white/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex gap-2">
                    <button className="p-2 glass-card rounded-full text-white hover:text-pink-400 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="p-2 glass-card rounded-full text-white hover:text-pink-400 transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-pink-400/20 to-purple-400/20 text-pink-400 rounded-full border border-pink-400/30">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-2">Role: {project.role}</div>
                  <div className="flex flex-wrap gap-1">
                    {project.tools.map((tool) => (
                      <span 
                        key={tool}
                        className="px-2 py-1 text-xs bg-white/5 text-gray-400 rounded border border-white/10"
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
      </div>
    </div>
  );
};

export default Portfolio;
