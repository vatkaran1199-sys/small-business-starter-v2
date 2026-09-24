/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE DATA — the single file every template user edits
 * ─────────────────────────────────────────────────────────────────────────────
 * Business name, contact info, services, reviews, team, hours, and navigation
 * all live here. Components and pages import from this file so you never need
 * to hunt through markup to update your business details.
 *
 * IMPORTANT: also update the `site` field in astro.config.mjs to match your
 * production domain.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const siteData = {
  // ── Business identity ────────────────────────────────────────────────────
  name: 'HAPE SEO Agency',
  tagline: 'Professional service you can trust.',
  description:
    'Elevate your online presence with HAPE SEO Agency's professional SEO services. Drive traffic, enhance visibility, and achieve your business goals today.',
  url: 'https://example.com',
  locale: 'en_US',

  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  license: 'Lic# 123456',

  // ── Contact ──────────────────────────────────────────────────────────────
  email: 'hello@example.com',
  phoneForTel: '555-867-5309',
  phoneFormatted: '(555) 867-5309',
  address: {
    lineOne: '123 Main Street',
    lineTwo: 'Suite 100',
    city: 'Denver',
    state: 'CO',
    zip: '80206',
    country: 'US',
    mapLink: 'https://maps.app.goo.gl/ZGXLhT7pmPaKWiJ48',
  },
  hours: [
    { days: 'Monday - Friday', time: '9:00 AM - 9:00 PM' },
    { days: 'Saturday', time: '9:00 AM - 2:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ],
  emergencyService: '24/7 Emergency Service Available',

  // ── Social media (set to empty string to hide a link) ────────────────────
  socials: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    google: 'https://www.google.com/maps',
  },

  // ── Navigation (add, remove, or reorder as needed) ───────────────────────
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],

  // ── Services ─────────────────────────────────────────────────────────────
  services: [
    {
      title: 'SEO',
      description:
        'Enhance your website's visibility with expert SEO strategies. Discover effective techniques to boost rankings and drive organic traffic today.},
    {
      title: 'Digital Marketing',
      description:
        'Discover effective digital marketing strategies to elevate your brand. Learn about SEO, social media, and content marketing to drive engagement and growth.',
    },
    {
      title: 'WEB Development',
      description:
        'Discover expert web development services that elevate your online presence. From design to deployment, we create tailored solutions for your business needs.},
    {
      title: 'Remodeling',
      description:
        'Kitchen and bathroom remodels, basement finishing, and whole-home renovations. We manage the project from design through final walkthrough so you can enjoy the transformation.',
    },
    {
      title: 'Emergency Service',
      description:
        "Burst pipes, electrical outages, and other urgent problems don't wait — and neither do we. Our emergency line is staffed 24/7 for rapid response when you need it most.",
    },
    {
      title: 'Maintenance Plans',
      description:
        'Regular preventive maintenance keeps your systems running efficiently and extends their lifespan. Ask about our seasonal service packages for year-round peace of mind.',
    },
  ],

  // ── Reviews ──────────────────────────────────────────────────────────────
  reviews: [
    { quote: "They showed up on time, explained everything clearly, and finished the job faster than expected. Best service experience we've had.", name: 'Sarah M.', location: 'Denver, CO', rating: 5 },
    { quote: "Honest pricing and top-notch work. I've used them for three different projects now and they never disappoint.", name: 'James R.', location: 'Aurora, CO', rating: 5 },
    { quote: 'Our emergency call was answered in minutes. They had the problem fixed before dinner. Truly dependable.', name: 'Linda K.', location: 'Lakewood, CO', rating: 5 },
    { quote: 'The remodel turned out even better than we imagined. Professional, clean, and on budget. We couldn\'t be happier.', name: 'Tom & Beth P.', location: 'Boulder, CO', rating: 5 },
    { quote: 'Great communication from start to finish. They sent photos of the progress and cleaned up perfectly when done.', name: 'Anita W.', location: 'Littleton, CO', rating: 5 },
    { quote: "I appreciate the upfront pricing — no hidden fees or surprise charges. That's rare these days. Highly recommend.", name: 'Marcus D.', location: 'Arvada, CO', rating: 5 },
  ],

  // ── About page ───────────────────────────────────────────────────────────
  about: {
    story: [
      'What started as a one-person operation has grown into a trusted local team. For over 15 years, we\'ve served homeowners and businesses with reliable, high-quality work — and we plan to keep doing just that for decades to come.',
      'Every member of our crew is licensed, insured, and background-checked. We treat your property with the same care we\'d give our own, and we stand behind every job with a satisfaction guarantee.',
    ],
    team: [
      { name: 'John Smith', role: 'Founder & Lead Technician', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
      { name: 'Maria Garcia', role: 'Operations Manager', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
      { name: 'David Chen', role: 'Senior Technician', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
    ],
  },

  // ── Trust bar items (homepage strip) ─────────────────────────────────────
  trustItems: [
    { label: 'Licensed' },
    { label: 'Fully Insured' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Jobs Completed', value: '2,500+' },
  ],

  // ── Footer nav columns ──────────────────────────────────────────────────
  footerNav: [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Reviews', href: '/reviews' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
      ],
    },
  ],
} as const;

export type SiteData = typeof siteData;
