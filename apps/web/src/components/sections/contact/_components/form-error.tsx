import { AlertTriangle } from "lucide-react";

interface FormErrorProps {
  message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) {
    return null;
  }

  return (
    <div className="bg-destructive/15 text-destructive dark:bg-destructive dark:text-destructive-foreground flex items-center gap-x-2 rounded-md p-3 text-sm">
      <AlertTriangle size={16} />
      <p>{message}</p>
    </div>
  );
};
