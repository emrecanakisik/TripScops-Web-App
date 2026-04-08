export default function AvatarPlaceholder({ size = "md", name = "" }) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  };

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  // Try to use a placeholder image url based on name, otherwise fallback
  const imageUrl = name ? `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff&size=128` : null;

  return (
    <div
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center text-white font-semibold shadow-md flex-shrink-0 relative overflow-hidden`}
    >
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-peach-300 to-peach-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
          {initials || "U"}
        </div>
      )}
    </div>
  );
}
