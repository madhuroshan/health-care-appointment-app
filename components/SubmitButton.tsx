import React from "react";
import { Button } from "./ui/button";
import { Loader } from "lucide-react";

interface SubmitButtonProps {
  isLoading?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const SubmitButton = ({
  isLoading,
  children,
  className,
}: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      className={className ?? "shad-primary-btn w-full"}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="flex items-center gap-4 animate-spin">
          <Loader />
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
