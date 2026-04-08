export default function HeroPhoneImage() {
  return (
    <div className="relative">
      {/* HERO PHONE IMAGE: Replace the placeholder below with your phone mockup image */}
      {/* Example: <img src="/path/to/phone-mockup.png" alt="Tripscops app preview" className="w-[300px] md:w-[360px] h-auto" /> */}
      <div className="w-[280px] md:w-[340px] h-[560px] md:h-[680px] bg-gradient-to-b from-gray-100 to-gray-200 rounded-[40px] shadow-2xl border-4 border-gray-300 relative overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-300 rounded-b-2xl"></div>
        
        {/* Screen content placeholder */}
        <div className="mt-10 mx-4 space-y-3">
          <div className="w-full h-8 bg-white/60 rounded-lg flex items-center px-3">
            <div className="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
            <div className="w-16 h-3 bg-gray-300 rounded"></div>
          </div>
          
          {/* Itinerary label */}
          <div className="text-center">
            <span className="text-xs font-medium text-gray-500">Itinerary</span>
          </div>
          
          {/* Search bar */}
          <div className="bg-white rounded-xl p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
              <span className="text-xs text-gray-400">Search</span>
              <span className="text-xs text-gray-300 mx-1">→</span>
              <span className="text-xs text-gray-400">Destination</span>
            </div>
          </div>
          
          {/* Cards */}
          <div className="space-y-2">
            {['Suggestions', 'Itinerary preview', 'Itinerary preview'].map((label, i) => (
              <div key={i} className="bg-white rounded-xl p-3 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-medium text-gray-600">{label}</span>
                  <div className="w-4 h-4 bg-gray-200 rounded"></div>
                </div>
                <div className="space-y-1.5">
                  <div className="w-full h-2 bg-gray-100 rounded"></div>
                  <div className="w-3/4 h-2 bg-gray-100 rounded"></div>
                  <div className="w-1/2 h-2 bg-gray-100 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating labels */}
      <div className="absolute top-16 -right-4 bg-white rounded-lg shadow-lg px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-100">
        Itinerary
      </div>
      <div className="absolute top-1/3 -left-6 bg-white rounded-lg shadow-lg px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-100">
        Suggestions
      </div>
      <div className="absolute bottom-1/4 -right-6 bg-white rounded-lg shadow-lg px-3 py-1.5 text-xs font-medium text-gray-700 border border-gray-100">
        Trackings
      </div>
    </div>
  );
}
