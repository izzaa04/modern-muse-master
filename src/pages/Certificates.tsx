
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
              <span className="text-gray-400">Certificate Image 1</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Certificate Title</h3>
            <p className="text-gray-300 text-sm">Issuing Organization</p>
            <p className="text-gray-400 text-xs mt-1">Date Earned</p>
          </div>

          {/* Certificate 2 */}
          <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400">Certificate Image 2</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Certificate Title</h3>
            <p className="text-gray-300 text-sm">Issuing Organization</p>
            <p className="text-gray-400 text-xs mt-1">Date Earned</p>
          </div>

          {/* Certificate 3 */}
          <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400">Certificate Image 3</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Certificate Title</h3>
            <p className="text-gray-300 text-sm">Issuing Organization</p>
            <p className="text-gray-400 text-xs mt-1">Date Earned</p>
          </div>

          {/* Certificate 4 */}
          <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400">Certificate Image 4</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Certificate Title</h3>
            <p className="text-gray-300 text-sm">Issuing Organization</p>
            <p className="text-gray-400 text-xs mt-1">Date Earned</p>
          </div>

          {/* Certificate 5 */}
          <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400">Certificate Image 5</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Certificate Title</h3>
            <p className="text-gray-300 text-sm">Issuing Organization</p>
            <p className="text-gray-400 text-xs mt-1">Date Earned</p>
          </div>

          {/* Certificate 6 */}
          <div className="glass-card p-6 group hover:scale-105 transition-all duration-300 animate-fade-in">
            <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400">Certificate Image 6</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Certificate Title</h3>
            <p className="text-gray-300 text-sm">Issuing Organization</p>
            <p className="text-gray-400 text-xs mt-1">Date Earned</p>
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
