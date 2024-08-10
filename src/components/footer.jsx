const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Explore & Trek In Nepal</h3>
            <p className="text-sm">
              © 2023{" "}
              <a href="https://sulochanbarakoti.netlify.app/">
                sulochan barakoti
              </a>
              . All rights reserved.
            </p>
          </div>

          {/* Center Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
            <a href="/about" className="hover:text-gray-400">
              About
            </a>
            <a href="/services" className="hover:text-gray-400">
              Services
            </a>
            <a href="/contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>

          {/* Right Side - Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
