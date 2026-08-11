import { useEffect, useState } from "react";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function MainLayout({ children }) {
  const [scannerOpen, setScannerOpen] =
    useState(false);

  useEffect(() => {
    const checkScanner = () => {
      setScannerOpen(
        document.body.classList.contains(
          "scanner-open"
        )
      );
    };

    checkScanner();

    const observer =
      new MutationObserver(checkScanner);

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () =>
      observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1020] text-white">
      {!scannerOpen && <Navbar />}

      <main>{children}</main>

      {!scannerOpen && <Footer />}
    </div>
  );
}

export default MainLayout;