import { Reveal } from './Motion'

export function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  return (
    <Reveal className={`mx-auto mb-12 max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <p className="mb-4 text-xs font-semibold uppercase text-gold">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-white/62">{text}</p>}
    </Reveal>
  )
}
