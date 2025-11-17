export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0a] via-[#0f1729] to-[#1a1a2e] px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tight">
          <span className="block gradient-text">NEXT.JS HERO</span>
        </h1>

        {/* Animated Fist/Icon Placeholder */}
        <div className="my-8 flex justify-center">
          <div className="relative w-64 h-32">
            {/* Electric effect lines */}
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <defs>
                <linearGradient id="electric-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <path
                d="M 50 100 Q 150 50 250 100 T 450 100"
                stroke="url(#electric-gradient)"
                strokeWidth="2"
                fill="none"
                className="wave-animation"
                style={{ animationDelay: '0s' }}
              />
              <path
                d="M 0 100 Q 100 150 200 100 T 400 100"
                stroke="url(#electric-gradient)"
                strokeWidth="2"
                fill="none"
                className="wave-animation"
                style={{ animationDelay: '0.5s' }}
              />
            </svg>
            {/* Center Icon - You can replace with actual fist image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-4xl glow-cyan">
                👊
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 px-4">
          I'm a Next.js Developer crafting high-performance, modern web apps with clean UI & better UX.
        </p>

        {/* Decorative Wave */}
        <div className="flex justify-center mb-12">
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

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 glow-blue hover:scale-105">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
            Let's Connect
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 pulse-animation"></div>
        </div>
      </div>
    </section>
  );
}
