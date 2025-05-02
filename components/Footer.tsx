import Image from 'next/image';
import Link from 'next/link';

const contactInfo = {
  title: "Contact Us",
  details: [
    "123 Restaurant Street",
    "New York, NY 10001",
    "Phone: (555) 123-4567",
    "Email: info@theorangeleaf.com"
  ]
};

const quickLinks = {
  title: "Quick Links",
  links: [
    { href: "/menu", text: "Menu" },
    { href: "/gallery", text: "Gallery" },
    { href: "/about", text: "About Us" },
    { href: "/reservations", text: "Reservations" }
  ]
};

const socialLinks = {
  title: "Follow Us",
  links: [
    {
      href: "https://instagram.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      href: "https://facebook.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      )
    }
  ]
};

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-2xl mb-4">{title}</h3>
    {children}
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-gray-50 backdrop-blur-md text-white">
      <div className="relative bg-green-900 rounded-t-4xl border-t-10 border-l-10 border-r-10 border-white/30 w-[90%] md:w-[70%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Background with noise texture */}
        <div 
          className="absolute inset-0 object-cover mix-blend-overlay opacity-50 bg-[url('/imgs/green-noise.png')] z-0 pointer-events-none"
        />
        
        {/* Content wrapper with proper z-index */}
        <div className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <FooterSection title={contactInfo.title}>
              {contactInfo.details.map((detail, index) => (
                <p key={index} className="mb-2 text-gray-300 hover:text-white transition-colors">{detail}</p>
              ))}
            </FooterSection>

            {/* Quick Links */}
            <FooterSection title={quickLinks.title}>
              <ul className="space-y-2">
                {quickLinks.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterSection>

            {/* Social Links */}
            <FooterSection title={socialLinks.title}>
              <div className="flex space-x-4">
                {socialLinks.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white/80 transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </FooterSection>
          </div>

          <div className="absolute top-50 lg:-top-2 right-2 opacity-70">
            <Image src="/imgs/logo.png" alt="The Orange Leaf Logo" width={200} height={200} />
          </div>

          <div className="mt-8 pt-8 border-t border-white/30 text-center">
            <p>&copy; {new Date().getFullYear()} The Orange Leaf. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
} 