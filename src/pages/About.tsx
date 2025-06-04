
const About = () => {
  const skills = [
    { category: "Design", items: ["UI/UX Design", "Visual Design", "Prototyping", "Design Systems", "User Research", "Branding"] },
    { category: "Development", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Git"] },
    { category: "Tools", items: ["Figma", "Adobe Creative Suite", "Sketch", "Framer", "Principle", "After Effects"] }
  ];

  const experience = [
    {
      role: "Senior UI/UX Designer",
      company: "TechCorp",
      period: "2022 - Present",
      description: "Leading design initiatives for consumer-facing products, managing design systems, and collaborating with cross-functional teams to deliver exceptional user experiences."
    },
    {
      role: "Frontend Developer",
      company: "CreativeStudio",
      period: "2020 - 2022",
      description: "Developed responsive web applications using React and modern frontend technologies. Collaborated closely with designers to implement pixel-perfect interfaces."
    },
    {
      role: "Junior Designer",
      company: "DesignHub",
      period: "2019 - 2020",
      description: "Started my career creating digital designs for various clients, learning the fundamentals of user-centered design and building strong design foundations."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Passionate about creating meaningful digital experiences through 
            thoughtful design and clean, efficient code.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Story</h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              My journey into design and development began during my college years when I 
              discovered the perfect intersection between creativity and technology. What 
              started as a curiosity about how beautiful websites were built quickly evolved 
              into a passion for creating digital experiences that truly matter.
            </p>
            <p>
              Over the past 5 years, I've had the privilege of working with startups, 
              established companies, and creative agencies. Each experience has taught me 
              something new about the balance between aesthetics and functionality, user 
              needs and business goals.
            </p>
            <p>
              Today, I focus on creating designs that not only look beautiful but solve 
              real problems for real people. I believe that great design is invisible – 
              it works so well that users don't have to think about it.
            </p>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-20 bg-gray-50 -mx-6 lg:-mx-8 px-6 lg:px-8 py-16 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Design Philosophy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "User-Centered",
                description: "Every design decision should serve the user's needs and goals, creating intuitive and accessible experiences."
              },
              {
                title: "Purposeful",
                description: "Design with intention. Every element should have a clear purpose and contribute to the overall experience."
              },
              {
                title: "Collaborative",
                description: "Great design happens when diverse perspectives come together. I believe in the power of teamwork."
              }
            ].map((principle, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {principle.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <div key={skill} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                      <span className="text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-900 rounded-full"></div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">{job.role}</h3>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <span className="font-medium">{job.company}</span>
                    <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                    <span>{job.period}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Interests */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">When I'm Not Designing</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Interests</h3>
              <div className="space-y-3 text-gray-600">
                <p>🏃‍♂️ Trail running and outdoor adventures</p>
                <p>📚 Reading about design psychology and human behavior</p>
                <p>🎵 Playing guitar and discovering new music</p>
                <p>☕ Exploring specialty coffee and local cafes</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Current Learning</h3>
              <div className="space-y-3 text-gray-600">
                <p>🎨 Advanced motion design with Framer</p>
                <p>🧠 AI/ML applications in design</p>
                <p>📱 SwiftUI for iOS development</p>
                <p>🌱 Sustainable design practices</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 mb-8">
            I'm always interested in meeting new people and discussing creative projects.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
