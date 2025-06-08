import React from "react";
import { Button } from "@/components/ui/button";

interface Hero7Props {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  button2?: {
    text: string;
    url: string;
  };
}

const Hero = ({
  heading = "Zámeček Čeřov – Ubytování Jičín",
  description = "Nové apartmány v bývalém zámečku s velkou zahradou, solnou jeskyní a výbornou dostupností do Českého ráje.",
  button = {
    text: "Apartmány",
    url: "/#apartments",
  },
  button2 = {
    text: "Kontakt",
    url: "/#contact",
  },
}: Hero7Props) => {
  return (
    <section>
      <div className="container text-center">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <h1 className="text-4xl font-extrabold lg:text-6xl">{heading}</h1>
          <p className="text-balance lg:text-lg">{description}</p>
        </div>
        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row mt-10">
          <Button asChild size="lg" className="sm:mr-1 sm:w-70">
            <a href={button.url}>{button.text}</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="sm:ml-1 sm:w-70"
          >
            <a href={button2.url}>{button2.text}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Hero };
