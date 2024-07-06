import React from 'react';

function Sitemap() {
  const routes = [
    '/',
    '/about',
    '/experience',
    '/education',
    '/skills',
    '/contact',
    '/cv'
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes.map(route => `
        <url>
          <loc>${process.env.REACT_APP_BASE_URL}${route}</loc>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
      `).join('')}
    </urlset>
  `;

  return (
    <pre>{sitemapXml}</pre>
  );
}

export default Sitemap;