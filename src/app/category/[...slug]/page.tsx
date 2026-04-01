export default function CategoryPage({ params }: { params: { slug: string[] } }) {
  return <div className="p-24"><h1>Browsing Category: {params.slug.join(" / ")}</h1></div>;
}