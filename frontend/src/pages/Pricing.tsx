import DotPattern from "@/components/magicui/dot-pattern";

import { cn } from "@/lib/utils";

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
      ></div>
    </div>
  );
};

export default Pricing;
