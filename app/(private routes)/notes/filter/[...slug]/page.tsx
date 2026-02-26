import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import type { NoteTag } from "@/types/note";
import NotesClient from "../../../Notes.client";

type PageProps = {
  params: Promise<{ slug?: string[] }>;
};

const TAGS: NoteTag[] = ["Todo", "Work", "Personal", "Meeting", "Shopping"];

function toNoteTag(value: string | undefined): NoteTag | undefined {
  if (!value) return undefined;
  return (TAGS as readonly string[]).includes(value) ? (value as NoteTag) : undefined;
}

export default async function FilterNotesPage({ params }: PageProps) {
  const { slug } = await params;

  const selected = slug?.[0]; // "all" або "Work"...
  const tag: NoteTag | undefined = selected === "all" ? undefined : toNoteTag(selected);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, "", tag], // tag може бути undefined - ОК
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: 12,
        search: "",
        tag, // undefined => в api не має відправлятись
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient initialTag={tag} />
    </HydrationBoundary>
  );
}