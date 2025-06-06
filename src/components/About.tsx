import { Button } from "@/components/ui/button";
import bg from "../assets/hero2.jpeg"; 

interface AboutProps {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  buttonPrimary: {
    label: string;
    href: string;
  };
  buttonSecondary: {
    label: string;
    href: string;
  };
}

const About = ({
  title = "O Zámečku Čeřov",
  description = "Nové vybudované apartmány se nacházejí v 2.NP bývalého zámečku Čeřov, postaveném jezuity kolem roku 1650.K objektu náleží velká zahrada s ohništěm. Před objektem možnost bezplatného parkování. Součástí objektu je mikroklimatická solná jeskyně. Objekt je oplocen, vjezd bránou na DO. Zámeček se nachází v klidné části na okraji města, centrum města je v docházkové vzdálenosti cca 15 min. lipovou alejí, v sousedství se nachází lesopark Čeřovka. Lokalita má výhodnou výchozí polohu pro pěší turistiku a cyklistiku. Kola lze uschovat v uzamykatelném přístřešku. Za nepříznivého počasí mohou hosté využít aquapark který se nachází 5min. chůze od ubytování, na aquapark navazuje restaurace, která disponuje velkou dětskou hernou.",
  imageSrc = `${bg.src}`,
  imageAlt = "placeholder hero",
  buttonPrimary = {
    label: "Apartmány",
    href: "#apartments",
  },
  buttonSecondary = {
    label: "Kontakt",
    href: "#contact",
  },
}: AboutProps) => {
  return (
    <section className="py-32 bg-primary-foreground">
      <div className="container">
        <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 mt-0 text-4xl font-semibold text-balance lg:text-5xl">
              {title}
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild>
                <a href={buttonPrimary.href}>
                  {buttonPrimary.label}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={buttonSecondary.href}>
                  {buttonSecondary.label}
                </a>
              </Button>
            </div>
          </div>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export { About };
