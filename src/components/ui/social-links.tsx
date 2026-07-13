import {
  FaEnvelope,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import type { SocialLinks } from "@/data/site-content";

const linkIcons = {
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  website: FaGlobe,
  email: FaEnvelope,
} as const satisfies Record<string, IconType>;

type LinkKey = keyof typeof linkIcons;

const linkLabels: Record<LinkKey, string> = {
  linkedin: "LinkedIn",
  twitter: "X (Twitter)",
  instagram: "Instagram",
  facebook: "Facebook",
  website: "Website",
  email: "Email",
};

function getLinkHref(key: LinkKey, value: string) {
  return key === "email" ? `mailto:${value}` : value;
}

function isLinkKey(key: string): key is LinkKey {
  return key in linkIcons;
}

export function SocialLinks({
  links,
  label,
  className = "",
  iconClassName = "h-5 w-5",
}: {
  links?: SocialLinks;
  label: string;
  className?: string;
  iconClassName?: string;
}) {
  if (!links) return null;

  const entries = Object.entries(links).filter(
    (entry): entry is [LinkKey, string] =>
      Boolean(entry[1]) && isLinkKey(entry[0]),
  );

  if (entries.length === 0) return null;

  return (
    <div className={`flex gap-4 ${className}`}>
      {entries.map(([key, value]) => {
        const Icon = linkIcons[key];
        const href = getLinkHref(key, value);
        const isExternal = key !== "email";

        return (
          <a
            key={key}
            href={href}
            aria-label={`${label} on ${linkLabels[key]}`}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="text-[#e5e2e1]/45 transition-colors duration-300 hover:text-white"
          >
            <Icon className={iconClassName} aria-hidden />
          </a>
        );
      })}
    </div>
  );
}
