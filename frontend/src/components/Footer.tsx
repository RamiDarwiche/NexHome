const Footer = () => {
  return (
    <div className="border-t-2 border-primary-bdlight1 py-4">
      <div className="container max-auto flex flex-col md:flex-row justify-between">
        <span className="text-2xl text-primary-sdlight1 font-bold tracking-tight">
          NexHome
        </span>
        <span className="text-sm font-medium tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
