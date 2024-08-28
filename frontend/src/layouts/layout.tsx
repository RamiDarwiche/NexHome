import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen max-w-screen">
      <Header />
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
