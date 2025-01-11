import { FaEye } from "react-icons/fa";



import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";





interface LoginFormProps {
  onLogin: () => void
  onPreview: () => void
  className?: string
  [key: string]: any
}

export function LoginForm({
  onLogin,
  onPreview,
  className,
  ...props
}: LoginFormProps) {
  console.log("LoginForm received onPreview:", typeof onPreview) // Debug

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl font-bold">Login to your account</h1>
        <p className="text-sm text-muted-foreground">
          Click the button below to log in to your Instagram account
        </p>
      </div>
      <Button type="button" className="w-full" onClick={onLogin}>
        Login
      </Button>

      <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
        <span className="relative z-10 bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>

      <Button
        variant="secondary"
        type="button"
        className="flex w-full items-center justify-center"
        onClick={onPreview} // Ensure this is correctly passed
      >
        <FaEye className="mr-2" />
        Preview
      </Button>
    </form>
  )
}