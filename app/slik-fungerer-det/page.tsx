"use client";

import { useEffect } from "react";

export default function HowItWorksPage() {
  useEffect(() => {
    window.location.replace("/#slik-fungerer-det");
  }, []);

  return null;
}
