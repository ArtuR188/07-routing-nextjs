/* eslint-disable @next/next/no-html-link-for-pages */
import css from './SidebarNotes.module.css';

const TAGS = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

export default function SidebarDefault() {
  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <a href="/notes/filter/all" className={css.menuLink}>
          All notes
        </a>
      </li>
      {TAGS.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <a href={`/notes/filter/${tag}`} className={css.menuLink}>
            {tag}
          </a>
        </li>
      ))}
    </ul>
  );
}