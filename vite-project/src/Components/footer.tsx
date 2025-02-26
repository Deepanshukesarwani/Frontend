const Footer = () => {
    return (
      <footer className="bg-[#0D021F] text-gray-300 py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Left Side - Copyright */}
          <div className="text-center md:text-left mb-2 md:mb-0">
            <p>Copyright &copy; {new Date().getFullYear()} DcodeBlock</p>
          </div>
  
          {/* Right Side - Links */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Help Center</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-white transition">Terms and Conditions</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  