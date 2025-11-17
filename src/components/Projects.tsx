export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full-Stack Application",
      description: "A comprehensive e-commerce solution built with Next.js and Node.js, featuring user authentication, payment processing, inventory management, and admin dashboard. Supports 10,000+ concurrent users.",
      image: "/projects/ecommerce.jpg",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe API", "Redis", "AWS"],
      features: [
        "Real-time inventory tracking",
        "Secure payment processing",
        "Admin analytics dashboard",
        "Mobile-responsive design"
      ],
      metrics: {
        users: "10K+",
        performance: "98% uptime",
        code: "95% test coverage"
      },
      liveUrl: "#",
      githubUrl: "#",
      caseStudyUrl: "#"
    },
    {
      id: 2,
      title: "Task Management System",
      category: "SaaS Application",
      description: "A collaborative project management tool with real-time updates, team collaboration features, and advanced reporting. Built for enterprise-scale teams with role-based access control.",
      image: "/projects/taskmanager.jpg",
      technologies: ["React", "Express.js", "MongoDB", "Socket.io", "JWT", "Docker"],
      features: [
        "Real-time collaboration",
        "Advanced reporting",
        "Role-based permissions",
        "API integration"
      ],
      metrics: {
        users: "5K+",
        performance: "< 2s load time",
        code: "90% test coverage"
      },
      liveUrl: "#",
      githubUrl: "#",
      caseStudyUrl: "#"
    },
    {
      id: 3,
      title: "Healthcare Management API",
      category: "Backend System",
      description: "RESTful API for healthcare management with patient records, appointment scheduling, and medical history tracking. HIPAA-compliant with advanced security measures.",
      image: "/projects/healthcare.jpg",
      technologies: ["Node.js", "Express.js", "PostgreSQL", "JWT", "bcrypt", "Joi"],
      features: [
        "HIPAA compliance",
        "Secure data encryption",
        "Automated backups",
        "API rate limiting"
      ],
      metrics: {
        users: "50K+",
        performance: "99.9% uptime",
        code: "100% test coverage"
      },
      liveUrl: "#",
      githubUrl: "#",
      caseStudyUrl: "#"
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">FEATURED PROJECTS</span>
          </h2>
          <div className="w-24 h-1 bg-[#8EFF00] mx-auto mb-6"></div>
          <p className="text-[#EFECE3]/80 text-lg max-w-2xl mx-auto">
            A showcase of my recent software engineering projects demonstrating technical expertise and problem-solving skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative ${
                index % 2 === 1 ? 'lg:col-start-2' : ''
              }`}>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black border border-[#EFECE3]/20 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8EFF00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Placeholder - Replace with actual project screenshots */}
                  <div className="absolute inset-0 flex items-center justify-center text-[#EFECE3]/50">
                    <div className="text-center">
                      <div className="text-4xl mb-2">⚡</div>
                      <div className="text-sm">Project Screenshot</div>
                    </div>
                  </div>
                  
                  {/* Project overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-3">
                      <a 
                        href={project.liveUrl}
                        className="px-4 py-2 bg-[#8EFF00] hover:bg-[#7AE600] text-black text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        Live Demo
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="px-4 py-2 bg-black border border-[#EFECE3] text-[#EFECE3] hover:bg-[#EFECE3] hover:text-black text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Metrics */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="text-center p-3 bg-black border border-[#EFECE3]/20 rounded-lg">
                    <div className="text-sm font-semibold text-[#8EFF00]">{project.metrics.users}</div>
                    <div className="text-xs text-[#EFECE3]/70">Users</div>
                  </div>
                  <div className="text-center p-3 bg-black border border-[#EFECE3]/20 rounded-lg">
                    <div className="text-sm font-semibold text-[#8EFF00]">{project.metrics.performance}</div>
                    <div className="text-xs text-[#EFECE3]/70">Performance</div>
                  </div>
                  <div className="text-center p-3 bg-black border border-[#EFECE3]/20 rounded-lg">
                    <div className="text-sm font-semibold text-[#8EFF00]">{project.metrics.code}</div>
                    <div className="text-xs text-[#EFECE3]/70">Test Coverage</div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${
                index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
              }`}>
                {/* Category */}
                <div className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8EFF00] rounded-full"></span>
                  <span className="text-sm font-semibold text-[#8EFF00] uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#EFECE3] mb-4">
                    {project.title}
                  </h3>
                  <p className="text-[#EFECE3]/80 text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold text-[#8EFF00] mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[#EFECE3]/80">
                        <span className="w-1.5 h-1.5 bg-[#8EFF00] rounded-full flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Stack */}
                <div>
                  <h4 className="text-lg font-semibold text-[#8EFF00] mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-black border border-[#EFECE3]/30 text-[#EFECE3] text-sm font-medium rounded-lg hover:border-[#8EFF00] transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#8EFF00] hover:bg-[#7AE600] text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 glow-lime"
                  >
                    View Project
                  </a>
                  <a
                    href={project.caseStudyUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#EFECE3] text-[#EFECE3] hover:bg-[#EFECE3] hover:text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Case Study
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 p-8 bg-black border border-[#EFECE3]/20 rounded-lg">
          <h3 className="text-2xl font-bold text-[#EFECE3] mb-4">
            Interested in working together?
          </h3>
          <p className="text-[#EFECE3]/80 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's build something amazing together.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#8EFF00] hover:bg-[#7AE600] text-black font-semibold rounded-lg transition-all duration-300 glow-lime hover:scale-105"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
