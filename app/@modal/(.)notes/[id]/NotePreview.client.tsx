'use client';

import { useQuery } from "@tanstack/react-query";
import { useRouter, useParams } from 'next/navigation';
import { fetchNoteById } from "@/lib/api";
import Modal from "@/components/Modal/Modal";

export default function NotePreviewClient() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const handleClose = () => router.back();

  const { data: note, isLoading, error } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (error instanceof Error || !note) return <p>Something went wrong.</p>;

  const formattedDate = `Created at: ${new Date(note.createdAt).toLocaleDateString()}`;

  return (
    <Modal closeModal={handleClose}>
      <div>
        <div>
          <h2>{note.title}</h2>
          <p>{note.tag}</p>
        </div>
        <p>{note.content}</p>
        <p>{formattedDate}</p>
        <button type="button" onClick={handleClose}>Back</button>
      </div>
    </Modal>
  );
}