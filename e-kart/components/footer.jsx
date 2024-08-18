const Footer = () => {
  return (
    <footer className="bg-white border-t  bottom-0 left-0 right-0">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; 2024 STORE. All rights reserved.{" "}
          <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a>{" "}
          <span className="hidden sm:inline">|</span> <a href="#">Contact Us</a>{" "}
          <span className="hidden sm:inline">|</span> <a href="#">Support</a>{" "}
          <span className="hidden sm:inline">|</span> <a href="#">Help</a>{" "}
          <span className="hidden sm:inline">|</span> <a href="#">FAQ</a>{" "}
          <span className="hidden sm:inline">|</span>{" "}
          <a href="#">Return Policy</a>{" "}
          <span className="hidden sm:inline">|</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
