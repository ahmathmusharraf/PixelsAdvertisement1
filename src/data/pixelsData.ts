export interface ServiceItem {
  id: string;
  title: string;
  category:
    | 'LED Screens'
    | '3D Signages'
    | 'Outdoor'
    | 'Indoor'
    | 'Sticker Branding'
    | 'Neon Signs'
    | 'Traffic Signs'
    | 'Printing & Paper'
    | 'Printing'
    | 'Signage'
    | 'Branding'
    | 'Vehicle'
    | 'Exhibition'
    | 'Digital';
  description: string;
  iconName: string;
  popular?: boolean;
  features: string[];
  materials?: string[];
  typicalTurnaround?: string;
  image?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Printing' | 'Vehicle Wrap' | 'Sign Boards' | 'Brand Identity' | 'Packaging' | 'Events' | 'Outdoor Advertising' | 'LED' | 'Interior Branding';
  client: string;
  location: string;
  image: string;
  description: string;
  tags: string[];
  year: string;
  scope: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  location: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface Industry {
  name: string;
  icon: string;
  description: string;
  solutions: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
}

// Visual asset imports / references
import heroBg from '../assets/images/hero_production_bg_1784955564881.jpg';
import signageImg from '../assets/images/signage_3d_led_1784955576953.jpg';
import vehicleWrapImg from '../assets/images/vehicle_wrap_luxury_1784955588569.jpg';
import exhibitionImg from '../assets/images/exhibition_stand_uae_1784955600692.jpg';
import brandingImg from '../assets/images/packaging_branding_1784955613104.jpg';

export { heroBg, signageImg, vehicleWrapImg, exhibitionImg, brandingImg };

export const COMPANY_DETAILS = {
  name: 'PIXELS ADVERTISEMENT',
  tagline: 'Bringing Ideas to Life Creatively',
  taglineArabic: 'بيكسلز للدعاية والاعلان',
  address: {
    line1: 'China Mall, Gate No.6',
    line2: 'Opposite Ajman',
    area: 'Al Jerf Industrial 1',
    city: 'Ajman',
    country: 'United Arab Emirates',
  },
  phone: '+971 52 139 9918',
  phoneRaw: '971521399918',
  email: 'info@pixelsadv.ae',
  website: 'pixelsadv.ae',
  workingHours: 'Mon - Sat: 8:00 AM - 8:30 PM | Sun: Closed',
  mapUrl: 'https://maps.app.goo.gl/ENLYyavqa8gwa69e9',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61589698109680',
    instagram: 'https://www.instagram.com/pixels_advertise/',
    tiktok: 'https://www.tiktok.com/@pixels.advertisem',
    whatsapp: 'https://wa.me/971521399918',
  },
  stats: [
    { value: '500+', label: 'Projects Delivered', subtext: 'Across UAE' },
    { value: '300+', label: 'Happy Corporate Clients', subtext: 'Repeat Partners' },
    { value: '5+', label: 'Years Excellence', subtext: 'In Advertising' },
    { value: '100%', label: 'Quality Guarantee', subtext: 'In-House Production' },
  ],
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'outdoor-indoor-led-screen',
    title: 'Outdoor/Indoor LED Screen',
    category: 'LED Screens',
    description: 'High-brightness indoor & outdoor LED video walls, programmable display screens, and curved LED boards for maximum advertising impact.',
    iconName: 'Tv',
    popular: true,
    features: ['Outdoor: P2.5, P6, P10 | Indoor: P1.5, P1.8, P2.5, P3', 'IP65 weatherproof rating', 'Ultra-bright daylight visibility', 'Remote cloud content management'],
    materials: ['Die-cast Aluminum Cabinets', 'Nationstar LEDs', 'Meanwell Power Supplies'],
    typicalTurnaround: '3-5 Days',
    image: heroBg,
  },
  {
    id: '3d-signage',
    title: '3D Signage',
    category: '3D Signages',
    description: 'Custom CNC fabricated 3D metallic, acrylic, and halo-lit channel letters that give impressive depth to receptions and building facades.',
    iconName: 'Box',
    popular: true,
    features: ['3D laser precision cutting', 'Gold, chrome, brushed steel finishes', 'Embedded backlighting', 'Structural mounting hardware'],
    materials: ['Stainless Steel', 'Brass', 'Acrylic', 'High-Density Foam'],
    typicalTurnaround: '3-5 Days',
    image: signageImg,
  },
  {
    id: 'outdoor-signage',
    title: 'Outdoor Signage',
    category: 'Outdoor',
    description: 'Heavy-duty outdoor building fascias, pylon signs, roadside hoardings, and storefront sign boards engineered for Gulf weather.',
    iconName: 'LayoutGrid',
    popular: true,
    features: ['Weatherproof ACP backing', 'Wind load engineered', 'Compliant with UAE Municipality standards', 'Day/night high visibility'],
    materials: ['Aluminum Composite Panels (ACP)', 'Stainless Steel', 'Acrylic', 'Tempered Glass'],
    typicalTurnaround: '4-6 Days',
    image: signageImg,
  },
  {
    id: 'indoor-signage',
    title: 'Indoor Signage',
    category: 'Indoor',
    description: 'Elegant indoor reception backdrops, wayfinding directional signs, office directory boards, and crystal acrylic wall displays.',
    iconName: 'Home',
    popular: true,
    features: ['High optical clarity', 'Laser flame polished edges', 'Floating standoff hardware', 'Scratch-resistant coating'],
    materials: ['Cast Acrylic', 'Stainless Standoff Pins', 'Brushed Metal'],
    typicalTurnaround: '2-3 Days',
    image: signageImg,
  },
  {
    id: 'sticker-branding',
    title: 'Sticker Branding',
    category: 'Sticker Branding',
    description: 'High-resolution die-cut stickers, vehicle fleet wrapping, window frosted film, floor decals, and custom vinyl wall stickers.',
    iconName: 'Maximize2',
    popular: true,
    features: ['3M & Avery Dennison certified vinyl', 'Bubble-free adhesive application', 'UV blocking privacy film', 'Precision computer plot cutting'],
    materials: ['Cast Vinyl', 'Frosted Etched Film', 'Perforated One-Way Vision'],
    typicalTurnaround: '24-48 Hours',
    image: vehicleWrapImg,
  },
  {
    id: 'neon-signs',
    title: 'Neon Signs',
    category: 'Neon Signs',
    description: 'Vibrant LED neon flex signs, custom script neon logos, and decorative retro neon artwork for cafes, restaurants, and retail spaces.',
    iconName: 'Zap',
    popular: true,
    features: ['Unbreakable silicone LED neon flex', 'Low energy 12V operation', 'Acrylic backplate backing', 'Halo & face glow options'],
    materials: ['Flexible Silicone LED', 'Clear Acrylic Board', 'IP67 Waterproof LEDs'],
    typicalTurnaround: '2-4 Days',
    image: signageImg,
  },
  {
    id: 'traffic-signs',
    title: 'Traffic Signs',
    category: 'Traffic Signs',
    description: 'Standard regulatory road traffic signs, parking guidance signage, construction hazard signs, and reflective safety boards.',
    iconName: 'ShieldAlert',
    popular: true,
    features: ['3M High-Intensity Prismatic sheeting', 'UAE RTA & Civil Defense compliant', 'Anti-rust heavy aluminum backing', 'UV fade resistant'],
    materials: ['Reflective Sheeting', 'Heavy Aluminum Plate', 'Steel Posts'],
    typicalTurnaround: '2-3 Days',
    image: signageImg,
  },
  {
    id: 'business-card-flyer',
    title: 'Business Card, Flyer',
    category: 'Printing & Paper',
    description: 'Luxury business cards with soft-touch velvet lamination, spot UV, gold foil stamping, and high-speed promotional marketing flyers.',
    iconName: 'CreditCard',
    popular: true,
    features: ['350gsm to 700gsm cotton/silk stock', 'Gold, silver, rose foil accents', 'Velvet tactile touch', 'Gloss & matte lamination'],
    materials: ['Luxury Art Board', 'Textured Cotton Paper', 'Gloss/Matte Art Paper'],
    typicalTurnaround: '24-48 Hours',
    image: brandingImg,
  },
  {
    id: 'bill-book-flags',
    title: 'Bill Book & Flags',
    category: 'Printing & Paper',
    description: 'Custom carbonless (NCR) invoice bill books, cash receipts, teardrop beach flags, feather flags, and corporate event flags.',
    iconName: 'BookOpen',
    popular: true,
    features: ['2-ply & 3-ply NCR duplicate sheets', 'Sequential numbering & perforation', 'Wind-resistant dye-sublimation print', 'Heavy-duty aluminum flag poles'],
    materials: ['NCR Carbonless Paper', 'Polyester Flag Fabric', 'Aluminum Poles'],
    typicalTurnaround: '1-2 Days',
    image: exhibitionImg,
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'port-1',
    title: '3D Illuminated Facade & Channel Letters',
    category: 'Sign Boards',
    client: 'Al Hamra Retail Complex',
    location: 'Ajman / Dubai, UAE',
    image: signageImg,
    description: 'Engineering and fabrication of a massive 12-meter 3D stainless steel channel letter sign with dual-glow Samsung LED modules on a dark ACP clad structure.',
    tags: ['LED Signage', '3D Stainless Steel', 'ACP Cladding', 'Samsung Modules'],
    year: '2026',
    scope: ['Structural Engineering', '3D Laser Cutting', 'IP67 LED Installation', 'UAE Municipality Permit'],
  },
  {
    id: 'port-2',
    title: 'Matte Black & Neon Orange Fleet Wrapping',
    category: 'Vehicle Wrap',
    client: 'Apex Logistics & Express',
    location: 'Dubai & Sharjah, UAE',
    image: vehicleWrapImg,
    description: 'Full body vehicle wrap for 25 commercial delivery vans and luxury manager SUVs using 3M 1080 cast vinyl with custom geometric accent lines.',
    tags: ['Fleet Wrap', '3M Cast Vinyl', 'RTA Approved', 'Paint Protection'],
    year: '2025',
    scope: ['Vehicle Graphic Design', '3M Vinyl Lamination', 'Bubble-Free Application', 'RTA Certification'],
  },
  {
    id: 'port-3',
    title: 'Gitex Tech Expo Double-Deck Stand',
    category: 'Events',
    client: 'CyberCore Technologies',
    location: 'Dubai World Trade Centre',
    image: exhibitionImg,
    description: 'Turnkey 12x8m double-decker exhibition stand featuring 360-degree LED video wall, acrylic floating podiums, and VIP lounge booth.',
    tags: ['Exhibition Stand', '360 LED Wall', 'VIP Lounge', 'Turnkey Expo'],
    year: '2025',
    scope: ['3D Architectural Render', 'Wood & Steel Fabrication', 'LED Screen Integration', 'On-Site Expo Setup'],
  },
  {
    id: 'port-4',
    title: 'Luxury Perfume & Oud Gold Foil Box Set',
    category: 'Packaging',
    client: 'Royal Arabian Aromas',
    location: 'Abu Dhabi, UAE',
    image: brandingImg,
    description: 'Handcrafted magnetic rigid gift box with velvet insert, micro-embossed gold foil logo, and custom UV varnish texture.',
    tags: ['Rigid Box', 'Gold Foil', 'Velvet Foam', 'Luxury Packaging'],
    year: '2026',
    scope: ['Deline Structural Design', 'Rigid Board Crafting', 'Micro Gold Foil Stamping', 'Custom Velvet Tray'],
  },
  {
    id: 'port-5',
    title: 'Modern Corporate Headquarters Interior Branding',
    category: 'Interior Branding',
    client: 'Gulf Crest Real Estate',
    location: 'Business Bay, Dubai',
    image: exhibitionImg,
    description: 'Complete reception area makeover featuring backlit acrylic logo with titanium gold trim, sound dampening wooden slatted feature wall, and frosted glass partitions.',
    tags: ['Reception Branding', 'Titanium Gold', 'Acoustic Wood', 'Frosted Vinyl'],
    year: '2025',
    scope: ['Spatial Interior Design', 'CNC Router Wooden Slatting', 'Backlit Metal Fabrication', 'Glass Etching'],
  },
  {
    id: 'port-6',
    title: 'Large Format Highway Unipole Billboard',
    category: 'Outdoor Advertising',
    client: 'Ajman Marina Towers',
    location: 'Sheikh Mohammed Bin Zayed Road (E311)',
    image: heroBg,
    description: '20m x 8m ultra-vibrant UV printed flex billboard mounted on heavy structural steel with high-output LED floodlighting.',
    tags: ['Unipole Billboard', 'UV Flex Print', 'E311 Highway', 'High-Output LED'],
    year: '2025',
    scope: ['High-Res Flex Printing', 'Structural Steel Mounting', 'Wind Safety Testing', 'Floodlight Wiring'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Tariq Al-Mansoori',
    role: 'Managing Director',
    company: 'Al-Mansoori Holdings',
    industry: 'Real Estate & Hospitality',
    location: 'Dubai, UAE',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content: 'Pixels Advertisement delivered our hotel chain 3D signage and lobby branding ahead of schedule. Their attention to lighting quality, Samsung LED durability, and crisp finishing is unbeatable in the UAE market.',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Sarah Jenkins',
    role: 'Head of Marketing',
    company: 'Veloce Logistics Fleet',
    industry: 'Logistics',
    location: 'Sharjah & Ajman, UAE',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    content: 'We wrapped our entire fleet of 40 delivery vans with Pixels. The 3M vinyl quality is pristine even after months of Gulf summer heat. Plus, they handled our RTA permit process effortlessly!',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Eng. Khalid Saif',
    role: 'Operations Director',
    company: 'Ajman Commercial Center',
    industry: 'Retail & Malls',
    location: 'Ajman, UAE',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    content: 'Being located near China Mall, Pixels is our go-to partner for all outdoor banners, LED boards, and promotional pop-ups. Their team works round-the-clock and their in-house machinery ensures top precision.',
    rating: 5,
  },
  {
    id: 'test-4',
    name: 'Maya Lin',
    role: 'Creative Event Director',
    company: 'Apex Exhibitions UAE',
    industry: 'Events & Trade Shows',
    location: 'Dubai World Trade Centre',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    content: 'The exhibition stand Pixels built for our GITEX booth was crowned Best Design in our pavilion. From CNC acrylic cutting to zero-gap LED wall integration, pure craftsmanship!',
    rating: 5,
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Consultation & Site Survey',
    description: 'We review your brand requirements, conduct precise site measurements across UAE locations, and recommend optimal materials, lightings, and specifications.',
  },
  {
    step: '02',
    title: 'Creative Design & 3D Proofing',
    description: 'Our senior designers produce photorealistic 3D renders and artwork proofs so you can visualize the exact scale, lighting, and finish before production.',
  },
  {
    step: '03',
    title: 'In-House Precision Production',
    description: 'Using high-speed UV flatbed printers, CNC routers, CO2 laser cutters, and automated channel letter benders in our Ajman facility, we manufacture with zero defects.',
  },
  {
    step: '04',
    title: 'Expert Installation & Approval',
    description: 'Certified UAE technicians mount your signage, vehicle wraps, or booth safely with electrical setup and compliance check against local municipality rules.',
  },
  {
    step: '05',
    title: 'Warranty & Long-Term Support',
    description: 'Enjoy comprehensive warranty coverage on LEDs, vinyl adhesion, and structural frames with rapid maintenance support whenever you need.',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Premium Quality Assurance',
    description: 'Imported Japanese UV inks, 3M/Avery vinyls, and Samsung LED modules rated for 50,000+ hours.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Rapid UAE Delivery',
    description: 'Dedicated 24/7 production facility in Ajman enabling express same-day and 24-hour delivery options.',
    icon: 'Clock',
  },
  {
    title: 'Creative Design Experts',
    description: 'In-house team of senior 3D animators, vector specialists, and architectural signage graphic designers.',
    icon: 'Sparkles',
  },
  {
    title: 'Competitive Direct Factory Pricing',
    description: 'No middleman markups. Direct manufacturer pricing with transparent quotes and zero hidden fees.',
    icon: 'BadgePercent',
  },
  {
    title: 'Certified UAE Field Technicians',
    description: 'Licensed team experienced in high-rise rigging, boom-lift mounting, and electrical wiring.',
    icon: 'Wrench',
  },
  {
    title: 'State-of-the-Art Equipment',
    description: 'Latest CNC routers, fiber laser cutters, channel benders, and 5-meter seamless UV printers.',
    icon: 'Cpu',
  },
  {
    title: 'Latest Technology & Eco Inks',
    description: 'Odorless GreenGuard certified eco-solvent and UV inks safe for indoor hospitals, schools, and offices.',
    icon: 'Leaf',
  },
  {
    title: 'Dedicated Account Managers',
    description: 'Single point of contact giving you real-time production updates via WhatsApp and phone.',
    icon: 'Headphones',
  },
  {
    title: 'Trusted Across All UAE Emirates',
    description: 'Active projects in Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.',
    icon: 'MapPin',
  },
];

export const INDUSTRIES_SERVED: Industry[] = [
  {
    name: 'Restaurants & Cafes',
    icon: 'Utensils',
    description: 'Illuminated neon flex signs, acrylic menu boards, window stickers, and branded takeaway bags.',
    solutions: ['3D Acrylic Signs', 'Backlit Menus', 'Frosted Window Decals', 'Uniform Printing'],
  },
  {
    name: 'Retail & Shopping Malls',
    icon: 'ShoppingBag',
    description: 'Storefront fascias, LED channel letters, seasonal window promotions, and floor graphics.',
    solutions: ['Mall Store Front Signs', 'High-Gloss Vinyls', 'Lightboxes', 'POS Display Stands'],
  },
  {
    name: 'Corporate Offices',
    icon: 'Building2',
    description: 'Reception 3D stainless steel logos, frosted office glass privacy films, and directional wayfinding.',
    solutions: ['Reception Logos', 'Etched Glass Film', 'Wayfinding Plaques', 'Wall Murals'],
  },
  {
    name: 'Hospitals & Healthcare',
    icon: 'Hospital',
    description: 'Antimicrobial wall wraps, high-visibility emergency directional signs, and staff badges.',
    solutions: ['Emergency Wayfinding', 'Acoustic Wall Graphics', 'Badge Lanyards', 'Safety Signage'],
  },
  {
    name: 'Real Estate Developers',
    icon: 'Home',
    description: 'Hoarding fence graphics, project site 3D scale models, VIP sales center signage, and outdoor unipoles.',
    solutions: ['Hoarding Fence Flex', 'Pylon Tower Signs', 'Sales Suite Branding', 'Flag Banners'],
  },
  {
    name: 'Schools & Universities',
    icon: 'GraduationCap',
    description: 'Campus directional signage, auditorium stage backdrops, sports field banners, and award plaques.',
    solutions: ['Campus Wayfinding', 'Acrylic Trophy Plaques', 'Stage Backdrops', 'Bus Wrapping'],
  },
  {
    name: 'Automotive & Showrooms',
    icon: 'Car',
    description: 'Showroom window branding, custom car vehicle wraps, floor decals, and illuminated pylon signs.',
    solutions: ['Vehicle Fleet Wraps', 'Pylon Totems', 'Floor Decals', 'Showroom Banners'],
  },
  {
    name: 'Hotels & Hospitality',
    icon: 'Hotel',
    description: 'Elegant brass room numbers, banquet backdrop displays, outdoor rooftop LED channel lettering.',
    solutions: ['Rooftop LED Letters', 'Brass Room Numbers', 'Event Backdrops', 'VIP Amenities'],
  },
  {
    name: 'Government & Defense',
    icon: 'Landmark',
    description: 'High-security building signage, national flag poles, commemorative award crests, and exhibition booths.',
    solutions: ['Monument Signs', 'Commemorative Shields', 'Security Badging', 'Official Exhibition'],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'The Ultimate Guide to Outdoor LED Signage Regulations in Ajman & Dubai',
    slug: 'guide-to-outdoor-led-signage-regulations-uae',
    category: 'Signage & Permits',
    readTime: '5 min read',
    date: 'July 18, 2026',
    excerpt: 'Key municipality requirements, wind pressure standards, Samsung LED specifications, and permit procedures for commercial building signboards in the UAE.',
    image: signageImg,
  },
  {
    id: 'post-2',
    title: 'Maximizing Fleet ROI: Why Commercial Vehicle Wrapping Outperforms Digital Ads in UAE',
    slug: 'maximizing-fleet-roi-vehicle-wrapping-uae',
    category: 'Vehicle Branding',
    readTime: '4 min read',
    date: 'June 29, 2026',
    excerpt: 'How a single wrapped delivery van generates over 50,000 daily impressions across Sheikh Zayed Road and E311 highway with a one-time 3M vinyl investment.',
    image: vehicleWrapImg,
  },
  {
    id: 'post-3',
    title: 'Choosing Between UV Flatbed, Offset, and Digital Printing for Packaging',
    slug: 'uv-flatbed-vs-offset-vs-digital-printing-guide',
    category: 'Printing Technology',
    readTime: '6 min read',
    date: 'May 14, 2026',
    excerpt: 'Understand turnaround times, substrate compatibility, cost per unit, and tactile spot UV finishes to select the right print method for your product.',
    image: brandingImg,
  },
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Danyal',
    role: 'CEO, Founder',
    image: '/Danyal.jpg',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    id: '2',
    name: 'Nero',
    role: 'Assistant Operation Manager',
    image: '/Nero.jpg',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    id: '3',
    name: 'Alex Aquino',
    role: 'Human Resource',
    image: '/Alex.jpg',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    id: '4',
    name: 'Saroj Khan',
    role: 'Production Manager',
    image: '/Saroj.jpg',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  }, 
  {
    id: '5',
    name: 'Roney Thomas',
    role: 'Design Manager',
    image: '/Roney.jpg',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    id: '6',
    name: 'Tony Thomas',
    role: 'Designer',
    image: '/Tony.jpg',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
  {
    id: '7',
    name: 'Susan Roney Thomas',
    role: 'Junior Accountant',
    image: '/Susan.jpg',
    socials: { linkedin: '#', twitter: '#', instagram: '#' },
  },
];
