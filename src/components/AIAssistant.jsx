export default function AIAssistant() {
  return (
    <section id="ai-assistant" className="py-16 md:py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="w-full bg-gradient-to-br from-blue-50/50 to-white rounded-[2.5rem] border border-blue-100/50 shadow-card p-10 md:p-14 flex flex-col md:flex-row items-center gap-12 md:gap-20 relative overflow-hidden">
          {/* subtle background blob */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>

          {/* Left side: AI assistant promo */}
          <div className="flex-1 z-10">
            <h3 className="text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight mb-6">
              Your personal
              <br />
              AI travel assistant
            </h3>
            <ul className="space-y-4 text-base md:text-lg text-gray-500 mb-8 font-medium">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-peach-400 rounded-full flex-shrink-0"></span>
                Personalized Recommendations
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></span>
                Live price tracking
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-mint-400 rounded-full flex-shrink-0"></span>
                Smart itinerary builder
              </li>
            </ul>
          </div>

          {/* Right Side: Phone placeholder */}
          <div className="flex-1 flex justify-center z-10 w-full">
            <div className="w-64 h-96 bg-gradient-to-b from-gray-50 object-cover to-gray-200 rounded-[40px] border-[6px] border-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-white rounded-b-2xl shadow-sm"></div>
              <div className="mt-12 mx-5 space-y-4">
                <div className="text-[10px] text-gray-400 text-center font-bold tracking-wider uppercase">Itinerary</div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="w-full h-2 bg-gray-200 rounded mb-2"></div>
                  <div className="w-3/4 h-2 bg-gray-200 rounded mb-2"></div>
                  <div className="w-1/2 h-2 bg-gray-100 rounded"></div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-gray-100">
                  <div className="w-full h-2 bg-gray-200 rounded mb-2"></div>
                  <div className="w-2/3 h-2 bg-gray-100 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
