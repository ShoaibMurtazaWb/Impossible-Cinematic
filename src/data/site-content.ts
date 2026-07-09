export type NavItem = { label: string; href: string };
export type CTA = { label: string; href: string; variant?: "primary" | "secondary" };

export type VideoItem = {
  title: string;
  meta: string;
  image: string;
  videoUrl: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type SponsorBenefit = {
  title: string;
  description: string;
  icon: "globe" | "diamond" | "film" | "megaphone";
};

export type ResultStat = {
  value: string;
  label: string;
  detail: string;
};

export type StorySlide = {
  image: string;
  caption: string;
};

const trailerVideo = "/videos/WhatsApp Video 2026-07-04 at 21.07.42.mp4";
const img = (name: string) => `/images/${name}`;

export const siteContent = {
  brand: {
    name: "IMPOSSIBLE",
    tagline: "Redefining reality through the lens.",
    logo: "/impossible-logo.png",
  },
  nav: [
    { label: "Partners", href: "#partners" },
    { label: "Story", href: "#story" },
    { label: "Featured", href: "#featured" },
    { label: "Results", href: "#results" },
    { label: "Team", href: "#team" },
    { label: "Sponsorship", href: "#sponsorship" },
  ] satisfies NavItem[],
  hero: {
    lines: [
      "Most documentary series tell you what happened. This one is happening right now.",
      "Follow and partner with Colin's pursuit of becoming an MMA champion.",
    ],
    video: trailerVideo,
    poster: img("WhatsApp Image 2026-07-04 at 22.09.32.jpeg"),
    ctas: [
      { label: "Watch Trailer", href: "#featured", variant: "primary" },
      { label: "Become a Partner", href: "#sponsorship", variant: "secondary" },
    ] satisfies CTA[],
  },
  partners: ["A24", "NEON", "APPLE TV+", "HBO"],
  tricoast: {
    title: "Tricaost Internation - LOI",
    body: "Backed by a formal Letter of Intent, Tricoast International recognizes the groundbreaking potential of IMPOSSIBLE. Their belief in this project validates our commitment to capturing raw, unfiltered truth through the lens of uncompromising cinematic quality.",
    image: "/tricoast_logo.jpeg",
  },
  story: {
    title: "The Story",
    subtitle: "Our highest-viewed post — told one frame at a time.",
    slides: [
      {
        image: img("WhatsApp Image 2026-07-04 at 22.10.05 (3).jpeg"),
        caption: "The chase begins.",
      },
      {
        image: img("1.jpg"),
        caption: "The journey starts here.",
      },
      {
        image: img("2.jpg"),
        caption: "Every session counts.",
      },
      {
        image: img("3.jpg"),
        caption: "Built in the gym.",
      },
      {
        image: img("4.jpg"),
        caption: "Pressure creates progress.",
      },
      {
        image: img("5.jpg"),
        caption: "Eyes on the prize.",
      },
      {
        image: img("6.jpg"),
        caption: "The grind never stops.",
      },
      {
        image: img("7.jpg"),
        caption: "This story is still unfolding.",
      },
    ] satisfies StorySlide[],
  },
  featured: [
    {
      title: "Instagram Post 01",
      meta: "Featured · Social cut",
      image: img("WhatsApp Image 2026-07-04 at 22.09.54 (1).jpeg"),
      videoUrl: trailerVideo,
    },
    {
      title: "Instagram Post 02",
      meta: "Featured · Training",
      image: img("WhatsApp Image 2026-07-04 at 22.09.55 (1).jpeg"),
      videoUrl: trailerVideo,
    },
    {
      title: "Instagram Post 03",
      meta: "Featured · Mentality",
      image: img("WhatsApp Image 2026-07-04 at 22.09.47.jpeg"),
      videoUrl: trailerVideo,
    },
  ] satisfies VideoItem[],
  quote: {
    text: "Everything is shot on Netflix-approved camera equipment to ensure this project and our partners receive the highest quality content possible while protecting the reputation of everyone involved.",
    background: img("WhatsApp Image 2026-07-04 at 22.09.34.jpeg"),
  },
  results: {
    title: "Current Results",
    subtitle: "In our first 3 weeks of posting, we had to start from almost zero.",
    background: img("WhatsApp Image 2026-07-04 at 22.09.35.jpeg"),
    stats: [
      {
        value: "108K",
        label: "Views",
        detail: "First 3 weeks of posting from a dormant account.",
      },
      {
        value: "50/50",
        label: "Audience balance",
        detail: "Top-class reach with a balanced ratio between men and women.",
      },
      {
        value: "USA",
        label: "Core market",
        detail: "Premium USA audience — especially New York and Los Angeles.",
      },
      {
        value: "65.9%",
        label: "Ages 25–44",
        detail: "Our strongest audience segment sits in the prime 25–44 range.",
      },
    ] satisfies ResultStat[],
  },
  team: [
    {
      name: "Ricco Rodriguez",
      role: "Producer",
      bio: "Former UFC Heavyweight Champion — bringing championship credibility, partnerships, and production firepower to IMPOSSIBLE.",
      image: img("WhatsApp Image 2026-07-04 at 22.09.36.jpeg"),
    },
    {
      name: "Colin Dingelstad",
      role: "Director / Subject",
      bio: "At the center of the story — pursuing an MMA championship while documenting the climb in real time.",
      image: img("WhatsApp Image 2026-07-04 at 22.09.37.jpeg"),
    },
    {
      name: "Matt Cohen",
      role: "Cinematography",
      bio: "Shapes the visual language with cinematic discipline built for platforms that demand broadcast quality.",
      image: img("WhatsApp Image 2026-07-04 at 22.09.38.jpeg"),
    },
    {
      name: "Simon Rubensteijn",
      role: "Production",
      bio: "Keeps complex shoots moving with precision so every scene lands on time and on brand.",
      image: img("WhatsApp Image 2026-07-04 at 22.09.39.jpeg"),
    },
    {
      name: "Bobby",
      role: "Creative Lead",
      bio: "Owns the creative spine — from story beats to brand presence across film and social.",
      image: img("WhatsApp Image 2026-07-04 at 22.09.40.jpeg"),
    },
    {
      name: "Martin Snow",
      role: "Owner, Trinity Boxing Gym",
      bio: "Owner of Trinity Boxing Gym — featured across major fight content and a key figure guiding the real training world behind this story.",
      image: img("WhatsApp Image 2026-07-04 at 22.09.41.jpeg"),
    },
  ] satisfies TeamMember[],
  partner: {
    title: "More Than a Sponsor.",
    intro: "Every great story has people who believed in it before anyone else.",
    body: [
      "We're looking for brands that want to support an ambitious documentary series while becoming part of the story people will remember.",
      "This isn't traditional advertising. It's an opportunity to support an ambitious documentary while aligning your brand with resilience, seemingly impossible ambition, and the peak of human potential.",
    ],
    cta: "Become a Partner",
    benefits: [
      {
        title: "Cinematic Branding",
        description:
          "Organic product placement that feels authentic with tens of millions watching every month.",
        icon: "diamond",
      },
      {
        title: "Global Reach",
        description:
          "Premium storytelling across the biggest streaming platforms, social media, and film.",
        icon: "globe",
      },
      {
        title: "Executive Producer Credit",
        description: "Recognition across film credits and IMDb.",
        icon: "film",
      },
      {
        title: "The Journey",
        description:
          "Ongoing social media, documentaries, and behind-the-scenes storytelling. Follow the story from day one to the final fight.",
        icon: "megaphone",
      },
    ] satisfies SponsorBenefit[],
  },
  finalCta: {
    title: "The Journey Begins Here.",
    cta: "Become a Partner",
    background: img("WhatsApp Image 2026-07-04 at 22.09.42.jpeg"),
  },
  footerLinks: ["Press Kit", "Privacy Policy", "Terms of Service", "Contact"],
};
