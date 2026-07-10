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
  imagePosition?: string;
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

export type Partner = {
  name: string;
  logo?: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

const trailerVideo = "/videos/WhatsApp Video 2026-07-04 at 21.07.42.mp4";
const img = (name: string) => `/images/${name}`;
const storyImg = (name: string) => `/images/story-images/${name}`;
const featuredVideo = (file: string) => `/videos/featured/${file}`;
const teamImg = (name: string) => `/images/team/${name}`;

export const siteContent = {
  brand: {
    name: "IMPOSSIBLE",
    tagline: "Hidden in plain sight. I'm possible.",
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
  partners: [
    { name: "AMG Miami" },
    { name: "Tricoast International", logo: "/tricoast_logo.png" },
    { name: "Gtgym_hq" },
    { name: "Trinity Boxing New York", logo: "/images/partners/trinity-boxing-new-york.png" },
  ] satisfies Partner[],
  tricoast: {
    title: "Tricoast International - LOI",
    body: "Backed by a formal Letter of Intent, Tricoast International recognizes the groundbreaking potential of IMPOSSIBLE. Their belief in this project validates our commitment to capturing raw, unfiltered truth through the lens of uncompromising cinematic quality.",
    image: "/tricoast_logo.jpeg",
  },
  story: {
    title: "The Story",
    subtitle: "Our highest-viewed post — told one frame at a time.",
    slides: [
      {
        image: img("WhatsApp Image 2026-07-04 at 22.10.05 (3).jpeg"),
        caption: "The story begins.",
      },
      {
        image: storyImg("1.png"),
        caption: "The journey starts here.",
      },
      {
        image: storyImg("2.png"),
        caption: "Every session counts.",
      },
      {
        image: storyImg("3.png"),
        caption: "Built in the gym.",
      },
      {
        image: storyImg("4.png"),
        caption: "Pressure creates progress.",
      },
      {
        image: storyImg("5.png"),
        caption: "Eyes on the prize.",
      },
      {
        image: storyImg("6.png"),
        caption: "The grind never stops.",
      },
      {
        image: storyImg("7.png"),
        caption: "This story is still unfolding.",
      },
    ] satisfies StorySlide[],
  },
  featured: [
    {
      title: "IMPOSSIBLE Trailer",
      meta: "Featured · Official trailer",
      image: img("WhatsApp Image 2026-07-04 at 22.09.54 (1).jpeg"),
      videoUrl: trailerVideo,
    },
    {
      title: "Instagram Post 02",
      meta: "Featured · Training",
      image: img("WhatsApp Image 2026-07-04 at 22.09.55 (1).jpeg"),
      videoUrl: featuredVideo("post-02.mp4"),
    },
    {
      title: "Instagram Post 03",
      meta: "Featured · Mentality",
      image: img("WhatsApp Image 2026-07-04 at 22.09.47.jpeg"),
      videoUrl: featuredVideo("post-03.mp4"),
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
      role: "Trainer",
      bio: "Former UFC Heavyweight Champion — bringing championship credibility, partnerships, and production firepower to IMPOSSIBLE.",
      image: teamImg("ricco-rodriguez.png"),
      imagePosition: "center 15%",
    },
    {
      name: "Colin Dingelstad",
      role: "Originator & Athlete",
      bio: "Originator and athlete behind the documentary, taking on an unprecedented journey to answer if an ordinary person can become champion through total dedication, smart work, and world-class coaching.",
      image: teamImg("colin-dingelstad.png"),
      imagePosition: "center 20%",
    },
    {
      name: "Matt Cohen",
      role: "Director",
      bio: "Award-winning Hollywood producer and director with decades of experience developing and producing feature films, documentaries, and television.",
      image: img("WhatsApp Image 2026-07-04 at 22.09.38.jpeg"),
      imagePosition: "center top",
    },
    {
      name: "Vi Angeli Lanot & team",
      role: "Editorial & Narrative Director",
      bio: "Vi and her team have decades of experience editing for some of the biggest social media and streaming brands in the world.",
      image: teamImg("vi-angeli-lanot.jpg"),
      imagePosition: "center top",
    },
    {
      name: "Simon Rubenstein",
      role: "Lead Cinematographer | Co-producer",
      bio: "Award-winning producer, director, and cinematographer, and founder of Brooklyn Pictures Entertainment, with collaborations spanning Netflix, HBO, Disney, Marvel, Apple TV+, Sony, Lionsgate, Universal, and PBS.",
      image: teamImg("simon-rubenstein.jpg"),
      imagePosition: "center top",
    },
    {
      name: "Martin Snow",
      role: "Boxing Coach & Founder of Trinity Boxing Club",
      bio: "Former heavyweight Golden Gloves champion and founder of Trinity Boxing Club, Martin brings decades of elite boxing experience and mentorship. A recognized boxing personality featured across major media productions.",
      image: teamImg("martin-snow.png"),
      imagePosition: "center 15%",
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
  footerLinks: [
    { label: "Press Kit", href: "#" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Contact", href: "mailto:colin.dingelstad@gmail.com?subject=IMPOSSIBLE%20Contact" },
  ] satisfies FooterLink[],
};
