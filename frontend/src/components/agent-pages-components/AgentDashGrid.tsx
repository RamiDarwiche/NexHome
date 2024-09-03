import { CalendarIcon } from "@radix-ui/react-icons";
import { UserPlus, Inbox, House } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
  {
    Icon: Inbox,
    name: "Inbox",
    description: "We automatically save your files as you type.",
    href: "/agent/inbox",
    cta: "View Messages",
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: House,
    name: "Manage Clients",
    description: "Get notified when something happens.",
    href: "/agent/clients",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Supports 100+ integrations and counting.",
    href: "/agent/calendar",
    cta: "View Calendar",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 text-primary-sdlight1 border-primary-uilight3 top-10 origin-top rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
  {
    Icon: UserPlus,
    name: "Add Client",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "/agent/add-client",
    cta: "Get Started",
  },
];

export function AgentDashGrid() {
  return (
    <BentoGrid className="pb-6">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
