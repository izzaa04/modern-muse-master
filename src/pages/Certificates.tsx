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
          {/* Certificate 1 */}
          <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 flex items-center justify-center">
              <img
                src="/public/Certificate 1.png"
                alt="Certificate 1"
                className="object-contain h-full w-full rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Python Course (Intermediate)</h3>
            <p className="text-gray-300 text-sm">SoloLearn</p>
            <p className="text-gray-400 text-xs mt-1">17 December 2023</p>
          </div>

          {/* Certificate 2 */}
          <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 flex items-center justify-center">
              <img
                src="/public/Certificate 2.png"
                alt="Certificate 2"
                className="object-contain h-full w-full rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Python Course (Foundations)</h3>
            <p className="text-gray-300 text-sm">Linkedin Learning</p>
            <p className="text-gray-400 text-xs mt-1">12 November 2024</p>
          </div>

          {/* Certificate 3 */}
          <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 flex items-center justify-center">
              <img
                src="/public/Certificate 3.png"
                alt="Certificate 3"
                className="object-contain h-full w-full rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Python Tkinter Course</h3>
            <p className="text-gray-300 text-sm">Great Learning Academy</p>
            <p className="text-gray-400 text-xs mt-1">December 2023</p>
          </div>

          {/* Certificate 4 */}
          <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 flex items-center justify-center">
              <img
                src="/public/Certificate 4.jpg"
                alt="Certificate 4"
                className="object-contain h-full w-full rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Website Completion</h3>
            <p className="text-gray-300 text-sm">Gohr Al Gilani</p>
            <p className="text-gray-400 text-xs mt-1">January 2024</p>
          </div>

          {/* Certificate 5 */}
          <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 flex items-center justify-center">
              <img
                src="/public/Cetificate 5.jpg"
                alt="Certificate 5"
                className="object-contain h-full w-full rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Hour of Code Course</h3>
            <p className="text-gray-300 text-sm">HatchXR</p>
            <p className="text-gray-400 text-xs mt-1">April 2024</p>
          </div>

          {/* Certificate 6 */}
          <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 flex items-center justify-center">
              <img
                src="/public/Certificate 6.png"
                alt="Certificate 6"
                className="object-contain h-full w-full rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Introduction to HTML</h3>
            <p className="text-gray-300 text-sm">SoloLearn</p>
            <p className="text-gray-400 text-xs mt-1">19 April 2023</p>
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
