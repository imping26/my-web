import React from "react";
import { cn } from "../lib/utils";

function WrapContent({ className, children }) {
  return (
    <div className={"flex flex-col h-screen max-w-[1280px] mx-auto"}>
      <main className={cn("flex-grow pb-[--bottom-height] xxs:pb-0", className)}>{children}</main>
    </div>
  );
}

export default WrapContent;
