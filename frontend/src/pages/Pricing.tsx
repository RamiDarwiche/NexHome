import DotPattern from "@/components/magicui/dot-pattern";
import { MagicCard } from "@/components/magicui/magic-card";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import {
  PricingCardOne,
  PricingCardThree,
  PricingCardTwo,
} from "@/components/PricingCards";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="-z-1">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(480px_circle_at_center,white,transparent)]"
        )}
      />
      <div
        className={
          "flex-row flex-1 md:grid md:grid-cols-3 h-[500px] w-full gap-4 -z-1"
        }
      >
        <MagicCard
          className="select-none p-4 flex flex-col items-center border-2 border-primary-uilight3 shadow-xl whitespace-nowrap text-4xl"
          gradientColor={"#BBE6FC"}
        >
          <PricingCardOne />
        </MagicCard>
        <MagicCard
          className="select-none p-4 flex flex-col items-center border-2 border-primary-uilight3 shadow-xl whitespace-nowrap text-4xl"
          gradientColor={"#BBE6FC"}
        >
          <PricingCardTwo />
        </MagicCard>
        <MagicCard
          className="select-none p-4 flex flex-col items-center border-2 border-primary-uilight3 shadow-xl whitespace-nowrap text-4xl"
          gradientColor={"#BBE6FC"}
        >
          <PricingCardThree />
        </MagicCard>
      </div>
    </div>
  );
};

export default Pricing;
