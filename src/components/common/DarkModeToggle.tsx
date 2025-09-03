"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-12.5 h-7 bg-transparent" />;

  return (
    <button
      className="flex items-center justify-between p-0.5 w-12.5 h-7 border border-gray-600 rounded-full cursor-pointer relative"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <div className="text-sm">🌙</div>
      <div className="text-sm">🔆</div>
      <div
        className={`w-5 h-5 bg-green-500 rounded-full absolute transition-all duration-300 ease-in-out ${
          resolvedTheme === "dark" ? "translate-x-0" : "translate-x-6"
        }`}
      />
    </button>
  );
};

export default DarkModeToggle;
