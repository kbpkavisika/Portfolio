import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#EFECE3]/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-[#8EFF00] rounded-lg flex items-center justify-center">
                {/* Fallback to PK text logo until logo.png is added */}
                <span className="text-black font-bold text-lg">PK</span>
              </div>
              <span className="text-xl font-bold gradient-text">Pavith Kavisika</span>
            </div>
            <p className="text-[#EFECE3]/70 text-sm">
              Crafting digital experiences that users love with clean code and thoughtful design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#EFECE3] font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-[#EFECE3]/70 hover:text-[#8EFF00] transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-[#EFECE3] font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {[
                { name: "GitHub", icon: "💻" },
                { name: "LinkedIn", icon: "💼" },
                { name: "Twitter", icon: "🐦" },
                { name: "Email", icon: "✉️" }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 bg-black border border-[#EFECE3]/30 hover:bg-[#8EFF00] hover:border-[#8EFF00] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  title={social.name}
                >
                  <span className="text-lg text-[#EFECE3] group-hover:text-black">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#EFECE3]/20 text-center">
          <p className="text-[#EFECE3]/70 text-sm">
            &copy; {new Date().getFullYear()} Pavith Kavisika. Crafted with ❤️ using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}