import Image from "next/image";

export function SectionBackground({
  src,
  alt,
  gradient,
  fixed = false,
}: {
  src: string;
  alt: string;
  gradient: string;
  fixed?: boolean;
}) {
  if (fixed) {
    return (
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed motion-reduce:bg-scroll"
        style={{ backgroundImage: `url("${src}")` }}
        aria-hidden
      >
        <div className={`absolute inset-0 ${gradient}`} />
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />
      <div className={`absolute inset-0 ${gradient}`} />
    </div>
  );
}
