
import { ExternalLink, Play, Gamepad2, Smartphone, Palette, Video, Book } from "lucide-react";

const Portfolio = () => {
  const projectSections = [
    {
      title: "Design and Prototyping",
      icon: Palette,
      projects: [
        {
          id: 1,
          title: "Coffee Jab",
          description: "A sleek café ordering app prototype designed for simplicity and speed.",
          image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
          tools: ["Figma", "UI/UX Design", "Prototyping"],
          url: "https://www.figma.com/proto/v5CGR1vv5BPMusS4TRrwzo/Coffee-Jab?type=design&node-id=27-4&scaling=scale-down&page-id=0%3A1&starting-point-node-id=27%3A4&t=YLnqDQMENM0iemNg-1",
          category: "Figma Prototype"
        },
        {
          id: 2,
          title: "Nomadify",
          description: "A travel planning UI with modern visuals and intuitive user flow.",
          image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
          tools: ["Figma", "High-Fidelity Design", "User Experience"],
          url: "https://www.figma.com/proto/Jt6g1RAPOTaX9eZHtlDPv3/High-Fidelity-Prototype?type=design&node-id=114-167&scaling=scale-down&page-id=0%3A1&starting-point-node-id=114%3A167",
          category: "Travel App Design"
        }
      ]
    },
    {
      title: "Animation & Video",
      icon: Video,
      projects: [
        {
          id: 3,
          title: "Stop Motion Story",
          description: "A short stop motion story showing creativity and storytelling with movement.",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
          tools: ["Stop Motion", "Animation", "Storytelling"],
          url: "https://youtu.be/WIysHGTbscg?si=xzkXpY1AtZgXeGfu",
          category: "Stop Motion"
        },
        {
          id: 4,
          title: "Creative Timelapse",
          description: "A timelapse piece reflecting focus, pace, and editing skills.",
          image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop",
          tools: ["Video Editing", "Timelapse", "Creative Process"],
          url: "https://youtu.be/L4EBEFKJMgs?si=a_M1-oE0iX7h7Fg5",
          category: "Timelapse"
        }
      ]
    },
    {
      title: "Interactive Stories",
      icon: Book,
      projects: [
        {
          id: 5,
          title: "Play It",
          description: "An immersive, choice-based narrative exploring a side character's life in a mafia world.",
          image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
          tools: ["Twine", "Interactive Fiction", "Narrative Design"],
          url: "#",
          category: "Non-Linear Story"
        }
      ]
    },
    {
      title: "Games",
      icon: Gamepad2,
      projects: [
        {
          id: 6,
          title: "Trapped",
          description: "A minimalistic exploration game designed in Bitsy.",
          image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
          tools: ["Bitsy", "Game Design", "Pixel Art"],
          url: "https://izzaa04.itch.io/trapped",
          category: "Bitsy Game"
        },
        {
          id: 7,
          title: "Bear Maze",
          description: "Navigate a fun yet challenging maze as a bear — a Unity-built casual game.",
          image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
          tools: ["Unity", "C#", "Game Development"],
          url: "https://izzafatima04.itch.io/the-bear-maze",
          category: "Unity Game"
        }
      ]
    },
    {
      title: "Mobile Apps",
      icon: Smartphone,
      projects: [
        {
          id: 8,
          title: "Colorise",
          description: "A color palette mobile app concept created for telling you the best color palette for you.",
          image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=600&h=400&fit=crop",
          tools: ["Mobile Design", "Color Theory", "UI/UX"],
          url: "https://drive.google.com/file/d/1jAljowDrR4DP8N_wHKvSXdus-Y9jXCW9/view?usp=sharing",
          category: "Mobile App"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 text-pink-400 mb-6">
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            <span className="text-lg font-medium">Creative Universe</span>
          </div>
          <h1 className="text-6xl lg:text-7xl font-black gradient-text mb-8">
            Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my collection of digital creations spanning UI/UX design, interactive games, 
            animations, and creative applications. Each project reflects my passion for blending 
            creativity with technology.
          </p>
        </div>

        {/* Project Sections */}
        {projectSections.map((section, sectionIndex) => (
          <div key={section.title} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 glass-card rounded-xl border border-pink-400/30">
                <section.icon className="w-6 h-6 text-pink-400" />
              </div>
              <h2 className="text-3xl font-bold gradient-text">{section.title}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="glass-card overflow-hidden group hover:bg-gradient-to-br hover:from-pink-500/10 hover:via-purple-500/10 hover:to-blue-500/10 transition-all duration-500 border border-white/10 hover:border-white/20"
                  style={{ animationDelay: `${(sectionIndex * 3 + index) * 0.1}s` }}
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
                        {project.url !== "#" && (
                          <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <button className="p-2 glass-card rounded-full text-white hover:text-pink-400 transition-colors">
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          </a>
                        )}
                        {project.url.includes("youtube") && (
                          <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <button className="p-2 glass-card rounded-full text-white hover:text-pink-400 transition-colors">
                              <Play className="w-4 h-4" />
                            </button>
                          </a>
                        )}
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
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
