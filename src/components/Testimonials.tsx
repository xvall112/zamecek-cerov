"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: "testimonial-1",
    text: "Nové, čisté a pohodlné. Navíc majitel je velmi příjemný chlapík, který rád poradí, kam si zajít třeba na jídlo nebo kde je co k vidění. Lokalita senzační a ubytování skvělé. Rádi se vrátíme",
    name: "Michaela",
    role: "Czech Republic",
  },
  {
    id: "testimonial-2",
    text: "Krásné nově zrekonstruované ubytování na klidném místě.Sympatický ubytovatel.Parkování naprosto bez problémů.Kuchyňka s lednicí velkou výhodou.Wifi bez problémů.Rozumný pěší dosah středu Jičína.Okolí lze využít i pro příjemnou procházku.",
    name: "Petr",
    role: "Czech Republic",
  },
  {
    id: "testimonial-3",
    text: "Moderně vybavené, čisté, nové. Naprostý klid, vybavení pro děti na zahradě (trampolína, prolézačky, skluzavka). Oplocené. Příjemný pan majitel, nic není problém. Velká TV, velká lednice, rychlý internet, příjemně teplo. Perfektní komunikace s...",
    name: "Martin",
    role: "Czech Republic",
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", updateCurrent);
    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <section className="py-32 bg-primary-foreground">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id}>
              <div className="container flex flex-col items-center text-center">
                <p className="mb-8 max-w-4xl font-medium md:px-8 lg:text-3xl">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="mb-1 text-sm font-medium md:text-lg">
                  {testimonial.name}
                </p>
                <p className="mb-2 text-sm text-muted-foreground md:text-lg">
                  {testimonial.role}
                </p>
                <div className="mt-2 flex items-center gap-0.5">
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="container flex justify-center pt-16">
        {testimonials.map((testimonial, index) => (
          <Button
            key={testimonial.id}
            variant="ghost"
            size="sm"
            onClick={() => {
              api?.scrollTo(index);
            }}
          >
            <div
              className={`size-2.5 rounded-full ${
                index === current ? "bg-primary" : "bg-input"
              }`}
            />
          </Button>
        ))}
      </div>
    </section>
  );
};

export { Testimonials };
