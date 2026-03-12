import { createContext, useContext, useState } from "react";

const ComingSoonContext = createContext();

export const ComingSoonProvider = ({ children }) => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const openComingSoon = () => setShowComingSoon(true);
  const closeComingSoon = () => setShowComingSoon(false);

  return (
    <ComingSoonContext.Provider value={{ openComingSoon }}>
      {children}

      {showComingSoon && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-neutral-900 border border-orange-700 rounded-xl p-8 text-center shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Feature Coming Soon 🚧
            </h2>

            <p className="text-neutral-400 mb-6">
              This feature is currently under development.
            </p>

            <button
              onClick={closeComingSoon}
              className="bg-linear-to-r from-orange-500 to-orange-800 px-6 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </ComingSoonContext.Provider>
  );
};

export const useComingSoon = () => useContext(ComingSoonContext);