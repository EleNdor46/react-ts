import { classNames } from "shared/lib/classNames/className";
import { Button } from "shared/ui/Button/Button";
import { useEffect, useState } from "react";
interface BugButtonProps {
  className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);
  const toggleError = () => {
    setError(true);
  };
  useEffect(() => {
    if (error) throw new Error();
  }, [error]);
  return <Button onClick={toggleError}>throw error</Button>;
};
