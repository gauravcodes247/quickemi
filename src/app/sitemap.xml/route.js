// /app/sitemap.xml/route.js

export async function GET() {
  const baseUrl = 'https://quickemi.site';

  const staticPages = [
    '', // Home page
    '/about',
    '/contact',
    '/blog',
    '/personal-loan',
    '/car-loan',
    '/home-loan',
    '/blog/how-to-calculate-emi',
    '/blog/personalvshome',
    '/blog/blog3'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map((page) => {
        return `
        <url>
          <loc>${baseUrl}${page}</loc>
        </url>`;
      })
      .join('')}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
