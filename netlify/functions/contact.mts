import type { Context } from "@netlify/functions";
import { Resend } from "resend";
export const prerender = false; // required to enable dynamic SSR

const resend = new Resend('re_PLGuBoDT_4x5ZQBvZFa4kp1Fvn7CJXnp8');

export default async (req: Request, context: any) => {
  if (req.method !== "POST") {
    return new Response("Only POST requests allowed", { status: 405 });
  }

  try {
    const body = await req.json();
    const { firstname, lastname, email, subject, message } = body;

    const fullName = `${firstname} ${lastname}`;

    await resend.emails.send({
      from: 'onboarding@resend.dev', // or use 'you@resend.dev' for testing
      to: 'valtastudio.app@gmail.com', // Your receiving email
      subject: `📩 ${subject || "Nová zpráva z webu Zámek Čeřov"}`,
      html: `
        <h2>Nová zpráva z webového formuláře</h2>
        <p><strong>Jméno:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Zpráva:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    console.error("Resend error:", err);
    return new Response(JSON.stringify({ error: "Email failed to send" }), {
      status: 500,
    });
  }
};
