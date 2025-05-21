const FooterSection = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="bg-gradient-to-br from-gray-900 via-blue-900 to-blue-950 text-gray-300 py-10 pb-7 px-8 border-t border-blue-700/40 shadow-inner"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-8 flex-wrap">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 min-w-[240px]">
          <h2 className="text-4xl font-black text-white tracking-wide drop-shadow-md select-none">
            FinTrack
          </h2>
          <p className="mt-3 text-white font-light text-sm tracking-wide max-w-xs leading-relaxed">
            Your personal finance companion to track, manage, and grow your
            money smartly.
          </p>
        </div>

        {/* Quick Links */}
        <nav className="flex flex-col space-y-3 min-w-[160px]">
          <h3 className="text-white font-semibold text-lg tracking-wide mb-3">
            Quick Links
          </h3>
          {["Home", "Features", "About", "Contact"].map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="cursor-pointer text-sm text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              {item}
            </li>
          ))}
        </nav>

        {/* Social Media */}
        <div className="flex flex-col min-w-[160px]">
          <h3 className="text-white font-semibold text-lg tracking-wide mb-3">
            Follow Us
          </h3>
          <div className="flex gap-4">
            {[
              {
                label: "Twitter",
                href: "https://twitter.com/yourhandle",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.1 9.1 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.51 2.03-4.51 4.54 0 .35.04.7.11 1.03A12.84 12.84 0 013 2.37a4.44 4.44 0 001.39 6.06 4.46 4.46 0 01-2.04-.57v.06c0 2.24 1.59 4.1 3.7 4.52a4.48 4.48 0 01-2.03.08 4.52 4.52 0 004.22 3.14A9 9 0 012 19.54 12.8 12.8 0 008.29 21c7.54 0 11.67-6.27 11.67-11.71 0-.18 0-.36-.02-.54A8.18 8.18 0 0023 3z" />
                  </svg>
                ),
              },
              {
                label: "Facebook",
                href: "https://facebook.com/yourhandle",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 5.03 3.66 9.19 8.44 9.93v-7.03H7.9v-2.9h2.54v-2.21c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.25 0-1.64.77-1.64 1.56v1.87h2.79l-.45 2.9h-2.34v7.03C18.34 21.26 22 17.1 22 12.07z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/yourhandle",
                icon: (
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.45 20.45h-3.64v-5.61c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.71H9.34V9h3.5v1.56h.05c.49-.93 1.69-1.9 3.48-1.9 3.72 0 4.41 2.45 4.41 5.64v6.2zM5.34 7.43a2.12 2.12 0 01-2.13-2.12 2.12 2.12 0 114.24 0 2.12 2.12 0 01-2.11 2.12zM6.52 20.45H3.15V9h3.37v11.45z" />
                  </svg>
                ),
              },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 text-gray-300 hover:text-white shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider & Bottom copyright */}
      <div className="mt-14">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-700/40 to-transparent"></div>
        <div className="pt-6 text-center text-xs text-white select-none tracking-wide font-light">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-medium text-white">FinTrack</span>. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
