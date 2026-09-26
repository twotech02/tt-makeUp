import { ServiceItem, Artist, BeforeAfterCase, JournalArticle, FAQItem } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_beauty_model_1790420958119.jpg';
export const BRIDAL_IMAGE = '/src/assets/images/service_bridal_glam_1790420974061.jpg';
export const EDITORIAL_IMAGE = '/src/assets/images/service_editorial_fashion_1790420987600.jpg';
export const GLASS_SKIN_IMAGE = '/src/assets/images/service_glass_skin_ritual_1790421002289.jpg';
export const BEFORE_AFTER_IMAGE = '/src/assets/images/before_after_beauty_1790421013344.jpg';
export const ARTIST_ACTION_IMAGE = '/src/assets/images/artist_in_action_1790421025059.jpg';

export const SIGNATURE_SERVICES: ServiceItem[] = [
  {
    id: 'bridal-couture',
    name: 'The Glass Skin Bridal Ritual',
    category: 'bridal',
    price: 380,
    originalPrice: 450,
    duration: '2.5 hrs',
    image: BRIDAL_IMAGE,
    description: 'Our signature bridal experience combining a 25-minute botanical lymphatic drainage prep with featherweight airbrush foundation, sculpted soft contour, and 18-hour tear-resistant setting.',
    features: [
      '25-min botanical cryo & lymphatic prep massage',
      'Custom color-theorized HD airbrush veil',
      'Individually placed mink-silk cluster lashes',
      'Luxury bridal emergency touch-up kit included',
      '18-hour transfer & humidity proof shield'
    ],
    tones: ['#E6C2A0', '#D4A373', '#A9714B'],
    finish: 'Luminous Satin Velvet',
    recommendedFor: 'Bridal ceremonies, engagement galas, full-day weddings',
    artistId: 'dimas-kurniawan'
  },
  {
    id: 'soft-glam-couture',
    name: 'Sculpted Soft Glamour',
    category: 'glam',
    price: 210,
    originalPrice: 240,
    duration: '1.5 hrs',
    image: ARTIST_ACTION_IMAGE,
    description: 'A softly sculpted, photogenic masterpiece accentuating natural bone structure with warm champagne highlights, diffused velvet smokey shadow, and plush nude lips.',
    features: [
      'Hydro-plump hyaluronic infusion prep',
      'Seamless micro-blended cream contour',
      'Dimensional champagne shimmer eye contour',
      'Custom ombré velvet lip contouring'
    ],
    tones: ['#E8D3C5', '#CCA890', '#7E523A'],
    finish: 'Soft Focus Velvet Radiance',
    recommendedFor: 'Red carpet premieres, luxury galas, anniversary evenings',
    artistId: 'nabila-rahma'
  },
  {
    id: 'editorial-high-def',
    name: 'Couture Editorial & Runway',
    category: 'editorial',
    price: 290,
    originalPrice: 340,
    duration: '2 hrs',
    image: EDITORIAL_IMAGE,
    description: 'High-contrast, avant-garde editorial artistry calibrated specifically for studio flash strobes, 4K digital cinematography, and high-fashion spreads.',
    features: [
      'Flashback-neutralizing optical pigments',
      'Architectural graphic liner or chromatic wash',
      'Skin micro-stippling for hyper-real camera texture',
      'High-impact editorial gloss accent'
    ],
    tones: ['#F3E9DF', '#DFBEA7', '#633B27'],
    finish: 'Architectural High-Definition',
    recommendedFor: 'Fashion shoots, commercial campaigns, video productions',
    artistId: 'fenty-nur-aini'
  },
  {
    id: 'minimalist-glass-skin',
    name: 'Parisian Dewy Glass Skin',
    category: 'skin-ritual',
    price: 175,
    originalPrice: 200,
    duration: '1 hr 15 mins',
    image: GLASS_SKIN_IMAGE,
    description: 'The epitome of effortless French luxury. Barely-there undetectable skin tint, fresh flushed cream cheeks, feathered soap brows, and nourishing berry tinted lip oils.',
    features: [
      'Barrier-repair squalane massage',
      'Breathable water-burst sheer coverage',
      'Feathered micro-brow definition',
      'Peptide-infused glass lip glaze'
    ],
    tones: ['#EFE5D9', '#C6A184', '#905E41'],
    finish: 'Ultra-Dewy Natural Glow',
    recommendedFor: 'Daytime galas, maternity shoots, intimate celebrations',
    artistId: 'nabila-rahma'
  },
  {
    id: 'red-carpet-allure',
    name: 'Midnight Bronze Red Carpet',
    category: 'glam',
    price: 235,
    originalPrice: 270,
    duration: '1.5 hrs',
    image: BEFORE_AFTER_IMAGE,
    description: 'A sultry, bronzed siren aesthetic designed for dramatic evening lighting. Molten gold leaf accents, smudged kohl eyes, and chiseled golden-hour contour.',
    features: [
      'Gold peptide radiance serum infuser',
      'Sweatproof micro-powder baking zone',
      'Waterproof waterline kohl blend',
      'Glass-reflection collarbone glow dusting'
    ],
    tones: ['#DFBF9F', '#B3815D', '#583620'],
    finish: 'Luminescent Golden Glow',
    recommendedFor: 'Evening galas, awards ceremonies, luxury date nights',
    artistId: 'robbi-darwis'
  }
];

export const ARTISTS: Artist[] = [
  {
    id: 'dimas-kurniawan',
    name: 'Dimas Kurniawan',
    role: 'Master Bridal Artistry Lead',
    experience: '12 Years · Paris & Milan Fashion Weeks',
    description: 'Specializes in ethereal, skin-first bridal transformations that honor cultural heritage and withstand emotions from dawn till midnight.',
    specialty: 'Couture Bridal & 18-Hour Wear Formulations',
    signatureLook: 'The Royal Porcelain Glow',
    image: BRIDAL_IMAGE,
    instagram: '@dimas.aesthetica'
  },
  {
    id: 'nabila-rahma',
    name: 'Nabila Rahma',
    role: 'Skin Health & Glass Complexion Specialist',
    experience: '9 Years · Certified Clinical Esthetician',
    description: 'Focuses on the delicate biomechanics of the skin before makeup application, ensuring every client glows from the cellular level outward.',
    specialty: 'Lymphatic Drainage Prep & Dewy Finishes',
    signatureLook: 'Parisian Bare-Skin Radiance',
    image: GLASS_SKIN_IMAGE,
    instagram: '@nabila.skinglow'
  },
  {
    id: 'robbi-darwis',
    name: 'Robbi Darwis',
    role: 'Creative Director & Red Carpet Couturier',
    experience: '14 Years · Celebrity & Film Artistry',
    description: 'Translates high-fashion runway architecture into wearable, breathtaking red carpet appearances tailored to unique bone structures.',
    specialty: 'High-Impact Sculpting & Evening Glamour',
    signatureLook: 'Sultry Siren Smoked Bronze',
    image: ARTIST_ACTION_IMAGE,
    instagram: '@robbi.darwis.atelier'
  },
  {
    id: 'fenty-nur-aini',
    name: 'Fenty Nur Aini',
    role: 'Editorial Color Theorist & Campaign Artist',
    experience: '8 Years · Vogue & Harper’s Bazaar Features',
    description: 'Builds visual narratives through precision color placement, graphic liners, and textures that translate flawlessly under 4K macro lenses.',
    specialty: 'Color Harmony & Optical Pigments',
    signatureLook: 'Chromatic Modernist Eye Art',
    image: EDITORIAL_IMAGE,
    instagram: '@fenty.colortheory'
  },
  {
    id: 'bagus-wicaksono',
    name: 'Bagus Wicaksono',
    role: 'VIP Studio Concierge & Experience Director',
    experience: '10 Years · Luxury Hospitality & Aesthetics',
    description: 'Ensures the salon suite experience is an unhurried, serene sanctuary with custom herbal infusions, acoustic comfort, and seamless scheduling.',
    specialty: 'Private Suite VIP Experience & Travel Logistics',
    signatureLook: 'Bespoke Client Journey',
    image: HERO_IMAGE,
    instagram: '@bagus.atelier'
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-bridal-grace',
    title: 'The Royal Bridal Transformation',
    category: 'Bridal Couture',
    clientType: 'Summer Vineyard Bride',
    beforeImage: GLASS_SKIN_IMAGE,
    afterImage: BRIDAL_IMAGE,
    description: 'Client presented with mild dehydration redness and requested an ethereal, featherlight bridal glow that would resist 85°F outdoor heat and crying without caking.',
    skinConcerns: ['Dehydration redness', 'Uneven tone around eyes', 'Open pores on t-zone'],
    techniquesUsed: [
      'Cold rosewater compress & lymphatic drainage',
      'Airbrushed squalane skin veil',
      'Custom lash mapping (8mm - 12mm mink curls)',
      'Waterproof micro-powder bake under tear ducts'
    ],
    productsFeatured: ['Aesthetica Cryo Glow Elixir', 'Silk Airbrush Fluid', 'Nude Rose Lip Lacquer'],
    artistName: 'Dimas Kurniawan',
    longevity: '18 Hours Flawless Wear'
  },
  {
    id: 'case-glass-skin',
    title: 'Acne-Safe Breathable Glass Skin',
    category: 'Skin Therapy Glam',
    clientType: 'Editorial Model with Hormonal Acne',
    beforeImage: ARTIST_ACTION_IMAGE,
    afterImage: GLASS_SKIN_IMAGE,
    description: 'Zero pore-clogging silicones used. Target micro-concealing left 85% of her natural skin completely unpainted and breathing while eliminating all active redness.',
    skinConcerns: ['Active inflammatory flare-ups', 'Textural bumps', 'Flaking dryness'],
    techniquesUsed: [
      'Centella Asiatica calming compress',
      'Spot color-correction with mineral pigments',
      'Hydro-glow stippling with natural goat hair brush',
      'Non-comedogenic dew mist seal'
    ],
    productsFeatured: ['Centella Relief Veil', 'Clean Mineral Corrector', 'Dew Shield Finishing Mist'],
    artistName: 'Nabila Rahma',
    longevity: '14 Hours Breathable'
  },
  {
    id: 'case-red-carpet',
    title: 'Red Carpet Sculpt & Lift Illusion',
    category: 'Evening Glamour',
    clientType: 'Gala Host & Speaker',
    beforeImage: BEFORE_AFTER_IMAGE,
    afterImage: EDITORIAL_IMAGE,
    description: 'Transforming hooded eyes and flat lighting into a dynamic, lifted, camera-ready presence under heavy stage and flash illumination.',
    skinConcerns: ['Hooded eyelid fold', 'Loss of cheekbone definition under flash', 'T-zone oiliness'],
    techniquesUsed: [
      'Reverse contouring with cool-toned taupe creams',
      'Double wing smoked liner to lift outer eye corner',
      'Optical mica highlighter placed on high zygomatic arch'
    ],
    productsFeatured: ['Sculpting Clay Cream', 'Velvet Kohl Shadow Stick', 'Champagne Mica Glaze'],
    artistName: 'Robbi Darwis',
    longevity: '16 Hours Flashback-Proof'
  }
];

export const COMPARISON_DATA = [
  {
    feature: 'Product Purity & Ingredients',
    aesthetica: '100% Clean, Hypoallergenic & Cruelty-Free',
    conventional: 'Synthetic fillers, silicones & heavy pore-clogging waxes'
  },
  {
    feature: 'Skin Preparation Protocol',
    aesthetica: '20-min botanical cryo & lymphatic prep massage',
    conventional: 'Rushed 1-minute standard primer wipe'
  },
  {
    feature: 'Longevity & Durability',
    aesthetica: '18-hour sweat, tear & humidity-resistant shield',
    conventional: 'Breaks down in 4–6 hours; requires constant powder cake'
  },
  {
    feature: 'Application Technology',
    aesthetica: 'Custom shade color-theorized airbrush micro-veil',
    conventional: 'Heavy single-bottle foundation poured and smeared'
  },
  {
    feature: 'Flash & High-Def Camera Suitability',
    aesthetica: 'Zero flashback, true-tone under 4K camera & flash',
    conventional: 'Chalky white cast and flashback reflection in photos'
  },
  {
    feature: 'Studio Environment & Attention',
    aesthetica: 'Private VIP suite with 1-on-1 dedicated master artist',
    conventional: 'Crowded multi-chair noisy salon with rushed artists'
  },
  {
    feature: 'Emergency Care & Touch-Up Kit',
    aesthetica: 'Complimentary luxury vial, blotting sheets & lip lacquer',
    conventional: 'No touch-up materials provided; left on your own'
  },
  {
    feature: 'Custom Lash & Eye Architecture',
    aesthetica: 'Hand-tailored cluster mapping tailored to eye anatomy',
    conventional: 'One-size-fits-all stiff strip lashes that lift at the corners'
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-01',
    title: 'The Rise of High-Definition Glass Skin & Clean Artistry',
    date: '24 September 2026',
    readTime: '6 min read',
    category: 'Beauty Philosophy',
    excerpt: 'How modern dermatology and weightless micro-pigments have rendered heavy cake foundations obsolete in luxury bridal and editorial makeup.',
    image: HERO_IMAGE,
    featured: true,
    content: [
      'For decades, traditional beauty parlors operated under the illusion that more layers equated to longer wear. Brides and models were subjected to thick silicone primers, full-coverage matte creams, and heavy talc powders that left the skin looking mask-like and chalky under natural daylight.',
      'At Aesthetica Atelier, we pioneer skin-first alchemy: preparing the skin with botanical lymphatic drainage and cryo tools to de-puff and saturate the epidermis with hydration. When the skin is supple and plumped, it requires 70% less pigment.',
      'Our custom airbrush formulations bond with the skin’s natural lipid barrier rather than suffocating it. The outcome is the coveted glass-skin finish: luminous, breathable, and completely imperceptible under 4K cameras and sunlight.'
    ]
  },
  {
    id: 'art-02',
    title: 'Why Botanical Skin Prep Matters More Than Your Foundation',
    date: '18 September 2026',
    readTime: '4 min read',
    category: 'Skincare Prep',
    excerpt: 'Understanding the cellular barrier impact behind long-wear makeup and why our artists spend 25 minutes on skin massage before picking up a brush.',
    image: GLASS_SKIN_IMAGE,
    content: [
      'The difference between makeup that cracks after three hours and makeup that stays luminous through midnight tears is not the brand of powder—it is the hydration gradient of the stratum corneum.',
      'When your skin is dehydrated, it acts like a sponge, pulling water out of your foundation and leaving behind dry pigment clumps. By infusing the skin with plant-derived squalane and multi-weight hyaluronic acid via gentle rhythmic effleurage, we create a supple cushion.',
      'This foundation-ready canvas enables foundation to glide seamlessly, creating a reflective, seamless veil that moves organically with your facial expressions.'
    ]
  },
  {
    id: 'art-03',
    title: 'From Bare Canvas to Midnight Elegance: The Science of Longevity',
    date: '10 September 2026',
    readTime: '5 min read',
    category: 'Bridal Guide',
    excerpt: 'A comprehensive timeline guide on how to prepare your complexion in the 3 months leading up to your wedding day for flawless photo results.',
    image: BRIDAL_IMAGE,
    content: [
      'A radiant wedding day appearance is a symphony between deliberate at-home skin habits and professional day-of artistry.',
      'Three months before: eliminate aggressive physical scrubs and focus on barrier preservation with ceramides and niacinamide. Schedule your bridal trial in identical lighting to your ceremony.',
      'One week before: refrain from new active treatments or harsh chemical peels. Drink adequate electrolytes and schedule your gentle lymphatic treatment. On your wedding morning, relax in our private suite while our master artists orchestrate your glow.'
    ]
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How far in advance should I book my bridal trial and wedding day?',
    answer: 'We recommend securing your wedding date 6 to 12 months in advance, especially for peak wedding seasons (May through October). Bridal trials are typically conducted 8 to 12 weeks before your wedding date in our private daylight studio.',
    category: 'Bridal'
  },
  {
    id: 'faq-2',
    question: 'What formulations do you use for sensitive, rosacea, or acne-prone skin?',
    answer: 'We exclusively work with dermatologist-approved, non-comedogenic, and fragrance-free formulations. Our artists are trained in color theory spot correction, which neutralizes redness without clogging pores or triggering inflammation.',
    category: 'Skin Health'
  },
  {
    id: 'faq-3',
    question: 'Do your artists travel on-location for destination weddings or events?',
    answer: 'Yes, our Master Artists travel globally. We regularly travel throughout North America, Europe, and the Caribbean. Travel packages include complete mobile vanity daylight systems, travel kits, and touch-up services throughout your event.',
    category: 'Travel & Logistics'
  },
  {
    id: 'faq-4',
    question: 'How long does a bridal or special occasion makeup appointment take?',
    answer: 'A signature bridal transformation takes approximately 2 to 2.5 hours, including our 25-minute botanical skin prep, lash mapping, and veil placement. Event and gala makeup appointments require 75 to 90 minutes.',
    category: 'Appointments'
  },
  {
    id: 'faq-5',
    question: 'How should I prepare my skin on the morning of my appointment?',
    answer: 'Arrive with a freshly cleansed face, free of makeup or sunscreen (which can cause flash flashback). Wear a button-down or loose-collar shirt. We will perform full skin cleansing, toning, hydration, and eye de-puffing in the studio.',
    category: 'Preparation'
  },
  {
    id: 'faq-6',
    question: 'What is included in the complimentary bridal emergency touch-up kit?',
    answer: 'Every bridal package includes a personalized touch-up kit containing a vial of your custom-blended lip lacquer, precision lip applicator, anti-shine botanical blotting papers, waterproof adhesive touch-up, and setting mist.',
    category: 'Bridal'
  },
  {
    id: 'faq-7',
    question: 'Can you accommodate bridal parties, bridesmaids, and mothers of the bride?',
    answer: 'Yes! Our senior artist team can accommodate bridal parties of up to 12 members. We coordinate a seamless timeline so everyone is completed with ample time for photography and dressing.',
    category: 'Bridal Parties'
  },
  {
    id: 'faq-8',
    question: 'What is your rescheduling and cancellation policy?',
    answer: 'General event appointments may be rescheduled up to 48 hours in advance without penalty. For bespoke bridal bookings, retainers are transferable to alternative available dates with 30 days notice.',
    category: 'Policies'
  }
];

export const TRUST_STATS = [
  { value: '4.9/5', label: 'Trustpilot & Google Rating' },
  { value: '2,500+', label: 'Brides & Clients Transformed' },
  { value: '100%', label: 'Clean, Cruelty-Free Formulas' },
  { value: '18-Hr', label: 'Tear & Sweat-Proof Guarantee' }
];
