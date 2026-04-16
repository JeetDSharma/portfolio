import React from "react";
import Navbar from "@/components/Navbar";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Desktop sidebar width matches Navbar fixed rail */}
      <div className="md:pl-[8.5rem]">{children}</div>
    </div>
  );
}
