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

export const assets = {
  brand: {
    logo: "/brand/logo.png",
    og: "/brand/og.png",
  },
  videos: {
    heroTrailer: "/videos/hero-trailer.mp4",
    featuredPost02: "/videos/featured-post-02.mp4",
    featuredPost03: "/videos/featured-post-03.mp4",
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
      slide01Intro: "/images/story/slide-01-intro.jpeg",
      slide02: "/images/story/slide-02.png",
      slide03: "/images/story/slide-03.png",
      slide04: "/images/story/slide-04.png",
      slide05: "/images/story/slide-05.png",
      slide06: "/images/story/slide-06.png",
      slide07: "/images/story/slide-07.png",
      slide08: "/images/story/slide-08.png",
    },
    featured: {
      trailerThumbnail: "/images/featured/trailer-thumbnail.jpeg",
      post02Thumbnail: "/images/featured/post-02-thumbnail.jpeg",
      post03Thumbnail: "/images/featured/post-03-thumbnail.jpeg",
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
    },
  },
} as const;

export const siteContent = {
  brand: {
    name: "IMPOSSIBLE",
    tagline: "Hidden in plain sight. I'm possible.",
    logo: assets.brand.logo,
  },
  nav: [
    { label: "Partners", href: "/#partners" },
    { label: "Story", href: "/#story" },
    { label: "Featured", href: "/#featured" },
    { label: "Results", href: "/#results" },
    { label: "Team", href: "/#team" },
    { label: "Sponsorship", href: "/#sponsorship" },
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
    { name: "Gtgym_hq", logo: assets.images.partners.gtgymHq },
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
    subtitle: "Our highest-viewed post — told one frame at a time.",
    slides: [
      { image: assets.images.story.slide01Intro, caption: "The story begins." },
      { image: assets.images.story.slide02, caption: "The journey starts here." },
      { image: assets.images.story.slide03, caption: "Every session counts." },
      { image: assets.images.story.slide04, caption: "Built in the gym." },
      { image: assets.images.story.slide05, caption: "Pressure creates progress." },
      { image: assets.images.story.slide06, caption: "Eyes on the prize." },
      { image: assets.images.story.slide07, caption: "The grind never stops." },
      { image: assets.images.story.slide08, caption: "This story is still unfolding." },
    ] satisfies StorySlide[],
  },
  featured: [
    {
      title: "IMPOSSIBLE Trailer",
      meta: "Featured · Official trailer",
      image: assets.images.featured.trailerThumbnail,
      videoUrl: assets.videos.heroTrailer,
    },
    {
      title: "Instagram Post 02",
      meta: "Featured · Training",
      image: assets.images.featured.post02Thumbnail,
      videoUrl: assets.videos.featuredPost02,
    },
    {
      title: "Instagram Post 03",
      meta: "Featured · Mentality",
      image: assets.images.featured.post03Thumbnail,
      videoUrl: assets.videos.featuredPost03,
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
  team: [
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
    background: assets.images.sections.finalCtaBackground,
  },
  footerLinks: [
    { label: "Press Kit", href: "/" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Contact", href: "mailto:colin.dingelstad@gmail.com?subject=IMPOSSIBLE%20Contact" },
  ] satisfies FooterLink[],
};
