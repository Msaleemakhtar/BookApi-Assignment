import React from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-[93rem]">{children}</div>;
}
