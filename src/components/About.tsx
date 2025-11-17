export default function About() {
  const philosophies = [
    "Clean Code",
    "Performance First",
    "Emotion in Design",
    "Human at the Core",
    "Continuous Learning",
    "Sustainable"
  ];

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0a] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
          <span className="gradient-text">ABOUT ME</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Character Image */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glowing Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-3xl blur-3xl"></div>
              
              {/* Character Container */}
              <div className="relative bg-gradient-to-b from-[#1a1a2e] to-[#0f1729] rounded-3xl p-8 border border-cyan-500/30">
                {/* Placeholder for character - Replace with actual image */}
                <div className="relative aspect-square flex items-end justify-center overflow-hidden">
                  {/* Animated background grid */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <div key={i} className="border border-cyan-500/20"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Character silhouette - Replace with your actual image */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <div className="w-48 h-64 bg-gradient-to-b from-green-400 to-cyan-600 rounded-full opacity-70 float-animation"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-8xl">
                      🤖
                    </div>
                  </div>
                </div>
                
                {/* Electric effect lines around character */}
                <div className="absolute top-4 right-4">
                  <svg width="100" height="100" className="opacity-60">
                    <path d="M 10 50 L 30 30 L 50 50 L 70 20" stroke="#10b981" strokeWidth="2" fill="none" className="pulse-animation" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - About Content */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Hi, I am <span className="text-cyan-400">mukit hossain</span>
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              A Next.js Developer who loves turning ideas into smooth, scalable web experiences that feel alive. I blend clean code with thoughtful design to create digital products that users love.
            </p>

            {/* Philosophy Section */}
            <div className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💡</span>
                <h4 className="text-xl font-semibold text-yellow-400">MY PHILOSOPHY</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {philosophies.map((philosophy, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-cyan-500/30 rounded-lg text-center text-sm font-medium text-cyan-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105 cursor-default"
                  >
                    {philosophy}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Stats or Info */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">3+</div>
                <div className="text-sm text-gray-400">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">∞</div>
                <div className="text-sm text-gray-400">Coffee Cups</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
