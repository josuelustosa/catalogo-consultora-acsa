import type { ReactNode } from "react";

type ContainerWidth = "default" | "narrow";

interface ContainerProps {
  children: ReactNode;
  width?: ContainerWidth;
}

const widths: Record<ContainerWidth, string> = {
  default: "max-w-page",
  narrow: "max-w-narrow",
};

function Container({ children, width = "default" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full ${widths[width]} px-4 sm:px-6 lg:px-8`}>
      {children}
    </div>
  );
}

export default Container;
