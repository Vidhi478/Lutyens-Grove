import { socialLinks } from '../data/siteData'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070707] px-5 py-14 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <h2 className="font-serif text-3xl text-white">Lutyens Grove</h2>
          <p className="mt-4 max-w-md leading-7 text-white/55">
            Discreet advisory for luxury farmhouses across Delhi's most coveted green addresses.
          </p>
        </div>
        <div>
          <h3 className="text-sm uppercase text-gold">Quick Links</h3>
          <div className="mt-5 grid gap-3 text-white/60">
            {['About', 'Properties', 'Services', 'Gallery', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="transition-colors hover:text-gold">
                {link}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm uppercase text-gold">Contact</h3>
          <div className="mt-5 grid gap-3 text-white/60">
            <p>Chattarpur, New Delhi</p>
            <a href="tel:+911140001111" className="hover:text-gold">+91 11 4000 1111</a>
            <a href="mailto:concierge@lutyensgrove.com" className="hover:text-gold">concierge@lutyensgrove.com</a>
          </div>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#contact"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
