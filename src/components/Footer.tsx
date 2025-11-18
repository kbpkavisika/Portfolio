import Image from "next/image";
import logoImage from "../assets/logo.png";
import linkedinLogo from "../assets/linkedin.jpg";
import githubLogo from "../assets/git.png";
import emailLogo from "../assets/mail.jpg";
import phoneLogo from "../assets/tel.jpg";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#EFECE3]/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src={logoImage} 
                alt="PK Logo" 
                width={40} 
                height={40} 
                className="rounded-lg" 
              />
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

          {/* Professional Connect */}
          <div>
            <h3 className="text-[#EFECE3] font-semibold mb-4">Connect</h3>
            <div className="flex flex-col gap-3">
              {[
                { name: "Email", logo: emailLogo, url: "mailto:kbpkavisika@gmail.com", label: "kbpkavisika@gmail.com" },
                { name: "Phone", logo: phoneLogo, url: "tel:+94718827129", label: "+94 71 882 7129" },
                { name: "LinkedIn", logo: linkedinLogo, url: "https://linkedin.com/in/pavithkavisika", label: "LinkedIn Profile" },
                { name: "GitHub", logo: githubLogo, url: "https://github.com/kbpkavisika", label: "GitHub Profile" }
              ].map((connect) => (
                <a
                  key={connect.name}
                  href={connect.url}
                  className="flex items-center gap-3 text-[#EFECE3]/70 hover:text-[#8EFF00] transition-colors text-sm group"
                  title={connect.label}
                >
                  <Image
                    src={connect.logo}
                    alt={`${connect.name} logo`}
                    width={20}
                    height={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="group-hover:translate-x-1 transition-transform">{connect.label}</span>
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