// import Image from "next/image";
// import ToggleThemeBtn from "./components/ToggleThemeBtn";

// export default function Home() {
//   return (
//     <main className="flex  flex-col gap-4 min-h-screen items-center justify-center w-full">
//       <p className=" text-black  dark:text-red-400"> Theme</p>
//       <ToggleThemeBtn />
//     </main>
//   );
// }
"use client";
import clsx from "clsx";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

type Props = {};

export default function ToggleThemeBtn({}: Props) {
  const { themes, theme, setTheme, forcedTheme, systemTheme, resolvedTheme } = useTheme();
  const [lightMode, setLightMode] = useState(true)
  const [hydrationError, setHydrationError] = useState(false)

  useEffect(() => {
     if (theme === 'light') {
        setLightMode(true)
     } else if (theme === 'dark') {
        setLightMode(false)
     }
  }, [theme])

  // fix hydration error on next-themes
  useEffect(() => {
     setHydrationError(true)
  }, [])

  function toggleTheme() {
    if (resolvedTheme === "dark") {
      setTheme("light");
    }
    if (resolvedTheme === "light") {
      setTheme("dark");
    }
  }

  return (
    <button
      className="flex h-5 w-10 items-center rounded-full p-1 bg-slate-900 dark:bg-white"
      onClick={toggleTheme}
    >
      <div
        className={clsx(
          "h-4 w-4 rounded-full bg-white transition-all dark:bg-slate-900",
          {
            "translate-x-full": resolvedTheme === "light"
          },
          {
            "translate-x-0": resolvedTheme === "dark"
          }
        )}
      />
    </button>
  );
}