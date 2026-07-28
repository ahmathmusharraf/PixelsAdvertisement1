export interface ServiceItem {
  id: string;
  title: string;
  category: 'Printing' | 'Signage' | 'Branding' | 'Vehicle' | 'Exhibition' | 'Digital';
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
  email: 'info@pixelsadvertisement.ae',
  website: 'pixelsadvertisement.ae',
  workingHours: 'Mon - Sat: 8:30 AM - 9:00 PM | Sun: Closed',
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
    id: 'large-format-printing',
    title: 'Large Format Printing',
    category: 'Printing',
    description: 'High-resolution indoor & outdoor printing on flex, vinyl, mesh, canvas, and backlit film with weather-resistant UV inks.',
    iconName: 'Printer',
    popular: true,
    features: ['Up to 1440 DPI resolution', 'UV & solvent fade-resistant inks', 'Custom sizing up to 5m seamless', 'Fire-retardant materials'],
    materials: ['Flex Banner', 'Saver Vinyl', 'Backlit Film', 'Mesh Fabric', 'Artist Canvas'],
    typicalTurnaround: '24-48 Hours',
    image: heroBg,
  },
  {
    id: 'indoor-outdoor-signage',
    title: 'Indoor & Outdoor Signage',
    category: 'Signage',
    description: 'Custom durable building fascias, pylon signs, directional wayfinding, and store-front signs engineered for Gulf weather.',
    iconName: 'LayoutGrid',
    popular: true,
    features: ['Weatherproof ACP backing', 'Wind load engineered', 'Compliant with UAE Municipality standards', 'Day/night high visibility'],
    materials: ['Aluminum Composite Panels (ACP)', 'Stainless Steel', 'Acrylic', 'Tempered Glass'],
    typicalTurnaround: '3-5 Days',
    image: signageImg,
  },
  {
    id: 'led-sign-boards',
    title: 'LED Sign Boards',
    category: 'Signage',
    description: 'Energy-efficient LED illuminated channel letters, neon flex, halo lit signage, and programmable outdoor LED displays.',
    iconName: 'Zap',
    popular: true,
    features: ['Samsung LED modules (IP67)', 'Low energy 12V transformers', 'Ultra-bright illumination', 'Halo & face glow options'],
    materials: ['Acrylic', 'Brass', 'Titanium Gold Steel', 'IP67 Waterproof LEDs'],
    typicalTurnaround: '4-6 Days',
    image: signageImg,
  },
  {
    id: 'vehicle-wrapping',
    title: 'Vehicle Wrapping',
    category: 'Vehicle',
    description: 'Full and partial vehicle graphics wrapping for commercial fleets, luxury cars, delivery vans, and heavy machinery.',
    iconName: 'Car',
    popular: true,
    features: ['3M & Avery Dennison certified vinyl', 'Paint protection non-damaging removal', 'Custom full-color print or color change', 'RTA approval design guidance'],
    materials: ['Cast Vinyl', 'Laminated Protection', 'Reflective Vinyl', 'Perforated One-Way Vision'],
    typicalTurnaround: '1-2 Days per vehicle',
    image: vehicleWrapImg,
  },
  {
    id: '3d-signage',
    title: '3D Signage',
    category: 'Signage',
    description: 'Custom CNC fabricated 3D metallic, acrylic, and foam letterings that add impressive depth to receptions and building facades.',
    iconName: 'Box',
    features: ['3D laser precision cutting', 'Gold, chrome, brushed steel finishes', 'Embedded backlighting', 'Structural mounting hardware'],
    materials: ['Stainless Steel', 'Brass', 'Acrylic', 'High-Density Foam'],
    typicalTurnaround: '3-5 Days',
    image: signageImg,
  },
  {
    id: 'acrylic-sign-boards',
    title: 'Acrylic Sign Boards',
    category: 'Signage',
    description: 'Ultra-clear crystal acrylic signs with flame-polished edges, standoff chrome bolts, and UV printed graphics.',
    iconName: 'Layers',
    features: ['High optical clarity', 'Laser flame polished edges', 'Floating standoff hardware', 'Scratch-resistant coating'],
    materials: ['Cast Acrylic', 'Stainless Standoff Pins'],
    typicalTurnaround: '2-3 Days',
    image: signageImg,
  },
  {
    id: 'roll-up-banners',
    title: 'Roll Up Banners',
    category: 'Printing',
    description: 'Portable retractable banner stands with heavy-duty aluminum bases and non-curl blockout film for events and showrooms.',
    iconName: 'Scroll',
    popular: true,
    features: ['Anti-curl grey back film', 'Heavy base with padded carry bag', 'Quick 30-second setup', 'Luxury chrome end-cap options'],
    materials: ['Blockout PP Pet Film', 'Aluminum Mechanism'],
    typicalTurnaround: 'Same Day / 24 Hours',
    image: exhibitionImg,
  },
  {
    id: 'business-cards',
    title: 'Business Cards',
    category: 'Printing',
    description: 'Premium business cards with soft-touch lamination, foil stamping, spot UV, embossed lettering, and luxury cotton stock.',
    iconName: 'CreditCard',
    features: ['350gsm to 700gsm cotton/silk stock', 'Gold, silver, rose foil accents', 'Velvet tactile touch', 'Painted edge finishing'],
    materials: ['Luxury Art Board', 'Textured Cotton Paper', 'Transparent PVC'],
    typicalTurnaround: '24-48 Hours',
    image: brandingImg,
  },
  {
    id: 'flyers',
    title: 'Flyers',
    category: 'Printing',
    description: 'Vibrant marketing flyers in A4, A5, and DL sizes with high-speed offset and digital printing for UAE promotional distribution.',
    iconName: 'FileText',
    features: ['Gloss or matte lamination', 'Eco-friendly recycled options', 'Precision trim & fold', 'Bulk discount tiers'],
    materials: ['150gsm - 300gsm Gloss/Matte Art Paper'],
    typicalTurnaround: '24 Hours',
    image: brandingImg,
  },
  {
    id: 'brochures',
    title: 'Brochures & Catalogs',
    category: 'Printing',
    description: 'Multi-page corporate brochures, bi-fold, tri-fold, and saddle-stitched product catalogs with luxury spot UV embellishments.',
    iconName: 'BookOpen',
    features: ['Saddle-stitch or perfect bound', 'Spot UV logo accent', 'Heavy cover stock', 'High color fidelity'],
    materials: ['170gsm inner, 350gsm cover'],
    typicalTurnaround: '2-4 Days',
    image: brandingImg,
  },
  {
    id: 'offset-printing',
    title: 'Offset Printing',
    category: 'Printing',
    description: 'Cost-effective high-volume printing press run for books, corporate stationery, magazines, and large packaging orders.',
    iconName: 'Sliders',
    features: ['Consistent pantone color matching', 'Ultra-high volume capacity', 'Superior per-unit economy', 'Multiple varnish finishes'],
    typicalTurnaround: '3-5 Days',
    image: brandingImg,
  },
  {
    id: 'digital-printing',
    title: 'Digital Printing',
    category: 'Printing',
    description: 'Rapid on-demand high-resolution printing for short runs, variable data, personalized invitations, and urgent marketing collateral.',
    iconName: 'Monitor',
    features: ['Zero setup cost', 'Instant proofing available', 'Variable data personalized printing', 'Rich color spectrum'],
    typicalTurnaround: 'Same Day / 4 Hours',
    image: brandingImg,
  },
  {
    id: 'promotional-gifts',
    title: 'Promotional Gifts',
    category: 'Branding',
    description: 'Custom corporate giveaways including engraved metal pens, branded powerbanks, thermal bottles, umbrellas, and gift boxes.',
    iconName: 'Gift',
    popular: true,
    features: ['Laser engraving & UV print', 'Eco-friendly bamboo sets', 'Custom VIP presentation box', 'Fast UAE delivery'],
    materials: ['Stainless Steel', 'Bamboo', 'Leatherette', 'Silicone'],
    typicalTurnaround: '3-5 Days',
    image: brandingImg,
  },
  {
    id: 'corporate-branding',
    title: 'Corporate Branding',
    category: 'Branding',
    description: 'Complete brand identity strategy including brand guidelines, typography, color palettes, office stationery, and brand collateral.',
    iconName: 'Briefcase',
    features: ['Comprehensive brand book', 'Vector logo kit', '3D mockup visualization', 'Trademark-ready assets'],
    typicalTurnaround: '5-10 Days',
    image: brandingImg,
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    category: 'Branding',
    description: 'Iconic custom logo design created by senior brand designers with vector master files and trademark support.',
    iconName: 'Palette',
    features: ['3 distinct design concepts', 'Unlimited revisions', 'Full copyright transfer', 'All source vector files (.AI, .EPS, .SVG, .PNG)'],
    typicalTurnaround: '2-3 Days',
    image: brandingImg,
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    category: 'Branding',
    description: 'Creative design support for social media kits, advertising billboards, packaging design, and marketing campaigns.',
    iconName: 'Figma',
    features: ['Dedicated design lead', 'Quick turnarounds', 'Press-ready print files', 'Digital social assets'],
    typicalTurnaround: '24-48 Hours',
    image: brandingImg,
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    category: 'Digital',
    description: 'Data-driven content strategy, short-form video production, reel creation, and targeted ad campaigns on IG, TikTok, FB, and Snapchat.',
    iconName: 'Share2',
    features: ['Content calendar & copywriting', 'Video editing & motion graphics', 'Targeted audience growth', 'Monthly ROI reporting'],
    typicalTurnaround: 'Monthly Retainer',
    image: heroBg,
  },
  {
    id: 'website-design',
    title: 'Website Design & Dev',
    category: 'Digital',
    description: 'High-converting interactive websites, luxury brand landing pages, e-commerce stores, and custom web apps with responsive motion.',
    iconName: 'Globe',
    features: ['Ultra-fast performance', 'SEO ready structure', 'Mobile-first fluid UI', 'Awwwards-level design standard'],
    typicalTurnaround: '7-14 Days',
    image: heroBg,
  },
  {
    id: 'exhibition-stands',
    title: 'Exhibition Stands',
    category: 'Exhibition',
    description: 'Turnkey exhibition booth design, CNC fabrication, LED display integration, installation, and dismantling across UAE trade centers.',
    iconName: 'Sparkles',
    popular: true,
    features: ['3D walkthrough booth design', 'In-house carpentry & metalwork', 'LED wall & lighting setup', 'On-site technical support during expo'],
    typicalTurnaround: '7-12 Days',
    image: exhibitionImg,
  },
  {
    id: 'interior-branding',
    title: 'Interior Branding',
    category: 'Branding',
    description: 'Transform office spaces, retail outlets, and cafes with custom reception backdrops, acoustic panels, and decorative feature walls.',
    iconName: 'Home',
    features: ['Custom wood, metal, & acrylic layering', 'Ambient halo lighting', 'Acoustic sound-absorbing textures', 'Flawless site installation'],
    typicalTurnaround: '4-7 Days',
    image: exhibitionImg,
  },
  {
    id: 'wall-graphics',
    title: 'Wall Graphics & Murals',
    category: 'Printing',
    description: 'Custom wallpaper, wall murals, and textured vinyl wraps for corporate conference rooms, gyms, restaurants, and retail spaces.',
    iconName: 'Image',
    features: ['Seamless fabric wallpaper options', 'Wipeable scratch-resistant surface', 'Non-toxic eco-solvent inks', 'Bespoke custom artwork design'],
    typicalTurnaround: '2-3 Days',
    image: heroBg,
  },
  {
    id: 'window-stickers',
    title: 'Window Stickers & Frosted Film',
    category: 'Printing',
    description: 'Privacy frosted vinyl etching, custom die-cut store front graphics, perforated one-way vision stickers, and seasonal promo decals.',
    iconName: 'Maximize2',
    features: ['Computerized CNC blade plot cutting', 'Bubble-free adhesive application', 'UV blocking privacy film', 'Easy removable promotions'],
    typicalTurnaround: '24-48 Hours',
    image: heroBg,
  },
  {
    id: 'laser-cutting',
    title: 'Laser Cutting',
    category: 'Exhibition',
    description: 'Ultra-precise CO2 laser cutting and engraving on acrylic, wood, leather, MDF, fabric, and rubber with millimeter accuracy.',
    iconName: 'Scissors',
    features: ['Up to 20mm acrylic cutting', 'Intricate lace-like detail engraving', 'Smooth polished edge finish', 'Rapid automated production'],
    typicalTurnaround: 'Same Day / 24 Hours',
    image: signageImg,
  },
  {
    id: 'cnc-cutting',
    title: 'CNC Router Cutting',
    category: 'Exhibition',
    description: 'Heavy-duty 3D CNC routing for aluminum composite panels (ACP), hardwood, brass, aluminum sheets, and dense foam boards.',
    iconName: 'Cpu',
    features: ['3D relief carving', 'V-groove folding for ACP panels', 'Industrial 3-axis CNC accuracy', 'Heavy structural fabrication'],
    typicalTurnaround: '24-48 Hours',
    image: signageImg,
  },
  {
    id: 'uv-flatbed-printing',
    title: 'UV Direct Flatbed Printing',
    category: 'Printing',
    description: 'Direct-to-substrate UV printing on wood, glass, metal sheets, ceramic tiles, acrylic, and phone covers with raised 3D texture gloss.',
    iconName: 'Sun',
    features: ['Instant UV curing - zero dry time', 'Raised tactile textured 3D print', 'White ink underlay & spot varnish', 'Direct print on rigid media up to 10cm thick'],
    typicalTurnaround: '24-48 Hours',
    image: brandingImg,
  },
  {
    id: 'packaging-design',
    title: 'Packaging Design & Printing',
    category: 'Branding',
    description: 'Custom rigid gift boxes, luxury perfume boxes, e-commerce mailing boxes, paper bags, and die-cut product packaging.',
    iconName: 'Package',
    popular: true,
    features: ['Structural packaging engineering', 'Magnetic closure rigid boxes', 'Foil stamping & embossing', 'Small batch or mass production'],
    typicalTurnaround: '5-8 Days',
    image: brandingImg,
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
