export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8EFF00] rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#EFECE3] rounded-full filter blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Professional Introduction */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-[#EFECE3]">
            <span className="gradient-text">PAVITH KAVISIKA</span>
          </h1>
          <p className="text-lg md:text-xl text-[#EFECE3]/80 max-w-2xl mx-auto leading-relaxed">
            Specialized in building scalable web applications with modern JavaScript frameworks.
            Passionate about clean code, performance optimization, and delivering exceptional user experiences.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#8EFF00] mb-2">5+</div>
            <div className="text-sm text-[#EFECE3]/70 uppercase tracking-wide">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#8EFF00] mb-2">50+</div>
            <div className="text-sm text-[#EFECE3]/70 uppercase tracking-wide">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#8EFF00] mb-2">15+</div>
            <div className="text-sm text-[#EFECE3]/70 uppercase tracking-wide">Technologies</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-[#8EFF00] hover:bg-[#7AE600] text-black font-semibold rounded-lg transition-all duration-300 glow-lime hover:scale-105"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border-2 border-[#EFECE3] text-[#EFECE3] hover:bg-[#EFECE3] hover:text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[#EFECE3]/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#8EFF00] rounded-full mt-2 pulse-animation"></div>
        </div>
      </div>
    </section>
  );
}
