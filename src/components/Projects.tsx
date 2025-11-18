export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "ResQ – National Disaster Platform",
      category: "Full-Stack Application",
      description: "A comprehensive disaster response platform that won 1st Runners Up in SLIIT Codefest 2025. Features real-time disaster alerts, SOS requests, and resource allocation with integrated APIs for cross-agency collaboration.",
      image: "/projects/resq.jpg",
      technologies: ["Node.js", "Express", "MongoDB", "React", "TypeScript", "Recharts", "JWT", "REST API"],
      features: [
        "Real-time disaster alerts and tracking",
        "SOS request system with geolocation",
        "Analytics dashboard with data visualization",
        "Role-based access control (citizen, responder, admin)",
        "Integrated APIs (SLUDI, Commercial Bank PayDPI, NDX)"
      ],
      metrics: {
        achievement: "1st Runners Up",
        competition: "SLIIT Codefest 2025",
        impact: "National Scale"
      },
      liveUrl: "#",
      githubUrl: "https://github.com/disaster-response-sl/national-disaster-platform",
      caseStudyUrl: "#"
    },
    {
      id: 2,
      title: "Ceylon Smart Citizen",
      category: "Government Services Platform",
      description: "A digital governance solution for 20+ citizen services including document requests, multilingual support, and queue reservations. Built during Tech-Triathlon hackathon, reached 3rd round.",
      image: "/projects/ceylon-smart.jpg",
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Next.js", "Docker", "JWT"],
      features: [
        "20+ citizen services integration",
        "Multilingual support system",
        "Real-time queue management",
        "NIC verification and authentication",
        "Microservices architecture"
      ],
      metrics: {
        achievement: "3rd Round",
        competition: "Tech-Triathlon",
        services: "20+ Integrated"
      },
      liveUrl: "#",
      githubUrl: "https://github.com/CeylonSmartCitizen",
      caseStudyUrl: "#"
    },
    {
      id: 3,
      title: "ZFit – Gym Management System",
      category: "Full-Stack Application",
      description: "A comprehensive gym management system with payment processing, member dashboards, and attendance tracking. Currently in development with PayHere integration for secure subscriptions.",
      image: "/projects/zfit.jpg",
      technologies: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "PayHere"],
      features: [
        "Payment management (subscriptions, invoices, refunds)",
        "Member dashboards with attendance logs",
        "Responsive design for all devices",
        "Secure payment integration with PayHere",
        "Real-time data management"
      ],
      metrics: {
        status: "In Development",
        features: "Payment System",
        tech: "MERN Stack"
      },
      liveUrl: "#",
      githubUrl: "https://github.com/gaindunuhansith/ZFit",
      caseStudyUrl: "#"
    },
    {
      id: 4,
      title: "Datathon – Public Service Optimization",
      category: "Machine Learning Project",
      description: "Machine learning models for optimizing public service resource allocation. Built predictive models for service times and workforce forecasting using real-world datasets.",
      image: "/projects/datathon.jpg",
      technologies: ["Python", "pandas", "scikit-learn", "NumPy", "joblib", "HistGradientBoostingRegressor"],
      features: [
        "Service time prediction (R² ~0.85)",
        "Workforce forecasting with RandomForest",
        "Automated predictions for 51K+ records",
        "83% unique data coverage",
        "Smart resource allocation"
      ],
      metrics: {
        accuracy: "R² ~0.85",
        dataset: "51K+ Records",
        coverage: "83% Unique"
      },
      liveUrl: "#",
      githubUrl: "#",
      caseStudyUrl: "#"
    },
    {
      id: 5,
      title: "PlayNova – Online Game Store",
      category: "Web Application",
      description: "A Java-based online game store with announcement management and MVC architecture. Features full CRUD operations for game releases and secure database connections.",
      image: "/projects/playnova.jpg",
      technologies: ["Java", "JSP", "Servlets", "MySQL", "JDBC", "Apache Tomcat", "CSS", "JavaScript"],
      features: [
        "Announcement management system",
        "Full CRUD operations for game releases",
        "MVC design pattern implementation",
        "Singleton pattern for database connections",
        "Scalable architecture"
      ],
      metrics: {
        pattern: "MVC Design",
        operations: "Full CRUD",
        security: "Singleton DB"
      },
      liveUrl: "#",
      githubUrl: "https://github.com/gaindunuhansith/playnova",
      caseStudyUrl: "#"
    },
    {
      id: 6,
      title: "Cabin.com – Hotel Reservation Platform",
      category: "Web Application",
      description: "A secure hotel reservation system built with PHP and MySQL. Features user profiles, booking management, and mobile-responsive design for seamless reservations.",
      image: "/projects/cabin.jpg",
      technologies: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
      features: [
        "Secure user authentication and profiles",
        "Complete booking management system",
        "CRUD operations for reservations",
        "Mobile-friendly responsive design",
        "Database-driven architecture"
      ],
      metrics: {
        security: "User Auth",
        operations: "Full CRUD",
        design: "Responsive"
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
                  <div className="absolute inset-0 bg-linear-to-br from-[#8EFF00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Placeholder - Replace with actual project screenshots */}
                  <div className="absolute inset-0 flex items-center justify-center text-[#EFECE3]/50">
                    <div className="text-center">
                      <div className="text-4xl mb-2">⚡</div>
                      <div className="text-sm">Project Screenshot</div>
                    </div>
                  </div>
                  
                  {/* Project overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
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
                    <div className="text-sm font-semibold text-[#8EFF00]">{project.metrics.achievement || project.metrics.accuracy || project.metrics.status || project.metrics.pattern || project.metrics.security}</div>
                    <div className="text-xs text-[#EFECE3]/70">{project.metrics.competition ? 'Competition' : project.metrics.dataset ? 'Dataset' : project.metrics.features ? 'Focus' : project.metrics.operations ? 'Operations' : 'Status'}</div>
                  </div>
                  <div className="text-center p-3 bg-black border border-[#EFECE3]/20 rounded-lg">
                    <div className="text-sm font-semibold text-[#8EFF00]">{project.metrics.competition || project.metrics.coverage || project.metrics.tech || project.metrics.security}</div>
                    <div className="text-xs text-[#EFECE3]/70">{project.metrics.competition ? 'Result' : project.metrics.coverage ? 'Coverage' : project.metrics.tech ? 'Stack' : 'Security'}</div>
                  </div>
                  <div className="text-center p-3 bg-black border border-[#EFECE3]/20 rounded-lg">
                    <div className="text-sm font-semibold text-[#8EFF00]">{project.metrics.impact || project.metrics.services || project.metrics.accuracy || project.metrics.design}</div>
                    <div className="text-xs text-[#EFECE3]/70">{project.metrics.impact ? 'Scale' : project.metrics.services ? 'Services' : project.metrics.accuracy ? 'Accuracy' : 'Design'}</div>
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
                        <span className="w-1.5 h-1.5 bg-[#8EFF00] rounded-full shrink-0"></span>
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
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#8EFF00] text-[#8EFF00] hover:bg-[#7AE600] hover:text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105"
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
