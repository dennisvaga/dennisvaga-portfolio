import { ReactNode } from "react";
import AnimatedCard from "@/components/AnimatedCard";

interface ContactInfoItemProps {
  icon: ReactNode;
  label: string;
  value: string;
}

export default function ContactInfoItem({
  icon,
  label,
  value,
}: ContactInfoItemProps) {
  return (
    <AnimatedCard>
      <div className="flex gap-4">
        <div className="bg-primary/10 p-3 rounded-full max-h-[48px]">
          {icon}
        </div>
        <div>
          <p className="font-medium text-start">{label}</p>
          <p className="text-muted-foreground">{value}</p>
        </div>
      </div>
    </AnimatedCard>
  );
}
