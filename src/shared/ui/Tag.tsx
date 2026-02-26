// src/shared/ui/Tag.tsx
import type { PropsWithChildren } from "react";

type TagVariant = "default" | "outline" | "success" | "warning";

interface TagProps extends PropsWithChildren {
  variant?: TagVariant;
  className?: string;
}

const variantClasses: Record<TagVariant, string> = {
  default: "bg-white/10 text-[#25b309]/40 border-[#25b309]/50",
  outline: "bg-transparent text-[#25b309]/50 border-[#25b309]/30",
  success: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40",
  warning: "bg-red-500/15 text-red-200 border-red-500/40",
};

export const Tag: React.FC<TagProps> = ({
  variant = "default",
  className = "",
  children,
}) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
