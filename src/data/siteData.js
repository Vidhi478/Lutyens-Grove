import {
  FaBath,
  FaBed,
  FaBuilding,
  FaCar,
  FaChartLine,
  FaDumbbell,
  FaFacebookF,
  FaInstagram,
  FaLeaf,
  FaLinkedinIn,
  FaLocationDot,
  FaMapLocationDot,
  FaShieldHalved,
  FaSpa,
  FaStar,
  FaTree,
  FaWaterLadder,
  FaWhatsapp,
} from 'react-icons/fa6'

export const images = {
  hero:
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=85',
  cta:
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=85',
  lifestyleOne:
    'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85',
  lifestyleTwo:
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85',
  propertyHero:
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2200&q=85',
}

export const navLinks = ['Home', 'About', 'Properties', 'Services', 'Gallery', 'Contact']

export const properties = [
  {
    title: 'The Chattarpur Estate',
    price: 'Rs. 42 Cr',
    location: 'Chattarpur, South Delhi',
    area: '2.8 Acres',
    description: 'A private retreat with sculpted gardens, pool pavilion, and contemporary glass volumes.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Sultanpur Grove',
    price: 'Rs. 31 Cr',
    location: 'Sultanpur Farms',
    area: '1.9 Acres',
    description: 'Warm stone architecture, tree-lined drives, and seamless indoor-outdoor entertaining.',
    image:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'The Mehrauli House',
    price: 'Rs. 55 Cr',
    location: 'Mehrauli Greens',
    area: '3.4 Acres',
    description: 'A rare trophy address with wellness suites, water courts, and resort-grade privacy.',
    image:
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=85',
  },
]

export const whyChoose = [
  { title: 'Verified Properties', icon: FaShieldHalved, text: 'Privately vetted listings with clear ownership and premium due diligence.' },
  { title: 'Prime Locations', icon: FaMapLocationDot, text: 'Curated addresses across Chattarpur, Sultanpur, Mehrauli, and Westend Greens.' },
  { title: 'Luxury Lifestyle', icon: FaSpa, text: 'Homes selected for privacy, architecture, wellness, gardens, and entertaining.' },
  { title: 'Investment Value', icon: FaChartLine, text: 'Strategic assets in Delhi farmhouse corridors with resilient long-term demand.' },
]

export const lifestyle = [
  {
    title: 'Nature, Quietly Composed',
    label: 'Nature',
    text: 'Wake to mature trees, filtered light, and private lawns that feel removed from the city while staying minutes from Delhi landmarks.',
    image: images.lifestyleOne,
  },
  {
    title: 'Architecture for Slow Living',
    label: 'Private Gardens / Pool / Modern Architecture',
    text: 'Expansive glazing, shaded decks, resort-style pools, and garden rooms create a measured rhythm between home and landscape.',
    image: images.lifestyleTwo,
  },
]

export const gallery = [
  'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1600566752734-2a0a1a60fce3?auto=format&fit=crop&w=900&q=85',
]

export const testimonials = [
  {
    name: 'Aarav Malhotra',
    role: 'Founder, Atelier Capital',
    quote: 'Every visit felt deeply considered. The team understood privacy, timing, and the quiet details that define a real luxury purchase.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=85',
  },
  {
    name: 'Naina Kapoor',
    role: 'Design Collector',
    quote: 'They showed us farmhouses that felt rare, architectural, and personal. Nothing felt like a public listing tour.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=85',
  },
]

export const propertyDetails = {
  title: 'The Chattarpur Estate',
  price: 'Rs. 42 Cr',
  location: 'Chattarpur, South Delhi',
  area: '2.8 Acres',
  bedrooms: '6 Suites',
  bathrooms: '8 Baths',
  parking: '10 Cars',
  about:
    'A modern farmhouse designed for privacy, gatherings, and everyday calm. The estate pairs clean architectural lines with mature landscape, a pool pavilion, formal lawns, staff quarters, and generous entertaining zones.',
  slides: [
    images.propertyHero,
    'https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=2200&q=85',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2200&q=85',
  ],
}

export const specs = [
  { label: 'Location', value: propertyDetails.location, icon: FaLocationDot },
  { label: 'Area', value: propertyDetails.area, icon: FaTree },
  { label: 'Bedrooms', value: propertyDetails.bedrooms, icon: FaBed },
  { label: 'Bathrooms', value: propertyDetails.bathrooms, icon: FaBath },
  { label: 'Parking', value: propertyDetails.parking, icon: FaCar },
]

export const amenities = [
  { title: 'Private Pool', icon: FaWaterLadder },
  { title: 'Wellness Deck', icon: FaSpa },
  { title: 'Gym Studio', icon: FaDumbbell },
  { title: 'Garden Courts', icon: FaLeaf },
  { title: 'Smart Security', icon: FaShieldHalved },
  { title: 'Guest Pavilion', icon: FaBuilding },
]

export const nearby = ['Qutub Minar - 14 min', 'MG Road - 10 min', 'DLF Avenue Saket - 18 min', 'IGI Airport - 35 min']

export const socialLinks = [
  { label: 'Instagram', icon: FaInstagram },
  { label: 'LinkedIn', icon: FaLinkedinIn },
  { label: 'Facebook', icon: FaFacebookF },
  { label: 'WhatsApp', icon: FaWhatsapp },
]

export const StarIcon = FaStar
