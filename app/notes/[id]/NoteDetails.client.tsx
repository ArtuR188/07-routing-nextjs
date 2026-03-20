'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';

interface Props {
  id: string;
}

export default function NoteDetailsClient({ id }: Props) {
  const { data: note, isLoading, isError } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;
  if (!note) return null;

  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <span>{note.tag}</span>
      <p>{new Date(note.createdAt).toLocaleDateString()}</p>
    </div>
  );
}