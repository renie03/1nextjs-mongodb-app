"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return <div className="border rounded-full p-[7px] border-transparent" />;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {
        mounted ? resolvedTheme === "dark" ? <FiSun /> : <FiMoon /> : <FiMoon /> // safe default
      }
    </button>
  );
};

export default DarkModeToggle;
