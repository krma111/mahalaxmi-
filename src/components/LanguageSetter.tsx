"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function LanguageSetter() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.lang = pathname?.startsWith("/hi") ? "hi" : "en";
  }, [pathname]);
  return null;
}
