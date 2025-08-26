// ------------------ Imports ------------------
import React from "react";
import EmblaCarousel from "../components/carousel/EmblaCarousel";
import { BoxReveal } from "@/components/magicui/BoxReveal";
import { AuroraText } from "@/components/magicui/AuroraText";

// ------------------ Constants ------------------
const SLIDES = Array.from(Array(5).keys());
const OPTIONS = { loop: true };

// ------------------ Component ------------------
const CarouselPage = () => {
  return (
    <main className="min-h-[calc(90vh-7rem)] overflow-hidden max-md:mt-20">
      {/* Background Glow */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#4D4DFF] -rotate-[30deg] -z-10"></div>

      {/* Title */}
      <div className="flex flex-col items-center justify-center space-y-3">
        <BoxReveal>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider mb-4 text-center">
            <AuroraText>Carousel</AuroraText>
          </h1>
        </BoxReveal>

        {/* Carousel */}
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </main>
  );
};

export default CarouselPage;
