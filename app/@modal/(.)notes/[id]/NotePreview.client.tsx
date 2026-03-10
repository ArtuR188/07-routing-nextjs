'use client';

import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import type { Note } from '@/types/note';
import NoteDetailsClient from '../../../notes/[id]/NoteDetails.client';

interface Props {
  note: Note;
}

export default function NotePreviewClient({ note }: Props) {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <NoteDetailsClient note={note} />
    </Modal>
  );
}