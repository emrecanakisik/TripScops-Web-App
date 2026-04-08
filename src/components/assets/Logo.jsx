export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* LOGO: T icon */}
      <div className="w-8 h-8 rounded shrink-0 flex items-center justify-center bg-navy-900 border-2 border-navy-900 overflow-hidden shadow-sm">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7h16" />
          <path d="M12 7v13" />
        </svg>
      </div>
      <span className="text-xl font-bold text-navy-900 tracking-tight">Tripscops</span>
    </div>
  );
}
