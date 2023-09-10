/* 
npm run build
npm run preview
https://profound-sundae-5495e8.netlify.app/rss.xml
 */
import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
	return rss({
		title: 'Astro Learner | Blog',
		description: 'My journey learning Astro',
		site: 'https://my-blog-site.netlify.app',
		items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
		customData: `<language>en-us</language>`,
	});
}
