import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "../../Notes.client";
import type { NoteTag } from "@/types/note";

const TAGS: readonly NoteTag[] = ["Todo", "Work", "Personal", "Meeting", "Shopping"];

type PageProps = {
  params: Promise<{ tag?: string[] }>;
};

export default async function FilteredNotesPage({ params }: PageProps) {
  const { tag } = await params;

  const selected = tag?.[0]; // "Work" | "all" | undefined | щось інше

  const tagParam: NoteTag | undefined =
    !selected || selected === "all"
      ? undefined
      : TAGS.includes(selected as NoteTag)
        ? (selected as NoteTag)
        : undefined;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, "", tagParam],
    queryFn: () =>
      fetchNotes({
        page: 1,
        perPage: 12,
        search: "",
        tag: tagParam,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient initialTag={tagParam} />
    </HydrationBoundary>
  );
}