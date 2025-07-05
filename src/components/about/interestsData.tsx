import { Code, Coffee, Dumbbell, Gamepad2, Headphones } from "lucide-react";

export interface Interest {
  icon: React.ReactNode;
  translationKey: string;
}

export const getInterests = (): Interest[] => [
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    translationKey: "interestItems.coding",
  },
  {
    icon: <Dumbbell className="h-6 w-6 text-primary" />,
    translationKey: "interestItems.gym",
  },
  {
    icon: <Headphones className="h-6 w-6 text-primary" />,
    translationKey: "interestItems.music",
  },
  {
    icon: <Gamepad2 className="h-6 w-6 text-primary" />,
    translationKey: "interestItems.gaming",
  },
  {
    icon: <Coffee className="h-6 w-6 text-primary" />,
    translationKey: "interestItems.coffee",
  },
];
