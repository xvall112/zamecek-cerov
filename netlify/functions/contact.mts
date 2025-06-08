import type { Context } from "@netlify/functions";

export const prerender = false; // required to enable dynamic SSR

export default async (req: Request, context: any) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const body = await req.json();

  console.log("Received form data:", body);

  return new Response(JSON.stringify({ message: "Success", data: body }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
