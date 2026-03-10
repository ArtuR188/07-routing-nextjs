'use client';

import type { Note } from '@/types/note';

interface Props {
  note: Note;
}

export default function NoteDetailsClient({ note }: Props) {
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.tag}</p>
      <p>{note.content}</p>
    </div>
  );
}