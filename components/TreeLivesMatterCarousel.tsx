"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/TLM_home.png", alt: "Tree Lives Matter Homepage" },
  { src: "/TLM_admin.png", alt: "Tree Lives Matter Admin Dashboard" },
  { src: "/TLM_map.png", alt: "Tree Lives Matter Map" },
  { src: "/TLM_form.png", alt: "Tree Lives Matter Form" },
];

export default function TreeLivesMatterCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-[4/3] md:aspect-video overflow-hidden rounded-xl border border-white/15 bg-black/40 shadow-xl">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              activeSlide === index
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index === 0}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-50 flex items-center justify-between pointer-events-none">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={prevSlide}
          aria-label="Imaginea anterioară"
          className="pointer-events-auto h-11 w-11 md:h-12 md:w-12 rounded-full cursor-pointer bg-purple-600 text-gray-300 border border-white shadow-lg hover:bg-blue-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="h-7 w-7" />
        </Button>

        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={nextSlide}
          aria-label="Imaginea următoare"
          className="pointer-events-auto h-11 w-11 md:h-12 md:w-12 rounded-full cursor-pointer bg-purple-600 text-gray-300 border border-white shadow-lg hover:bg-blue-400 hover:text-white transition-colors"
        >
          <ChevronRight className="h-7 w-7" />
        </Button>
      </div>

      <div className="absolute bottom-3 left-0 right-0 z-40 flex justify-center gap-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Mergi la imaginea ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "w-6 bg-purple-400"
                : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}