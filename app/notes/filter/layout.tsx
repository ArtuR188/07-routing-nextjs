import type { ReactNode } from "react";
import css from "./LayoutNotes.module.css";

type FilterLayoutProps = {
  children: ReactNode;
  sidebar: ReactNode;
};

export default function FilterLayout({
  children,
  sidebar,
}: FilterLayoutProps) {
  return (
    <div className={css.layout}>
      {sidebar}
      {children}
    </div>
  );
}