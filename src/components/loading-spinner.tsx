import React from "react"

interface LoadingSpinnerProps {
  color?: string // Tailwind color class, e.g. "border-t-blue-500"
  size?: string // Tailwind size class, e.g. "h-16 w-16"
  containerClassName?: string // Optional additional container classes
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  color = "border-t-black dark:border-t-white", // Add dark mode class
  size = "h-16 w-16",
  containerClassName = "bottom-0 left-64 right-0 top-0",
}) => {
  return (
    <div
      className={`fixed ${containerClassName} z-50 flex items-center justify-center bg-transparent`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div
        className={`${size} border-8 ${color} animate-spin rounded-full border-transparent`}
        aria-hidden="true"
      />
      <span className="sr-only">Loading...</span>
    </div>
  )
}
