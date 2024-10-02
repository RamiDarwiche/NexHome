import { User } from "@/types";
import { AgentDashGrid } from "./AgentDashGrid";
import BlurFade from "../magicui/blur-fade";

type Props = {
  currentUser: User;
};

const AgentDash = ({ currentUser }: Props) => {
  return (
    <>
      <BlurFade delay={0.25} yOffset={0} duration={0.6} inView>
        <div className="py-6 flex justify-center md:justify-start">
          <h1 className="text-4xl font-medium tracking-tight text-transparent bg-gradient-to-b from-primary-sdlight1 to-primary-uilight3 dark:from-primary-sdlight1 dark:to-primary-sdlight2 bg-clip-text pointer-events-none select-none">{`Hi, ${currentUser.fName}!`}</h1>
        </div>
        <AgentDashGrid />
      </BlurFade>
    </>
  );
};

export default AgentDash;
