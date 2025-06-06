import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import aprt1 from "../assets/apartman-1.jpeg";
import aprt2 from "../assets/apartman-2.jpeg";
import aprt3 from "../assets/apartman-3.jpeg";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

interface ApartmentsProps {
  heading: string;
  description: string;

  buttonUrl: string;
  posts: Post[];
}

const Apartments = ({
  heading = "Vyberte si z našich apartmánů",
  description = "Bývalý zámeček Čeřov v Jičíně nabízí ubytování pro 12 osob ve 3 apartmánech.",
  posts = [
    {
      id: "post-1",
      title: "Apartmán 1 1+KK",
      summary:
        " Plně vybavený apartmán s vlastním sociálním zařízením, k dispozici wifi a TV, manželské dvoulůžko, vybavená kuchyňská linka s jídelním koutem. Kapacita 2 osoby.",
      label: "Tutorial",
      author: "Sarah Chen",
      published: "1 Jan 2024",
      url: "#",
      image: `${aprt1.src}`,
    },
    {
      id: "post-2",
      title: "Apartmán 2 2+KK",
      summary:
        "Plně vybavený apartmán s vlastním sociálním zařízením, k dispozici wifi a TV, obývací pokoj s rozkládacím gaučem a vybavenou kuchyňskou linkou s jídelním koutem, ložnice s manželským dvoulůžkem. Kapacita 2+2 osoby na rozkládacím gauči.",
      label: "Accessibility",
      author: "Marcus Rodriguez",
      published: "1 Jan 2024",
      url: "#",
      image: `${aprt2.src}`,
    },
    {
      id: "post-3",
      title: "Apartmán 3 3+KK",
      summary:
        "Plně vybavený prostorný apartmán s chodbou a vlastním sociálním zařízením, k dispozici wifi a TV, obývací pokoj s rozkládacím gaučem a vybavenou kuchyňskou linkou s jídelním koutem, dvě ložnice s manželským dvoulůžkem. Kapacita 4+2 osoby na rozkládacím gauči.",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "#",
      image: `${aprt3.src}`,
    },
  ],
}: ApartmentsProps) => {
  return (
    <section id='apartments' className="py-32">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            {description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="grid grid-rows-[auto_auto_1fr_auto] pt-0"
            >
              <div className="aspect-16/9 w-full">
                <a
                  href={post.url}
                  target="_blank"
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover object-center"
                  />
                </a>
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <a href={post.url} target="_blank">
                    {post.title}
                  </a>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.summary}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={post.url}
                  target="_blank"
                  className="flex items-center text-foreground hover:underline"
                >
                  Více
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Apartments };
