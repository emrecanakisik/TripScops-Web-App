import HeroPhoneImage from "./assets/HeroPhoneImage";
import { useToast } from "./ToastContext";

export default function HeroSection() {
  const { showToast } = useToast();

  const handleDownloadClick = (e) => {
    e.preventDefault();
    showToast('We are launching soon!', 3000);
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-12 md:pt-20 pb-16 md:pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-8">
        {/* Left: Text content */}
        <div className="flex-1 text-center md:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.08] tracking-tight mb-6">
            Plan smarter.
            <br />
            Travel better.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
            Create complete travel plans in seconds with AI — from discovery to booking.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 justify-center md:justify-start">
            {/* APP STORE BUTTON: Replace with real App Store badge image */}
            {/* Example: <a href="https://apps.apple.com/..."><img src="/path/to/app-store-badge.svg" alt="Download on the App Store" className="h-12" /></a> */}
            <a
              href="#"
              onClick={handleDownloadClick}
              id="hero-appstore-btn"
              className="inline-flex items-center gap-2.5 bg-gray-900 text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 21.99 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 21.99C7.79 22.03 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
              <div className="text-left">
                <span className="text-[10px] font-normal block leading-none opacity-80">Download on</span>
                <span className="text-sm font-semibold leading-tight">App Store</span>
              </div>
            </a>

            <a
              href="#how-it-works"
              id="hero-see-how-btn"
              className="inline-flex items-center gap-2 text-gray-700 font-semibold text-sm hover:text-gray-900 transition-colors duration-200 group"
            >
              <span className="w-8 h-8 rounded-full bg-peach-200 flex items-center justify-center group-hover:bg-peach-300 transition-colors duration-200">
                <svg className="w-3.5 h-3.5 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </span>
              See how it works
            </a>
          </div>

          {/* Trust indicator */}
          <div className="flex items-center gap-2 justify-center md:justify-start text-sm text-gray-500">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Trusted by 10,000+ travelers</span>
          </div>
        </div>

        {/* Right: Phone mockup */}
        <div className="flex-1 flex justify-center md:justify-end">
          <HeroPhoneImage />
        </div>
      </div>
    </section>
  );
}
