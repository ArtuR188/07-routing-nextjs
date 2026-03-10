import type { Note } from '@/types/note';
import css from './NotePreview.module.css';

export default function NotePreview({ note }: { note: Note }) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>{note.title}</h2>
      <span className={css.tag}>{note.tag}</span>
      <p className={css.content}>{note.content}</p>
    </div>
  );
}