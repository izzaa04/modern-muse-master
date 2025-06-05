
const Certificates = () => {
  return (
    <div className="min-h-screen relative pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="gradient-text">Certificates</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional certifications and achievements that showcase my skills and expertise
          </p>
        </div>

        {/* Certificates Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Certificate 1 - Introduction to HTML */}
          <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 flex items-center justify-center">
              <img
                src="/lovable-uploads/7e442dda-e2d0-43f7-a400-e456da6e8b6b.png"
                alt="Introduction to HTML Certificate"
                className="object-contain h-full w-full rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Introduction to HTML</h3>
            <p className="text-gray-300 text-sm">SoloLearn</p>
            <p className="text-gray-400 text-xs mt-1">19 April 2023</p>
          </div>

          {/* Certificate 2 - The Hour of Code */}
          <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 flex items-center justify-center">
              <img
                src="/lovable-uploads/349dc831-8da9-4314-8943-785c75893ed9.png"
                alt="The Hour of Code Certificate"
                className="object-contain h-full w-full rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">The Hour of Code</h3>
            <p className="text-gray-300 text-sm">Code.org</p>
            <p className="text-gray-400 text-xs mt-1">Computer Science Basics</p>
          </div>

          {/* Certificate 3 - Website Completion */}
          <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 flex items-center justify-center">
              <img
                src="/lovable-uploads/d917f927-02b0-4ff0-8a0b-d0ab44154051.png"
                alt="Website Completion Certificate"
                className="object-contain h-full w-full rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Website Completion</h3>
            <p className="text-gray-300 text-sm">Gohr Al Gillani</p>
            <p className="text-gray-400 text-xs mt-1">Website Development Project</p>
          </div>

          {/* Certificate 4 - Python Tkinter */}
          <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 flex items-center justify-center">
              <img
                src="/lovable-uploads/9dd2785b-9080-4c84-97a6-6de745d38d5a.png"
                alt="Python Tkinter Certificate"
                className="object-contain h-full w-full rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Python Tkinter Course</h3>
            <p className="text-gray-300 text-sm">Great Learning Academy</p>
            <p className="text-gray-400 text-xs mt-1">December 2023</p>
          </div>

          {/* Certificate 5 - Machine Learning with Python */}
          <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 flex items-center justify-center">
              <img
                src="/lovable-uploads/730d79c7-6f0c-452b-bd79-e7e7e38e31af.png"
                alt="Machine Learning with Python Certificate"
                className="object-contain h-full w-full rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Machine Learning with Python: Foundations</h3>
            <p className="text-gray-300 text-sm">LinkedIn Learning</p>
            <p className="text-gray-400 text-xs mt-1">12 November 2024</p>
          </div>

          {/* Certificate 6 - Python Intermediate */}
          <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 flex items-center justify-center">
              <img
                src="/lovable-uploads/3b631a2c-3731-4ac5-be99-6fed0b0aaecc.png"
                alt="Python Intermediate Certificate"
                className="object-contain h-full w-full rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Python Intermediate</h3>
            <p className="text-gray-300 text-sm">SoloLearn</p>
            <p className="text-gray-400 text-xs mt-1">17 December 2023</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Continuously learning and growing in the tech industry
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
