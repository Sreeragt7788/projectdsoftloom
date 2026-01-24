import { createContext, useEffect, useState } from "react";

export const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState(null);

  const showNotification = (type, message) => {
    setNotification({ type, message });
  };

  const showSuccess = (message) => showNotification("success", message);
  const showError = (message) => showNotification("error", message);

  useEffect(() => {
    if (!notification) return;

    const timer = setTimeout(() => {
      setNotification(null);
    }, 1500);

    return () => clearTimeout(timer);
  }, [notification]);

  return (
    <NotificationContext.Provider value={{ showSuccess, showError }}>
      {children}

      {/* Toast */}
      {notification && (
        <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
          <div
            className={`
              flex items-center gap-3
              px-5 py-3
              rounded-full
              backdrop-blur-xl
              shadow-2xl
              border border-white/30
              text-white text-sm sm:text-base
              animate-slideDown
              ${
                notification.type === "success"
                  ? "bg-linear-to-r from-emerald-500/90 to-green-600/90"
                  : "bg-linear-to-r from-rose-500/90 to-red-600/90"
              }
            `}
          >
            {/* Icon */}
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              {notification.type === "success" ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>

            {/* Message */}
            <span className="font-medium leading-snug text-center sm:text-left">
              {notification.message}
            </span>
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  );
}
