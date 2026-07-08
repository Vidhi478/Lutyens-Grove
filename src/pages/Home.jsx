import { motion } from 'framer-motion'
import { FaArrowDownLong, FaQuoteLeft } from 'react-icons/fa6'
import { Button } from '../components/Button'
import { Reveal, Stagger } from '../components/Motion'
import { SectionHeader } from '../components/SectionHeader'
import { StarIcon, gallery, images, lifestyle, properties, testimonials, whyChoose } from '../data/siteData'
import { fadeUp } from '../lib/animations'

export function Home({ onNavigate }) {
  return (
    <main>
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 py-28 md:px-8">
        <motion.img
          src={images.hero}
          alt="Luxury farmhouse exterior in Delhi"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase text-gold">Premium Farmhouse Living</p>
            <h1 className="font-serif text-5xl leading-[1.05] text-white text-balance md:text-7xl lg:text-8xl">
              Curated Luxury Farmhouses in Delhi's Finest Locations
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              Private estates, resort-style amenities, and discreet advisory for families seeking calm, space, and lasting value.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button onClick={() => onNavigate('/property')}>Explore Properties</Button>
              <Button variant="outline" href="#contact">Schedule Visit</Button>
            </div>
          </motion.div>
        </div>

        <a href="#properties" className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase text-white/60">
          Scroll
          <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }} className="text-gold">
            <FaArrowDownLong />
          </motion.span>
        </a>
      </section>

      <section id="properties" className="bg-black px-5 py-24 md:px-8 lg:py-32">
        <SectionHeader eyebrow="Featured Properties" title="Private Estates With Delhi Presence" text="A selective portfolio of farmhouses shaped by location, architecture, landscape, and long-term desirability." />
        <Stagger className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-3">
          {properties.map((property) => (
            <motion.article
              key={property.title}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="group overflow-hidden border border-white/10 bg-white/[0.035] backdrop-blur-xl"
            >
              <button type="button" onClick={() => onNavigate('/property')} className="block w-full text-left">
                <div className="overflow-hidden">
                  <img src={property.image} alt={property.title} className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-7">
                  <p className="text-sm uppercase text-gold">{property.price}</p>
                  <h3 className="mt-3 font-serif text-3xl text-white">{property.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/55">
                    <span>{property.location}</span>
                    <span>{property.area}</span>
                  </div>
                  <p className="mt-5 leading-7 text-white/62">{property.description}</p>
                </div>
              </button>
            </motion.article>
          ))}
        </Stagger>
      </section>

      <section id="about" className="luxury-grid border-y border-white/10 bg-[#101010] px-5 py-24 md:px-8 lg:py-32">
        <SectionHeader eyebrow="Why Choose Us" title="A Quieter Standard of Luxury Advisory" />
        <Stagger className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map(({ title, text, icon: Icon }) => (
            <motion.article key={title} variants={fadeUp} whileHover={{ scale: 1.03 }} className="border border-white/10 bg-white/[0.06] p-7 backdrop-blur-2xl">
              <Icon className="text-3xl text-gold" />
              <h3 className="mt-8 font-serif text-2xl text-white">{title}</h3>
              <p className="mt-4 leading-7 text-white/58">{text}</p>
            </motion.article>
          ))}
        </Stagger>
      </section>

      <section id="services" className="bg-black px-5 py-24 md:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-20">
          {lifestyle.map((item, index) => (
            <div key={item.title} className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 ? 'lg:[&>div:first-child]:order-2' : ''}`}>
              <Reveal>
                <div className="group overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-[32rem] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="text-xs font-semibold uppercase text-gold">{item.label}</p>
                <h2 className="mt-5 font-serif text-4xl leading-tight text-white md:text-6xl">{item.title}</h2>
                <p className="mt-6 max-w-xl text-lg leading-9 text-white/62">{item.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="bg-[#0f0f0f] px-5 py-24 md:px-8 lg:py-32">
        <SectionHeader eyebrow="Luxury Gallery" title="Spaces Designed for Arrival and Retreat" />
        <Stagger className="mx-auto columns-1 gap-5 space-y-5 md:columns-2 lg:columns-3">
          {gallery.map((image, index) => (
            <motion.div key={image} variants={fadeUp} className="group relative break-inside-avoid overflow-hidden">
              <img src={image} alt={`Luxury farmhouse gallery ${index + 1}`} className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${index % 3 === 0 ? 'h-96' : 'h-72'}`} />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/35" />
            </motion.div>
          ))}
        </Stagger>
      </section>

      <section className="bg-black px-5 py-24 md:px-8 lg:py-32">
        <SectionHeader eyebrow="Testimonials" title="Discretion, Taste, and Exacting Detail" />
        <Stagger className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <motion.article key={testimonial.name} variants={fadeUp} className="border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
              <FaQuoteLeft className="text-3xl text-gold" />
              <div className="mt-6 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} />
                ))}
              </div>
              <p className="mt-6 text-lg leading-8 text-white/70">"{testimonial.quote}"</p>
              <div className="mt-8 flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <h3 className="font-medium text-white">{testimonial.name}</h3>
                  <p className="text-sm text-white/45">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </section>

      <section id="contact" className="relative overflow-hidden px-5 py-28 md:px-8 lg:py-36">
        <img src={images.cta} alt="Delhi farmhouse pool at dusk" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/70" />
        <Reveal className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase text-gold">Private Viewings</p>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-white md:text-6xl">Book a Site Visit With a Luxury Farmhouse Specialist</h2>
          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">Tell us your preferred location, lifestyle needs, and investment horizon. We will curate a private shortlist.</p>
          <div className="mt-10">
            <Button href="#contact">Book a Site Visit</Button>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
