"use client";

export default function CookieSettingsButton() {
  const handleClick = () => {
    // 1. Fire a browser event that the banner listens for
    window.dispatchEvent(new CustomEvent("open-cookie-settings"));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-md bg-white px-3.5 py-2 text-xs font-semibold text-black transition hover:bg-zinc-200 cursor-pointer"
    >
      Manage Cookie Settings
    </button>
  );
}