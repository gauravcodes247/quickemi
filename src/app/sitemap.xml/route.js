// /app/sitemap.xml/route.js

export async function GET() {
  const baseUrl = 'https://quickemi.site';

  const pages = [
    { path: '', lastmod: '2025-07-17', priority: '1.0' },             // Home page
    { path: '/about', lastmod: '2025-07-10', priority: '0.5' },
    { path: '/contact', lastmod: '2025-07-12', priority: '0.5' },
    { path: '/blog', lastmod: '2025-07-14', priority: '0.6' },
    { path: '/personal-loan', lastmod: '2025-07-15', priority: '0.9' },
    { path: '/car-loan', lastmod: '2025-07-15', priority: '0.9' },
    { path: '/home-loan', lastmod: '2025-07-15', priority: '0.9' },
    { path: '/blog/how-to-calculate-emi', lastmod: '2025-07-13', priority: '0.7' },
    { path: '/blog/personalvshome', lastmod: '2025-07-14', priority: '0.7' },
    { path: '/blog/blog3', lastmod: '2025-07-11', priority: '0.6' }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map((page) => {
      return `
        <url>
          <loc>${baseUrl}${page.path}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <priority>${page.priority}</priority>
        </url>`;
    }).join('')}
  </urlset>`;

  return new Response(sitemap.trim(), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
