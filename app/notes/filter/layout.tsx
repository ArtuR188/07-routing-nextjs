import type { ReactNode } from "react";

type FilterLayoutProps = {
  children: ReactNode;
  sidebar: ReactNode;
};

export default function FilterLayout({
  children,
  sidebar,
}: FilterLayoutProps) {
  return (
    <div>
      {sidebar}
      {children}
    </div>
  );
}