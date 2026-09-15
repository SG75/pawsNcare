import { LucideIcon } from "lucide-react";

type CareCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function CareCard({
  icon: Icon,
  title,
  description,
}: CareCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 b-zinc-900 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <Icon className="h-8 w-8 text-purple-400" />
      <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>

      <p className="mt-1 text-sm text-zinc-400">{description}</p>
    </div>
  );
}
