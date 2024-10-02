const Footer = () => {
  return (
    <div className="flex flex-justify border-gray-100 py-4">
      <div className="container mx-auto flex flex-row justify-between">
        <span className="text-2xl font-bold tracking-tight text-transparent bg-gradient-to-b from-primary-sdlight1 to-primary-uilight3 dark:from-primary-sdlight1 dark:to-primary-sdlight2 bg-clip-text">
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
