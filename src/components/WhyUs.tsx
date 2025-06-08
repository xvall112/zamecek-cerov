import {
  Radio,
  Armchair,
  Castle,
  House,
  PartyPopper,
  MapPinHouse,
} from "lucide-react";

interface Reason {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface WhyUsProps {
  heading?: string;
  reasons?: Reason[];
}

const WhyUs = ({
  heading = "Proč se ubytovat u nás?",
  reasons = [
    {
      title: "Vybavení apartmánů",
      description:
        "televize, rychlovarná konvice, lednička, myčka nádobí, sprchový kout, fén, ručníky, ložní prádlo, wifi",
      icon: <Armchair className="size-6" />,
    },
    {
      title: "Zábava",
      description:
        "Cyklostezky v okolí, Jízdarna / konírna poblíž, Tenis tenisové kurty, rybaření, bazén",
      icon: <PartyPopper className="size-6" />,
    },
    {
      title: "Areál",
      description:
        "oploceno, parkování u apartmánu, velká zahrada, travnatá plocha v okolí apartmánu, u lesa",
      icon: <House className="size-6" />,
    },
    {
      title: "Poloha",
      description:
        "Jičín je vstupní branou do Českého ráje. V blízkosti se nachází vlaková zastávka, odkud je možné podnikat výlety do okolí.",
      icon: <MapPinHouse className="size-6" />,
    },
    {
      title: "Památky a příroda",
      description:
        "V okolí hrad Trosky, Kost s údolím Plakánek, zámek Valdštejn a Hrubá skála, Prachovské skály, Jinolické rybníky, dále rybníky Vidlák, Věžák.",
      icon: <Castle className="size-6" />,
    },
    {
      title: "Další",
      description:
        "K dispozici dětská postýlka, wi-fi připojení, zákaz domácích mazlíčků, zákaz kouření v apartmánu, nekuřácký objekt",
      icon: <Radio className="size-6" />,
    },
  ],
}: WhyUsProps) => {
  return (
    <section className="pb-32 bg-primary-foreground">
      <div className="container">
        {/* <div className="mb-10 md:mb-20">
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            {heading}
          </h2>
        </div> */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div key={i} className="flex flex-col">
              <div className="mb-5 flex size-16 items-center justify-center rounded-xl bg-accent">
                {reason.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { WhyUs };
