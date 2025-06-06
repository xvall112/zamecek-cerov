import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

const Contact = ({
  title = "Kontaktujte nás...",
  description = "Napište nebo volejte o rezervaci. Napište nám, co vás zajímá, a my se vám ozveme co nejdříve.",
  phone = "+420 721 861 641",
  email = "zalak@post.cz",
}: Contact2Props) => {
  return (
    <section id="contact" className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-5xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Kontakt
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Mobil: </span>
                  <a href={`tel:${phone}`} className="underline">
                    {phone}
                  </a>
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
                {/* <li>
                  <span className="font-bold">Web: </span>
                  <a href={web.url} target="_blank" className="underline">
                    {web.label}
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">Jméno</Label>
                <Input type="text" id="firstname" placeholder="Jméno" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Příjmení</Label>
                <Input type="text" id="lastname" placeholder="Příjmení" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Předmět</Label>
              <Input type="text" id="subject" placeholder="Rezervace" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Zpráva</Label>
              <Textarea placeholder="Napiště zprávu." id="message" />
            </div>
            <Button className="w-full">Odeslat</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };
