export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "SAAS E-COMMERCE PLATFORM",
      description: "A seamless shopping experience with modern UI and blazing-fast performance.",
      image: "/projects/ecommerce.jpg", // You'll need to add actual images
      tags: ["NEXT.JS", "NODE.JS", "POSTGRESQL"],
      role: "DEVELOPER AND PROJECT LEAD",
      liveUrl: "#",
      caseStudyUrl: "#"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="relative min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#1a1a2e] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
          <span className="gradient-text">FEATURED PROJECTS</span>
        </h2>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-[#1a1a2e] to-[#0f1729] rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative grid md:grid-cols-2 gap-8 p-8">
                {/* Project Image */}
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                  {/* Placeholder - Replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🖥️</div>
                      <div className="text-gray-500 text-sm">Project Screenshot</div>
                    </div>
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="flex gap-4">
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">
                        🔗 View Live
                      </button>
                      <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold rounded-lg transition-colors">
                        📄 Case Study
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col justify-center space-y-4">
                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 self-start">
                    <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/50 text-blue-400 text-xs font-semibold rounded-full">
                      SAAS
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <div className="text-sm text-gray-500 font-semibold mb-2">TECH STACK:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 text-gray-300 text-xs font-medium rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Role */}
                  <div>
                    <div className="text-sm text-gray-500 font-semibold mb-1">ROLE:</div>
                    <div className="text-cyan-400 font-medium">{project.role}</div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 glow-blue"
                    >
                      🔗 View Live
                    </a>
                    <a
                      href={project.caseStudyUrl}
                      className="inline-flex items-center gap-2 px-6 py-2 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      📄 Case Study
                    </a>
                  </div>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-cyan-500/30 group-hover:border-cyan-500 transition-colors"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-cyan-500/30 group-hover:border-cyan-500 transition-colors"></div>
            </div>
          ))}
        </div>

        {/* CTA to See More */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-6">
            Want to build something awesome? <span className="text-cyan-400 font-semibold">Let's collaborate!</span>
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-300 glow-cyan hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
