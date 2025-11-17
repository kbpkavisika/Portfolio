export default function Skills() {
  const technologies = [
    { name: "HTML5", icon: "🌐", color: "from-orange-500 to-red-500", position: "top-0" },
    { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400", position: "top-right" },
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-600 to-blue-800", position: "right" },
    { name: "TypeScript", icon: "TS", color: "from-blue-500 to-blue-700", position: "bottom-right" },
    { name: "Node.js", icon: "📗", color: "from-green-500 to-green-700", position: "bottom" },
    { name: "JavaScript", icon: "JS", color: "from-yellow-400 to-yellow-600", position: "bottom-left" }
  ];

  return (
    <section id="skills" className="relative min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-8">
          <span className="gradient-text">SKILLS / TECH STACK</span>
        </h2>

        {/* Decorative Wave */}
        <div className="flex justify-center mb-16">
          <svg width="400" height="60" viewBox="0 0 400 60">
            <path
              d="M 0 30 Q 100 10 200 30 T 400 30"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
              className="wave-animation"
            />
          </svg>
        </div>

        {/* Circular Tech Stack */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative w-full aspect-square max-w-2xl mx-auto">
            {/* Center Circle - Next.js */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center border-4 border-gray-700 shadow-2xl">
                  <span className="text-5xl md:text-6xl font-bold text-white">N</span>
                </div>
              </div>
            </div>

            {/* Orbital Ring */}
            <div className="absolute inset-0 border-2 border-gray-700/30 rounded-full"></div>
            <div className="absolute inset-8 border border-gray-700/20 rounded-full"></div>

            {/* Technology Icons in Circle */}
            {technologies.map((tech, index) => {
              const angle = (index * 60) - 90; // 60 degrees apart, starting from top
              const radius = 45; // percentage from center
              const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
              const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

              return (
                <div
                  key={tech.name}
                  className="absolute group cursor-pointer"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity scale-150`}></div>
                  
                  {/* Icon Container */}
                  <div className={`relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${tech.color} rounded-full flex items-center justify-center border-2 border-white/20 shadow-xl hover:scale-110 transition-transform duration-300 float-animation`}>
                    <span className="text-3xl md:text-4xl font-bold text-white">
                      {tech.icon}
                    </span>
                  </div>
                  
                  {/* Label */}
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold text-white bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
                      {tech.name}
                    </span>
                  </div>

                  {/* Connection Line to Center */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                    <line
                      x1="50%"
                      y1="50%"
                      x2="50%"
                      y2="0%"
                      stroke="url(#tech-gradient)"
                      strokeWidth="1"
                      transform={`rotate(${-angle}, 50, 50)`}
                    />
                  </svg>
                </div>
              );
            })}

            {/* SVG Definitions */}
            <svg className="absolute inset-0 w-0 h-0">
              <defs>
                <linearGradient id="tech-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Additional Skills List */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-semibold text-gray-300 mb-6">& More Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["Git", "Docker", "MongoDB", "Express", "Tailwind CSS", "GraphQL", "Redux", "REST API"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
