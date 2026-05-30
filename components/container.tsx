import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto box-border w-full max-w-[1180px] px-5 md:px-6 ${className}`}>
      {children}
    </div>
  );
}
