import { useGetMyAgent } from "@/api/MyAgentApi";
import { MainAnimatedList } from "@/components/AnimatedList";
import BlurFade from "@/components/magicui/blur-fade";
import Particles from "@/components/magicui/particles";
import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

const HomePage = () => {
  // once role specific pages are set up, profile completion redirects should be abstracted to those components. this will ensure
  // that users with an auth token that havent finished their profile can still access public resources without being autoredirected
  const navigate = useNavigate();
  const { currentAgent } = useGetMyAgent();
  const { isAuthenticated, isLoading: isAuthLoading } = useAuth0();

  const scrollIntoView = (elementName) => {
    const element = document.getElementById(elementName);
    element.scrollIntoView({ behavior: "smooth" });
  };

  // if account signed up without creating profile redirect
  if (currentAgent?.profileCreated === false && isAuthenticated) {
    navigate("/create-profile");
  }

  return (
    <div className="h-inherit">
      {/* display loader if awaiting fetches */}
      {isAuthLoading ? (
        <div className="absolute top-[45%] left-1/2">
          <ScaleLoader
            height={40}
            margin={2}
            color="#A4DAF5"
            speedMultiplier={1.1}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        // loader while checking for async currentUser booleans
        <>
          <section>
            <section className="flex flex-col min-h-[87vh] items-center">
              <Particles
                className="absolute inset-0 -z-1 min-h-[87vh] pointer-events-none"
                color={"#52B4DF"}
                // maybe configure for performance
                quantity={800}
                size={0.6}
                staticity={45}
              />
              <div className="title container flex flex-col justify-center items-center">
                <BlurFade delay={0.25} yOffset={-6} duration={0.6} inView>
                  <h2 className="text-6xl font-medium tracking-tighter text-transparent bg-gradient-to-b from-primary-sdlight1 to-primary-uilight3 dark:from-primary-sdlight1 dark:to-primary-sdlight2 bg-clip-text pointer-events-none select-none">
                    NexHome
                  </h2>
                </BlurFade>
                <BlurFade
                  delay={0.25 * 3}
                  yOffset={-3}
                  duration={0.6}
                  inView
                  className="flex"
                >
                  <h3 className="text-xl pt-3 pb-6 tracking-tighter pointer-events-none select-none">
                    The smarter way to communicate
                  </h3>
                </BlurFade>
                {/* replace dot pattern with particles? */}
                {/* <DotPattern
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        /> */}
                {/* fix bug with particle background on resize */}
              </div>
              <div className="flex flex-col md:flex-row max-w-3/5 z-1">
                <BlurFade delay={0.25 * 6.5} yOffset={-3} duration={0.5}>
                  <MainAnimatedList />
                </BlurFade>
                <BlurFade delay={0.25 * 6.5} yOffset={-3} duration={0.5}>
                  <div className="container max-w-[350px] md:pr-0">
                    <h1 className="pt-6 pb-2 text-3xl md:text-3xl md:pt-0 font-medium tracking-tighter text-primary-sdlight1 pointer-events-none select-none">
                      Remove the stress from your transactions
                    </h1>
                    <p className="pointer-events-none select-none">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Libero quibusdam, sit possimus voluptate dolore nulla
                      atque soluta consequatur. Accusantium nisi fuga
                      repellendus dignissimos dolorem ipsam commodi fugit
                      debitis nemo voluptatum!
                    </p>
                    <div className="flex justify-center gap-x-5 py-16">
                      <Button
                        onClick={() => {
                          scrollIntoView("problemStatement");
                        }}
                        className="bg-white dark:bg-primary-sdlight2 dark:text-white dark:hover:bg-primary-aclight1 dark:border-none dark:shadow-none shadow-primary-uilight3 text-primary-sdlight1 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none"
                      >
                        Learn More
                      </Button>
                      <Link to="/pricing">
                        <Button className="bg-white dark:bg-primary-sdlight2 dark:text-white dark:hover:bg-primary-aclight1 dark:border-none dark:shadow-none shadow-primary-uilight3 text-primary-sdlight1 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none">
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </div>
                </BlurFade>
              </div>
            </section>
            <BlurFade
              delay={0.25 * 6.5}
              yOffset={-3}
              duration={0.5}
              className="flex justify-center"
            >
              <ChevronDown className="" />
            </BlurFade>
          </section>
          <section className="flex flex-col min-h-[87vh] items-center">
            <section id="problemStatement" className="flex flex-col py-10">
              <h1 className="text-4xl text-center">
                The problem with modern transactions
              </h1>
              <section className="flex justify-around mt-5"></section>
            </section>
          </section>
        </>
      )}
    </div>
  );
};

export default HomePage;
