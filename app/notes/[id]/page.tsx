import { fetchNoteById } from '@/lib/api';
import NoteDetailsClient from './NoteDetails.client';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const note = await fetchNoteById(id);
  return {
    title: `NoteHub | ${note.title}`,
    description: note.content,
    openGraph: {
      title: `NoteHub | ${note.title}`,
      description: note.content,
      url: `https://your-app.vercel.app/notes/${id}`,
      images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
    },
  };
}

export default async function NoteDetailsPage({ params }: Props) {
  const { id } = await params;
  const note = await fetchNoteById(id);
  return <NoteDetailsClient note={note} />;
}