"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import hrubaSkala from "../assets/hruba-skala.jpeg";
import jinolickeRybníky from "../assets/jinolicke-rybniky.jpeg";
import prachovskeSkaly from "../assets/prachovske-skaly.jpeg";
import trosky from "../assets/trosky.jpeg";
import valdstejn from "../assets/valdstejn.jpeg";
import udoli from "../assets/udoli.webp";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface PlacesProps {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const Places = ({
  heading = "Místa, která stojí za to navštívit",
  items = [
    {
      id: "item-1",
      title: "Zřícenina hradu Trosky",
      summary:
        "Trosky je zřícenina hradu, který byl založen ve 14. století kolem roku 1380 až 1390. V době husitských válek sehrál důležitou roli, dvakrát byl pokud o jeho dobití, hrad ale odolal.",
      url: "https://www.dnesvyletujeme.cz/zricenina-hradu-trosky",
      image: `${trosky.src}`,
    },
    {
      id: "item-2",
      title: "Kost s údolím Plakánek",
      summary:
        "Hrad Kost je sevřen v malebné kotlině. Údolí Plakánek a Prokopské údolí jsou vroubeny pískovcovými skalami a opředené pověstmi. Zvlášť údolí Plakánek podnítilo díky svému názvu mnoho kronikářů k psaní neuvěřitelných příběhů.",
      url: "https://www.kudyznudy.cz/aktivity/romanticke-udoli-plakanek",
      image: `${udoli.src}`,
    },
    {
      id: "item-3",
      title: "zámek Valdštejn",
      summary:
        "Self-improving algorithms that learn from data patterns to automate complex tasks and make intelligent decisions with minimal human intervention.",
      url: "https://www.hrad-valdstejn.cz",
      image: `${valdstejn.src}`,
    },
    {
      id: "item-4",
      title: "zámek Hrubá skála",
      summary:
        "Hrubou Skálu nedaleko Turnova zřejmě znáte jako romantický zámek ve skalách. Pod ní se nachází stejnojmenná obec, nedaleko pak objevíte řadu ikonických míst Českého ráje",
      url: "https://www.kudyznudy.cz/kam-pojedete/oblasti/cesky-raj/hruba-skala",
      image: `${hrubaSkala.src}`,
    },
    {
      id: "item-5",
      title: "Prachovské skály",
      summary:
        "Nejznámější částí Českého ráje jsou bezpochyby Prachovské skály, ráj pro horolezce. Toto skalní město leží 7 km severozápadně od města Jičín. Vybrat si můžete z několika prohlídkových tras.",
      url: "https://www.kudyznudy.cz/aktivity/prachovske-skaly-v-ceskem-raji",
      image: `${prachovskeSkaly.src}`,
    },
    {
      id: "item-6",
      title: "Jinolické rybníky",
      summary:
        "Nedaleko od Jičína, na dohled od Prachovských skal u obce Jinolice, se v malebném prostředí nachází soustava tří rybníků.",
      url: "https://www.jicin.org/jinolicke-rybniky",
      image: `${jinolickeRybníky.src}`,
    },
  ],
}: PlacesProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <h2 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {heading}
            </h2>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="relative left-[-1rem]"
        >
          <CarouselContent className="-mr-4 ml-8 2xl:mr-[max(0rem,calc(50vw-700px-1rem))] 2xl:ml-[max(8rem,calc(50vw-700px+1rem))]">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:max-w-[452px]">
                {/* <a
                  href={item.url}
                  className="group flex flex-col justify-between"
                > */}
                  <div>
                    <div className="flex aspect-3/2 overflow-clip rounded-xl">
                      <div className="flex-1">
                        <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 line-clamp-3 pt-4 text-lg font-medium break-words md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                    {item.title}
                  </div>
                  <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
                    {item.summary}
                  </div>
                  {/* <div className="flex items-center text-sm">
                    Více{" "}
                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div> */}
                {/* </a> */}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Places };
