const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <p className="text-sm">
              © 2026 Quote App. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-sm hover:text-gray-100 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm hover:text-gray-100 transition-colors duration-300"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-sm hover:text-gray-100 transition-colors duration-300"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
