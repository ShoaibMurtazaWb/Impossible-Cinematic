export type NavItem = { label: string; href: string };
export type CTA = { label: string; href: string; variant?: "primary" | "secondary" };

export type VideoItem = {
  title: string;
  meta: string;
  image: string;
  videoUrl: string;
  format?: "landscape" | "portrait";
};

export type SocialLinkType = "linkedin" | "twitter" | "instagram" | "facebook" | "website" | "email";
export type SocialLinks = Partial<Record<SocialLinkType, string>>;

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  imagePosition?: string;
  links?: SocialLinks;
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
  logoScale?: number;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type PressKitDocument = {
  id: string;
  label: string;
  title: string;
  description?: string;
  pdfUrl: string;
};

export const assets = {
  brand: {
    logo: "/brand/logo.png",
    og: "/brand/og.png",
  },
  videos: {
    heroTrailer: "/videos/hero-trailer.mp4",
    featuredPost02: "/videos/featured-post-02.mp4",
    featuredPost03: "/videos/featured-post-03.mp4",
    featuredPost04: "/videos/featured-post-04.mp4",
    featuredPost05: "/videos/featured-post-05.mp4",
  },
  images: {
    heroPoster: "/images/hero-poster.jpeg",
    partners: {
      amgMiami: "/images/partners/amg_logo.png",
      gtgymHq: "/images/partners/gtgym_logo.png",
      tricoastInternational: "/images/partners/tricoast-international.png",
      trinityBoxingNewYork: "/images/partners/trinity-boxing-new-york.png",
    },
    tricoast: {
      sectionImage: "/images/tricoast/section-image.jpeg",
      loiStatement: "/images/tricoast/loi-statement.jpg",
    },
    story: {
      image1: "/images/story/image1.jpg",
      image2: "/images/story/image2.png",
      image3: "/images/story/image3.png",
      image4: "/images/story/image4.jpg",
      image5: "/images/story/image5.jpg",
      image6: "/images/story/image6.jpg",
      image7: "/images/story/image7.jpg",
      image8: "/images/story/image8.png",
      image9: "/images/story/image9.jpg",
      image10: "/images/story/image10.jpg",
    },
    featured: {
      trailerThumbnail: "/images/featured/trailer-thumbnail.jpeg",
      post02Thumbnail: "/images/featured/post-02-thumbnail.jpeg",
      post03Thumbnail: "/images/featured/post-03-thumbnail.jpeg",
      post04Thumbnail: "/images/featured/post-04-thumbnail.jpeg",
      post05Thumbnail: "/images/featured/post-05-thumbnail.jpeg",
    },
    sections: {
      quoteBackground: "/images/sections/quote-background.jpeg",
      resultsBackground: "/images/sections/results-background.jpeg",
      finalCtaBackground: "/images/sections/final-cta-background.jpeg",
    },
    team: {
      riccoRodriguez: "/images/team/ricco-rodriguez.png",
      colinDingelstad: "/images/team/colin-dingelstad.png",
      mattCohen: "/images/team/matt-cohen.jpeg",
      viAngeliLanot: "/images/team/vi-angeli-lanot.png",
      simonRubenstein: "/images/team/simon-rubenstein.png",
      martinSnow: "/images/team/martin-snow.png",
      zohaibMurtaza: "/images/team/zohaib-murtaza.jpeg",
    },
  },
} as const;

/** Featured Visionaries shown on the homepage (6 only). */
const homepageTeam: TeamMember[] = [
  {
    name: "Ricco Rodriguez",
    role: "Trainer",
    bio: "Former UFC Heavyweight Champion — bringing championship credibility, partnerships, and production firepower to IMPOSSIBLE.",
    image: assets.images.team.riccoRodriguez,
    imagePosition: "center 15%",
  },
  {
    name: "Colin Dingelstad",
    role: "Originator & Athlete",
    bio: "Originator and athlete behind the documentary, taking on an unprecedented journey to answer if an ordinary person can become champion through total dedication, smart work, and world-class coaching.",
    image: assets.images.team.colinDingelstad,
    imagePosition: "center 20%",
  },
  {
    name: "Matt Cohen",
    role: "Director",
    bio: "Award-winning Hollywood producer and director with decades of experience developing and producing feature films, documentaries, and television.",
    image: assets.images.team.mattCohen,
    imagePosition: "center top",
  },
  {
    name: "Vi Angeli Lanot & team",
    role: "Editorial & Narrative Director",
    bio: "Vi and her team have decades of experience editing for some of the biggest social media and streaming brands in the world.",
    image: assets.images.team.viAngeliLanot,
    imagePosition: "center 12%",
  },
  {
    name: "Simon Rubenstein",
    role: "Lead Cinematographer | Co-producer",
    bio: "Award-winning producer, director, and cinematographer, and founder of Brooklyn Pictures Entertainment, with collaborations spanning Netflix, HBO, Disney, Marvel, Apple TV+, Sony, Lionsgate, Universal, and PBS.",
    image: assets.images.team.simonRubenstein,
    imagePosition: "center 18%",
  },
  {
    name: "Martin Snow",
    role: "Boxing Coach & Founder of Trinity Boxing Club",
    bio: "Former heavyweight Golden Gloves champion and founder of Trinity Boxing Club, Martin brings decades of elite boxing experience and mentorship. A recognized boxing personality featured across major media productions.",
    image: assets.images.team.martinSnow,
    imagePosition: "center 15%",
  },
  {
    name: "Zohaib Murtaza",
    role: "Website Developer",
    bio: "Website developer and designer for IMPOSSIBLE. A full stack developer with a passion for creating beautiful and functional websites.",
    image: assets.images.team.zohaibMurtaza,
    imagePosition: "center 15%",
    links: {
      website: "https://zohaibmurtaza.com",
      linkedin: "https://www.linkedin.com/in/zohaib-m/",
      email: "me@zohaibmurtaza.com",
    }
  },
];

/** Extra members listed only on /team — add new people here. */
const additionalTeamMembers: TeamMember[] = [];

export const siteContent = {
  brand: {
    name: "IMPOSSIBLE",
    tagline: "Hidden in plain sight. I'm possible.",
    logo: assets.brand.logo,
  },
  nav: [
    { label: "Partners", href: "/#partners" },
    { label: "Story", href: "/#story" },
    { label: "Results", href: "/#results" },
    { label: "Team", href: "/team" },
    { label: "Press Kit", href: "/press-kit" },
    { label: "Sponsorship Deck", href: "/press-kit?tab=sponsorship-deck" },
  ] satisfies NavItem[],
  hero: {
    lines: [
      "Most documentary series tell you what happened. This one is happening right now.",
      "Follow and partner with Colin's pursuit of becoming an MMA champion.",
    ],
    video: assets.videos.heroTrailer,
    poster: assets.images.heroPoster,
    ctas: [
      { label: "Watch Trailer", href: "#featured", variant: "primary" },
      { label: "Become a Partner", href: "#sponsorship", variant: "secondary" },
    ] satisfies CTA[],
  },
  partners: [
    { name: "AMG Miami", logo: assets.images.partners.amgMiami },
    { name: "Tricoast International", logo: assets.images.partners.tricoastInternational },
    { name: "Gtgym_hq", logo: assets.images.partners.gtgymHq, logoScale: 1.2 },
    { name: "Trinity Boxing New York", logo: assets.images.partners.trinityBoxingNewYork },
  ] satisfies Partner[],
  tricoast: {
    title: "Tricoast International - LOI",
    body: "Backed by a formal Letter of Intent, Tricoast International recognizes the groundbreaking potential of IMPOSSIBLE. Their belief in this project validates our commitment to capturing raw, unfiltered truth through the lens of uncompromising cinematic quality.",
    image: assets.images.tricoast.sectionImage,
    loiStatement: assets.images.tricoast.loiStatement,
  },
  story: {
    title: "The Story",
    subtitle: "A journey unfolding in real time - told one frame at a time",
    slides: [
      { image: assets.images.story.image1, caption: "THE STORY BEGINS" },
      {
        image: assets.images.story.image2,
        caption: "28 years old.\nAnd I'm going to become an MMA champion.",
      },
      {
        image: assets.images.story.image3,
        caption:
          "Some say it's too late.\nI'd rather find out than spend my life wondering.",
      },
      {
        image: assets.images.story.image4,
        caption:
          "Looking back, I've trained many sports and built businesses.\nBut one pattern kept showing up.",
      },
      {
        image: assets.images.story.image5,
        caption:
          "I kept moving on before discovering my limit.\nNo belt. No mastery. No full commitment.",
      },
      {
        image: assets.images.story.image6,
        caption:
          "For the first time, I'm putting everything into one thing.\nAnd staying with it.",
      },
      {
        image: assets.images.story.image7,
        caption:
          "This isn't just about becoming champion.\nIt's about a question I've carried for years…",
      },
      {
        image: assets.images.story.image8,
        caption: "What becomes possible when you stop starting over?",
      },
      {
        image: assets.images.story.image9,
        caption:
          "I have no idea what will happen.\nBut I'll never wonder if I gave everything I had.",
      },
      {
        image: assets.images.story.image10,
        caption:
          "If this journey gives my son courage for whatever life brings…\nThen I've already won.",
      },
    ] satisfies StorySlide[],
  },
  featured: [
    {
      title: "IMPOSSIBLE Trailer",
      meta: "Social media · Official trailer",
      image: assets.images.featured.trailerThumbnail,
      videoUrl: assets.videos.heroTrailer,
    },
    {
      title: "Jiu Jitsu World Champions",
      meta: "Social media · Early cut",
      image: assets.images.featured.post02Thumbnail,
      videoUrl: assets.videos.featuredPost02,
      format: "portrait",
    },
    {
      title: "Training with former world champion UFC",
      meta: "Social media · Early cut",
      image: assets.images.featured.post03Thumbnail,
      videoUrl: assets.videos.featuredPost03,
      format: "portrait",
    },
    {
      title: "Training with heavyweight boxing champion",
      meta: "Social media · Early cut",
      image: assets.images.featured.post04Thumbnail,
      videoUrl: assets.videos.featuredPost04,
      format: "portrait",
    },
    {
      title: "Training with 5x golden gloves champions",
      meta: "Social media · Early cut",
      image: assets.images.featured.post05Thumbnail,
      videoUrl: assets.videos.featuredPost05,
      format: "portrait",
    },
  ] satisfies VideoItem[],
  quote: {
    text: "Everything is shot on Netflix-approved camera equipment to ensure this project and our partners receive the highest quality content possible while protecting the reputation of everyone involved.",
    background: assets.images.sections.quoteBackground,
  },
  results: {
    title: "Current Results",
    subtitle: "In our first 3 weeks of posting, we had to start from almost zero.",
    background: assets.images.sections.resultsBackground,
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
  team: homepageTeam,
  teamPage: {
    title: "The Visionaries",
    subtitle: "Award-winning talent dedicated to crafting an unprecedented narrative experience.",
    members: [...homepageTeam, ...additionalTeamMembers],
  },
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
    background: assets.images.sections.finalCtaBackground,
  },
  pressKit: {
    title: "Press Kit",
    subtitle: "Media resources and sponsorship materials for IMPOSSIBLE.",
    documents: [
      {
        id: "media-kit",
        label: "Media Kit",
        title: "IMPOSSIBLE Documentary Media Kit",
        description: "Project overview, team bios, and press-ready information.",
        pdfUrl: "/press-kit/IM_POSSIBLE_Documentary_Media_Kit.pdf",
      },
      {
        id: "sponsorship-deck",
        label: "Sponsorship Deck",
        title: "IMPOSSIBLE Sponsorship Deck",
        description: "Partnership opportunities, audience reach, and sponsorship tiers.",
        pdfUrl: "/press-kit/IM_POSSIBLE_Sponsorship_Deck_Master.pdf",
      },
    ] satisfies PressKitDocument[],
  },
  footerLinks: [
    { label: "Team", href: "/team" },
    { label: "Press Kit", href: "/press-kit" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Contact", href: "mailto:colin.dingelstad@gmail.com?subject=IMPOSSIBLE%20Contact" },
  ] satisfies FooterLink[],
  social: {
    instagram: "https://www.instagram.com/colin.dingelstad/",
  } satisfies SocialLinks,
};
