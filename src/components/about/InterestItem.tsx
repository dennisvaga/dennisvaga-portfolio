"use client";

import AnimatedButton from "@/components/AnimatedButton";

interface InterestItemProps {
  icon: React.ReactNode;
  label: string;
}

const InterestItem = ({ icon, label }: InterestItemProps) => {
  return (
    <div className="flex items-center gap-4">
      <AnimatedButton>{icon}</AnimatedButton>
      <span className="text-lg">{label}</span>
    </div>
  );
};

export default InterestItem;
