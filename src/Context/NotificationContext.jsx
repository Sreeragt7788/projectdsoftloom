import { createContext, useEffect, useState } from "react";

export const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState(null);

  // generic function (base)
  const showNotification = (type, message) => {
    setNotification({ type, message });
  };

  // helper functions
  const showSuccess = (message) => showNotification("success", message);
  const showError = (message) => showNotification("error", message);

  // auto hide notification
  useEffect(() => {
    if (!notification) return;

    const timer = setTimeout(() => {
      setNotification(null);
    }, 500);

    return () => clearTimeout(timer);
  }, [notification]);

  return (
    <NotificationContext.Provider value={{ showSuccess, showError }}>
      {children}

      {/* Notification Popup */}
      {notification && (
        <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-0">
          <div
            className={`
              max-w-[90%] sm:max-w-md w-full sm:w-auto
              px-4 py-3 sm:px-6 sm:py-3
              rounded-lg shadow-lg
              text-white text-sm sm:text-base
              flex items-center gap-2
              transition-all duration-300
              ${
                notification.type === "success"
                  ? "bg-green-500"
                  : "bg-red-500"
              }
            `}
          >
            
            {notification.type === "success" ? (
              <svg
                className="w-5 h-5 shrink-0"
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
                className="w-5 h-5 shrink-0"
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

            
            <span className="wrap-break-word">{notification.message}</span>
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  );
}
