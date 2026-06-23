"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="py-20 bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-muted-foreground/40" />
              <span className="text-xs font-bold tracking-widest text-muted-foreground uppercase">ENROLL COURSE</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Navigating the next chapter
            </h2>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-lg mb-4">
              Making the move to senior living is a big step for your family, and we're here to help you with our expertise and guidance throughout the process. We ensure that your new home will suit your needs and be safe and comfortable.
            </p>
          </div>

          {/* Right: Video Thumbnail */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {!playing ? (
                <div className="relative aspect-video">
                  <Image
                    src="/images/video-thumb.jpg"
                    alt="Navigating the next chapter - video"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/20" />
                  <button
                    onClick={() => setPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group"
                    aria-label="Play video"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl transition-transform group-hover:scale-110">
                      <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </button>
                </div>
              ) : (
                <div className="aspect-video bg-foreground flex items-center justify-center">
                  <p className="text-background text-sm">Video would play here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
