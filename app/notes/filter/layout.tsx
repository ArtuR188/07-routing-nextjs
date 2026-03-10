import css from './layout.module.css';
import SidebarNotes from '@/components/SidebarNotes/SidebarNotes';

export default function FilterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={css.layout}>
      <aside className={css.sidebar}>
        <SidebarNotes />
      </aside>
      <div className={css.content}>{children}</div>
    </div>
  );
}