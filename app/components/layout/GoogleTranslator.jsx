"use client";

import { useEffect } from "react";

/**
 * GoogleTranslator: Loads Google Translate Element invisibly and provides
 * seamless full-site translation between English and Hindi across all pages.
 */
export default function GoogleTranslator() {
  useEffect(() => {
    // 1. Define global Google Translate Element init callback
    window.googleTranslateElementInit = function () {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi",
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      }
    };

    // 2. Load the official Google Translate script if not already loaded
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.type = "text/javascript";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    // 3. Listen to custom event dispatched by Header when user selects language
    const handleLanguageChange = (e) => {
      const targetLang = e.detail && e.detail.lang ? e.detail.lang : "en";
      const combo = document.querySelector(".goog-te-combo");
      if (combo) {
        combo.value = targetLang;
        combo.dispatchEvent(new Event("change"));
      } else {
        // Fallback: Reload with proper cookie if combo isn't yet ready
        setTimeout(() => {
          const retryCombo = document.querySelector(".goog-te-combo");
          if (retryCombo) {
            retryCombo.value = targetLang;
            retryCombo.dispatchEvent(new Event("change"));
          } else {
            window.location.reload();
          }
        }, 300);
      }
    };

    window.addEventListener("bsv_change_language", handleLanguageChange);
    return () => {
      window.removeEventListener("bsv_change_language", handleLanguageChange);
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      className="hidden notranslate"
      aria-hidden="true"
      style={{ display: "none", position: "absolute", left: "-9999px", top: "-9999px" }}
    />
  );
}
