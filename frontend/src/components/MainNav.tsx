import * as React from "react";
import { Link } from "react-router-dom";
import { House, Moon, Sun } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import MainNavAgentLinks from "./MainNavAgentLinks";
import { useGetMyAgent } from "@/api/MyAgentApi";
import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Agent Dashboard",
    href: "/agent/dashboard",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Pricing",
    href: "/pricing",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function NavMenu() {
  // TODO: fix getMyAgent Bug in displaying current user's properties
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const { currentAgent } = useGetMyAgent();
  const { setTheme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("vite-ui-theme") == "dark") {
      setDarkTheme(true);
    }
  }, []);

  return (
    <div className="flex justify-between items-center mt-1">
      <div className="container flex-shrink pl-0">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Clients</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary-bdlight2 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <House className="h-6 w-6" />
                        <div className="mb-2 mt-1 text-lg font-medium">
                          Clients
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Realtors</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <Link to={component.href}>
                      <ListItem key={component.title} title={component.title}>
                        {component.description}
                      </ListItem>
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="container px-0 flex flex-1 justify-end">
        {isAuthenticated ? (
          <MainNavAgentLinks currentAgent={currentAgent} />
        ) : // hide agent login button while checking for auth switching pages
        isLoading ? (
          <div className="hidden"></div>
        ) : (
          <Button
            variant="ghost"
            // className="hover:text-primary-sdlight2 hover:bg-accent" choose one later
            className="bg-white dark:bg-primary-sdlight2 dark:text-white dark:hover:bg-primary-aclight1 dark:border-none dark:shadow-none shadow-primary-uilight3 text-primary-sdlight1 hover:text-white hover:bg-primary-bdlight3 shadow border border-primary-uilight3 select-none"
            onClick={async () => await loginWithRedirect()}
          >
            Agent Log In
          </Button>
        )}

        {/* ill move this eventually but its here to save my eyes in development */}
        {darkTheme ? (
          <Button
            className="ml-3"
            variant="ghost"
            size="icon"
            onClick={() => {
              setTheme("light");
              setDarkTheme(false);
            }}
          >
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        ) : (
          <Button
            className="ml-3"
            variant="ghost"
            size="icon"
            onClick={() => {
              setTheme("dark");
              setDarkTheme(true);
            }}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          </Button>
        )}
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
