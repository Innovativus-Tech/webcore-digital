import * as Lucide from "lucide-react";
import type { LucideProps } from "lucide-react";

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Comp = (Lucide as unknown as Record<string, React.ComponentType<LucideProps>>)[name] ?? Lucide.Sparkles;
  return <Comp {...props} />;
}
