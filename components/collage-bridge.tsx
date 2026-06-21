import Image from "next/image"

const images = [
  { src: "/images/collage-1.jpg", alt: "Caregiver with senior in wheelchair", heightClass: "h-52 md:h-64" },
  { src: "/images/collage-2.jpg", alt: "Elderly couple walking in the park",  heightClass: "h-60 md:h-72" },
  { src: "/images/collage-3.jpg", alt: "Premier Senior Solutions founder",     heightClass: "h-72 md:h-88" },
  { src: "/images/collage-4.jpg", alt: "Seniors enjoying video games",         heightClass: "h-60 md:h-72" },
  { src: "/images/collage-5.jpg", alt: "Seniors playing chess",                heightClass: "h-52 md:h-64" },
]

export default function CollageBridge() {
  return (
    /*
      Outer wrapper overlaps the hero section above with negative margin.
      Background is transparent so hero image shows through the top.
    */
    <div className="relative w-full overflow-hidden -mt-20 md:-mt-32" aria-hidden="false">
      {/* Top half — transparent (hero background shows through) */}
      <div className="w-full h-32 md:h-44 bg-transparent" />
      {/* Bottom half — white */}
      <div className="w-full h-32 md:h-44 bg-background" />

      {/* Oval images — absolutely centred across the split */}
      <div className="absolute inset-0 flex items-center justify-center gap-1 md:gap-2 px-4">
        {images.map((img, i) => (
          <div
            key={i}
            className={`
              relative flex-shrink-0
              w-28 md:w-36 lg:w-44
              ${img.heightClass}
              rounded-[999px] overflow-hidden
              shadow-xl border-4 border-white
            `}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 112px, (max-width: 1024px) 144px, 176px"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
