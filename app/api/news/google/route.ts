import Parser from 'rss-parser'

export const runtime = 'nodejs' // use Node runtime (rss-parser uses node modules)
export const revalidate = 3600  // cache for 1 hour

type GItem = {
  title?: string
  link?: string
  pubDate?: string
  content?: string
  contentSnippet?: string
  isoDate?: string
}

export async function GET() {
  const parser = new Parser<GItem>({ timeout: 10000 })
  const url = 'https://news.google.com/rss/search?q=' + encodeURIComponent('Cahit Oben') + '&hl=tr&gl=TR&ceid=TR:tr'
  try {
    const feed = await parser.parseURL(url)
    const items = (feed.items || []).map((it) => ({
      title: it.title || '',
      url: it.link || '',
      date: it.isoDate || it.pubDate || null,
      excerpt: it.contentSnippet || '',
      source: 'Google News',
    }))
    return Response.json({ ok: true, items })
  } catch (e:any) {
    return Response.json({ ok: false, error: e?.message || 'fetch_error', items: [] }, { status: 200 })
  }
}
