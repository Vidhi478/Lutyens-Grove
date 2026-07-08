import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { Reveal, Stagger } from '../components/Motion'
import { SectionHeader } from '../components/SectionHeader'
import { amenities, gallery, nearby, propertyDetails, specs } from '../data/siteData'
import { fadeUp } from '../lib/animations'

export function PropertyDetails() {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <main>
      <section className="relative min-h-[92vh] overflow-hidden px-5 pt-32 md:px-8">
        {propertyDetails.slides.map((slide, index) => (
          <motion.img
            key={slide}
            src={slide}
            alt={`${propertyDetails.title} view ${index + 1}`}
            className={`absolute inset-0 h-full w-full object-cover ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
            animate={{ scale: index === activeSlide ? 1 : 1.04 }}
            transition={{ duration: 0.8 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
        <div className="relative z-10 mx-auto flex min-h-[74vh] max-w-7xl items-end pb-16">
          <Reveal className="max-w-4xl">
            <p className="text-xs font-semibold uppercase text-gold">Signature Listing</p>
            <h1 className="mt-5 font-serif text-5xl leading-tight text-white md:text-7xl">{propertyDetails.title}</h1>
            <p className="mt-5 text-xl text-white/70">{propertyDetails.location}</p>
            <div className="mt-8 flex gap-3">
              {propertyDetails.slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show property image ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-1.5 w-14 transition-colors ${index === activeSlide ? 'bg-gold' : 'bg-white/35'}`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-black px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-sm uppercase text-gold">Price</p>
            <h2 className="mt-3 font-serif text-5xl text-white">{propertyDetails.price}</h2>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {specs.map(({ label, value, icon: Icon }) => (
              <motion.div key={label} variants={fadeUp} className="border border-white/10 bg-white/[0.04] p-6">
                <Icon className="text-2xl text-gold" />
                <p className="mt-5 text-xs uppercase text-white/40">{label}</p>
                <p className="mt-2 font-medium text-white">{value}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#101010] px-5 py-24 md:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader eyebrow="About Property" title="An Estate for Privacy, Scale, and Entertaining" align="left" />
          <Reveal>
            <p className="text-xl leading-10 text-white/68">{propertyDetails.about}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-black px-5 py-24 md:px-8 lg:py-32">
        <SectionHeader eyebrow="Amenities" title="Resort-Level Comforts, Everyday" />
        <Stagger className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map(({ title, icon: Icon }) => (
            <motion.article key={title} variants={fadeUp} whileHover={{ scale: 1.03 }} className="flex items-center gap-5 border border-white/10 bg-white/[0.04] p-7">
              <span className="inline-flex h-14 w-14 items-center justify-center border border-gold/40 text-2xl text-gold">
                <Icon />
              </span>
              <h3 className="font-serif text-2xl text-white">{title}</h3>
            </motion.article>
          ))}
        </Stagger>
      </section>

      <section className="bg-[#0f0f0f] px-5 py-24 md:px-8 lg:py-32">
        <SectionHeader eyebrow="Image Gallery" title="Material, Light, Landscape" />
        <Stagger className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {gallery.slice(0, 6).map((image, index) => (
            <motion.div key={image} variants={fadeUp} className="group overflow-hidden">
              <img src={image} alt={`Property detail gallery ${index + 1}`} className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </motion.div>
          ))}
        </Stagger>
      </section>

      <section className="bg-black px-5 py-24 md:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <SectionHeader eyebrow="Nearby Locations" title="Connected to Delhi's Best Corridors" align="left" />
          <Stagger className="grid gap-4">
            {nearby.map((place) => (
              <motion.div key={place} variants={fadeUp} className="border border-white/10 bg-white/[0.035] px-6 py-5 text-lg text-white/72">
                {place}
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-[#101010] px-5 py-24 md:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader eyebrow="Enquiry Form" title="Request a Private Walkthrough" text="Share a few details and our estate advisory team will coordinate a discreet appointment." align="left" />
          <Reveal>
            <form className="grid gap-5 border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <input className="border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition-colors placeholder:text-white/35 focus:border-gold" placeholder="Full name" aria-label="Full name" />
                <input className="border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition-colors placeholder:text-white/35 focus:border-gold" placeholder="Phone number" aria-label="Phone number" />
              </div>
              <input className="border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition-colors placeholder:text-white/35 focus:border-gold" placeholder="Email address" aria-label="Email address" />
              <textarea className="min-h-36 resize-none border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition-colors placeholder:text-white/35 focus:border-gold" placeholder="Tell us your preferred visit date" aria-label="Message" />
              <div>
                <Button href="#contact">Submit Enquiry</Button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
