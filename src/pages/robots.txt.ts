import type { APIRoute } from 'astro';

const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', 'https://juanmanzanero.com').href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
