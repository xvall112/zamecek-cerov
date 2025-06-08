import { ArrowRight, User, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

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
  users: number;
  moreUsers: number;
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
      title: "Apartmán 1+KK",
      summary:
        " Plně vybavený apartmán s vlastním sociálním zařízením, k dispozici wifi a TV, manželské dvoulůžko, vybavená kuchyňská linka s jídelním koutem. Kapacita 2 osoby.",
      label: "Tutorial",
      author: "Sarah Chen",
      published: "1 Jan 2024",
      url: "#",
      image: `${aprt1.src}`,
      users: 2,
      moreUsers: 0,
    },
    {
      id: "post-2",
      title: "Apartmán 2+KK",
      summary:
        "Plně vybavený apartmán s vlastním sociálním zařízením, k dispozici wifi a TV, obývací pokoj s rozkládacím gaučem a vybavenou kuchyňskou linkou s jídelním koutem, ložnice s manželským dvoulůžkem. Kapacita 2+2 osoby na rozkládacím gauči.",
      label: "Accessibility",
      author: "Marcus Rodriguez",
      published: "1 Jan 2024",
      url: "#",
      image: `${aprt2.src}`,
      users: 2,
      moreUsers: 2,
    },
    {
      id: "post-3",
      title: "Apartmán 3+KK",
      summary:
        "Plně vybavený prostorný apartmán s chodbou a vlastním sociálním zařízením, k dispozici wifi a TV, obývací pokoj s rozkládacím gaučem a vybavenou kuchyňskou linkou s jídelním koutem, dvě ložnice s manželským dvoulůžkem. Kapacita 4+2 osoby na rozkládacím gauči.",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "#",
      image: `${aprt3.src}`,
      users: 4,
      moreUsers: 2,
    },
  ],
}: ApartmentsProps) => {
  return (
    <section id="apartments" className="py-32">
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
                <div className="flex items-center gap-2">
                  {Array.from({ length: post.users }).map((_, index) => (
                    <User key={index} className="size-5 text-(--primary)" />
                  ))}
                  {post.moreUsers > 0 && "+"}
                  {Array.from({ length: post.moreUsers }).map((_, index) => (
                    <User key={index} className="size-5 text-(--primary)" />
                  ))}
                </div>
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

        <div className="mx-auto w-full sm:max-w-6xl overflow-x-auto">
          <Table className="rounded border text-left shadow-lg rounded-lg">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead className="bg-muted px-6 py-4 font-semibold">
                  Apartmán 1+KK
                </TableHead>
                <TableHead className="px-6 py-4 font-semibold">
                  Apartmán 2+KK
                </TableHead>
                <TableHead className="bg-muted px-6 py-4 font-semibold">
                  Apartmán 3+KK
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-foreground">
              <TableRow>
                <TableCell className="px-6 py-4">Počet hostů</TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  max. 2 osoby
                </TableCell>
                <TableCell className="px-6 py-4">max. 4 osoby (2+2)</TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  max. 6 osob (4+2)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Velikost apartmánu</TableCell>
                <TableCell className="bg-muted px-6 py-4">27 m²</TableCell>
                <TableCell className="px-6 py-4">41 m²</TableCell>
                <TableCell className="bg-muted px-6 py-4">69 m²</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Manželská postel</TableCell>
                <TableCell className="bg-muted px-6 py-4">1x</TableCell>
                <TableCell className="px-6 py-4">1x</TableCell>
                <TableCell className="bg-muted px-6 py-4">2x</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Soukromá kuchyň</TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  <Check className="size-5" />
                </TableCell>
                <TableCell className="px-6 py-4">
                  {" "}
                  <Check className="size-5" />
                </TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  <Check className="size-5" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Vlastní koupelna</TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  <Check className="size-5" />
                </TableCell>
                <TableCell className="px-6 py-4">
                  {" "}
                  <Check className="size-5" />
                </TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  <Check className="size-5" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Výhled do zahrady</TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  <Check className="size-5" />
                </TableCell>
                <TableCell className="px-6 py-4">
                  {" "}
                  <Check className="size-5" />
                </TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  <Check className="size-5" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Myčka na nádobí</TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  <Check className="size-5" />
                </TableCell>
                <TableCell className="px-6 py-4">
                  {" "}
                  <Check className="size-5" />
                </TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  <Check className="size-5" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">
                  TV s plochou obrazovkou
                </TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  <Check className="size-5" />
                </TableCell>
                <TableCell className="px-6 py-4">
                  {" "}
                  <Check className="size-5" />
                </TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  <Check className="size-5" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Wi-Fi zdarma</TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  <Check className="size-5" />
                </TableCell>
                <TableCell className="px-6 py-4">
                  {" "}
                  <Check className="size-5" />
                </TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  <Check className="size-5" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Letní sezóna</TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  2040,-- Kč/den, víkend 4500,-- Kč
                </TableCell>
                <TableCell className="px-6 py-4">
                  3100,-- Kč/den, víkend 4600,-- Kč
                </TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  3900,-- Kč/den, víkend 7600,-- Kč
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4">Zimní sezóna</TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  1900,-- Kč/den, víkend 3800,-- Kč
                </TableCell>
                <TableCell className="px-6 py-4">
                  2800,-- Kč/den, víkend 3900,-- Kč
                </TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  3500,-- Kč/den, víkend 6500,-- Kč
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="px-6 py-4"></TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  <Button className="w-full">Rezervovat</Button>
                </TableCell>
                <TableCell className="px-6 py-4">
                  <Button className="w-full">Rezervovat</Button>
                </TableCell>
                <TableCell className="bg-muted px-6 py-4">
                  <Button className="w-full">Rezervovat</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="mt-4 text-sm text-muted-foreground">
            * Minimální délka pronájmu je 2 dny. U apartmánu 2+kk a 3+kk je
            možné navýšení 1 až 2 osoby na rozkládacím gauči. Cena je 650,--
            Kč/osoba/den. K ceně se připočítává rekreační poplatek 20 Kč /
            os/den Záloha ve výši 40% se platí ihned do tří dnů po rezervaci.
            Doplatek v plné výši nejpozději týden před nástupem. Rezervaci
            můžete zrušit zdarma do 7 dní před příjezdem. V případě zrušení
            rezervace méně než 7 dní před příjezdem bude storno poplatek činit
            100 % celkové ceny.
            <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export { Apartments };
