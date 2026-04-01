export default function ArchivePage({ params }: { params: { date?: string[] } }) {
  return <div className="p-24"><h1>Year: {params.date?.[0] || "Latest"}</h1></div>;
}