'use client';

import { useRouter } from 'next/navigation';
import NoteForm from '@/components/NoteForm/NoteForm';

export default function CreateNotePage() {
  const router = useRouter();

  const handleCancel = () => {
    router.back();
  };

  return <NoteForm onCancel={handleCancel} />;
}