const STATUS_STYLES: Record<string, string> = {
  Publicado: "border-ouro/50 bg-ouro/15 text-marrom",
  "Em revisão": "border-marrom/20 bg-bege text-marrom-escuro",
  Rascunho: "border-marrom/15 bg-white text-marrom/60",
};

export default function StatusBadge({ status }: { status: string }) {
  const styles =
    STATUS_STYLES[status] ?? "border-marrom/15 bg-white text-marrom/60";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${styles}`}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}