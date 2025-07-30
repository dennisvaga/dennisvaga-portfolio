"use client";

/**
 * ProjectGallery Component
 *
 * Interactive image carousel for showcasing multiple project screenshots.
 * Features:
 * - Responsive carousel with navigation controls
 * - Image counter showing current position
 * - Thumbnail navigation for quick access
 * - Loop navigation for seamless browsing
 * - Conditional rendering (only shows if images exist)
 * - Optimized images with Next.js Image component
 */
import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface ProjectGalleryProps {
  images: string[];
  projectTitle: string;
}

export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  if (images.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Screenshots</h3>
        <p className="text-muted-foreground">
          Explore the user interface and features
        </p>
      </div>

      <div className="relative">
        <Carousel
          setApi={setApi}
          className="w-full max-w-xl mx-auto"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[600px] md:h-[700px] flex items-center justify-center">
                  <Image
                    src={image}
                    alt={`${projectTitle} screenshot ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {images.length > 1 && (
            <>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </>
          )}
        </Carousel>

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm z-10">
            {current + 1} / {images.length}
          </div>
        )}
        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="mt-6 p-4">
            <div className="flex gap-2 justify-center overflow-x-auto">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                    index === current
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-gray-300 dark:border-gray-600 hover:border-gray-400"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
