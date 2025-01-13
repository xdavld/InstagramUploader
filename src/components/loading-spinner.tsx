// components/LoadingSpinner.tsx

interface LoadingSpinnerProps {
  color?: string // Tailwind color class, e.g., "border-t-blue-500"
  size?: string // Tailwind size class, e.g., "h-16 w-16"
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  color = "border-t-black",
  size = "h-16 w-16",
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-transparent"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div
        className={`${size} border-8 ${color} animate-spin rounded-full border-transparent`}
        aria-hidden="true"
      ></div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
