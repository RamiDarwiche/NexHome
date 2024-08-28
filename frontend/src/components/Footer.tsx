const Footer = () => {
  return (
    <div className="border-t-2 border-primary-bdlight1 py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <span className="text-2xl font-bold tracking-tight text-transparent bg-gradient-to-b from-primary-sdlight1 to-primary-uilight3 bg-clip-text">
          NexHome
        </span>
        <span className="text-xs font-medium tracking-tight flex items-center gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
