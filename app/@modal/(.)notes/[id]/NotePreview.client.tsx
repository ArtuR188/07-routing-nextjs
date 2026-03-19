'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import { fetchNoteById } from '@/lib/api';

interface Props {
  id: string;
}

export default function NotePreviewClient({ id }: Props) {
  const router = useRouter();

  const { data: note, isLoading, isError } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  return (
    <Modal onClose={() => router.back()}>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong.</p>}
      {note && (
        <div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <span>{note.tag}</span>
          <p>{new Date(note.createdAt).toLocaleDateString()}</p>
        </div>
      )}
    </Modal>
  );
}