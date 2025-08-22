export default function SeoOrganization(){
  const json = {
    "@context": "https://schema.org",
    "@type": ["Person","Organization"],
    "name": "Cahit Oben",
    "url": "https://cahitoben.com",
    "sameAs": [
      "https://open.spotify.com/artist/2O8jY0TevDFs7R9tzkh4SH",
      "https://music.apple.com/tr/artist/cahit-oben/95145871",
      "https://www.youtube.com/channel/UCWiOnChcc4l8peYF7e0XXfw",
      "https://www.instagram.com/cahitobenart/"
    ]
  };
  return (
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
  );
}
