import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8EFF00] rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#EFECE3] rounded-full filter blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Profile Photo */}
        <div className="shrink-0 mx-4 lg:mx-8">
          <Image
            src="/photo.jpg"
            alt="Pavith Kavisika"
            width={350}
            height={350}
            className="rounded-full border-4 border-[#8EFF00] shadow-lg transition-all duration-700 hover:border-[#7AE600] hover:shadow-[#8EFF00]/50 hover:shadow-2xl hover:scale-105 hover:breathe-animation"
          />
        </div>

        {/* Professional Introduction */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-[#EFECE3]">
            <span className="gradient-text">PAVITH KAVISIKA</span>
          </h1>
          <p className="text-lg md:text-xl text-[#EFECE3]/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
            Specialized in building scalable web applications with modern JavaScript frameworks.
            Passionate about clean code, performance optimization, and delivering exceptional user experiences.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto lg:mx-0">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <a 
              href="#projects" 
              className="px-8 py-3 bg-[#8EFF00] hover:bg-[#7AE600] text-black font-semibold rounded-lg transition-all duration-300 glow-lime hover:scale-105"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border-2 border-[#8EFF00] text-[#8EFF00] hover:text-[#7AE600] font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
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
