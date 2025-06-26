"use client";
import React, { useEffect, useState } from "react";

const GoogleTranslate = () => {
  const [selectedLang, setSelectedLang] = useState("Select Language");

  useEffect(() => {
    window.googleTranslateInit = () => {
      if (!window.google?.translate?.TranslateElement) {
        setTimeout(window.googleTranslateInit, 100);
      } else {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "en,hi,pa,sa,mr,ur,bn,ta,te,kn,ml,gu,or,as,ne,si,bo,ks,tcy,sd,kon",
            layout:
              window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            autoDisplay: false,
          },
          "google_translate_element"
        );

        setTimeout(() => {
          const combo = document.querySelector(".goog-te-combo");
          if (combo) {
            combo.addEventListener("change", () => {
              const langName =
                combo.options[combo.selectedIndex].text || "Select Language";
              setSelectedLang(langName);
            });
          }
        }, 1000);
      }

      cleanUpGadgetText();
    };

    const loadGoogleTranslateScript = () => {
      if (!document.getElementById("google_translate_script")) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
        script.id = "google_translate_script";
        script.onerror = () =>
          console.error("Error loading Google Translate script");
        document.body.appendChild(script);
      }
    };

    const cleanUpGadgetText = () => {
      const gadgetElement = document.querySelector(".goog-te-gadget");
      if (gadgetElement) {
        const textNodes = gadgetElement.childNodes;
        textNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = "";
          }
        });
      }
    };

    loadGoogleTranslateScript();
    if (window.google && window.google.translate) {
      window.googleTranslateInit();
    }
  }, []);

  return (
    <div className="relative">
      <button
        className="px-4 py-2 bg-white text-black border-2 border-yellow-400 rounded-md font-medium shadow-md"
        type="button"
      >
        🌐 {selectedLang}
      </button>

      <div
        id="google_translate_element"
        className="absolute top-full mt-2 left-0 z-50"
      />
      <style jsx>{`
        .goog-te-gadget {
          color: transparent !important;
        }

        .goog-te-gadget > span > a,
        .goog-logo-link {
          display: none !important;
        }

        .goog-te-combo {
          background-color: white;
          border: 2px solid #f7ba34;
          border-radius: 0.5rem;
          padding: 0.4rem 0.75rem;
          font-size: 0.875rem;
          color: black;
          font-weight: 500;
          cursor: pointer;
        }

        .goog-te-combo:hover {
          box-shadow: 0 6px 8px rgba(247, 186, 52, 0.5);
        }

        .goog-te-banner-frame {
          display: none !important;
        }

        .skiptranslate > iframe {
          display: none !important;
        }

        body {
          top: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default GoogleTranslate;
