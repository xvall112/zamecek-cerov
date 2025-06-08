import React, { useState } from "react";

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
  phone = "+420 725 861 641",
  email = "info@zamecekcerov.cz",
}: Contact2Props) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate network request
    try {
      const form = e.currentTarget as HTMLFormElement;
      const formData = new FormData(form);

      const data = {
        firstname: formData.get("firstname")?.toString() || "",
        lastname: formData.get("lastname")?.toString() || "",
        email: formData.get("email")?.toString() || "",
        subject: formData.get("subject")?.toString() || "",
        message: formData.get("message")?.toString() || "",
      };

      await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: "",
      });
      alert("Děkujeme! Formulář byl odeslán.");
    } catch (error) {
      console.error("Chyba při odesílání formuláře", error);
      alert("Nastala chyba. Zkuste to znovu.");
    } finally {
      setLoading(false);
    }
  };
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
          <form
            name="contact"
            method="POST"
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-3xl flex-col gap-6"
          >
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">Jméno</Label>
                <Input
                  type="text"
                  id="firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="Jméno"
                  required
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Příjmení</Label>
                <Input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Příjmení"
                  required
                />
              </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Předmět</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Rezervace"
                required
              />
            </div>

            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Zpráva</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Napište zprávu."
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Odesílání..." : "Odeslat"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export { Contact };
