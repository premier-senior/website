"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-px w-8 bg-gray-400" />
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">ENROLL COURSE</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Navigating the next chapter
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-4">
              Making the move to senior living is a big step for your family, and we are here to be with you with our seamless and guidance through all the steps to get you. We ensure that your home will meet your needs and be safe and comfortable.
            </p>
            <p className="text-gray-500 leading-relaxed text-sm md:text-base">
              Find your perfect match for premier senior living and let us take you there to your next chapter of premier senior care.
            </p>
          </div>

          {/* Right: Video Thumbnail */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {!playing ? (
                <>
                  <div className="relative aspect-video">
                    <Image
                      src="/images/video-thumb.jpg"
                      alt="Navigating the next chapter - video"
                      fill
                      className="object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20" />
                    {/* Play Button */}
                    <button
                      onClick={() => setPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center group"
                      aria-label="Play video"
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-transform group-hover:scale-110"
                        style={{ backgroundColor: "#8B1A4A" }}
                      >
                        <Play className="w-7 h-7 text-white ml-1" fill="white" />
                      </div>
                    </button>
                  </div>
                </>
              ) : (
                <div className="aspect-video bg-black flex items-center justify-center">
                  <p className="text-white text-sm">Video would play here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
