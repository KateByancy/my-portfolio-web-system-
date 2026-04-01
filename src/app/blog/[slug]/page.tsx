export default function BlogSlugPage({ params }: { params: { slug: string } }) {
  return <div className="p-24"><h1>Post: {params.slug}</h1></div>;
}