'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDebouncedCallback } from 'use-debounce';
import { fetchNotes } from '@/lib/api';
import NoteList from '@/components/NoteList/NoteList';
import Pagination from '@/components/Pagination/Pagination';
import SearchBox from '@/components/SearchBox/SearchBox';
import Modal from '@/components/Modal/Modal';
import NoteForm from '@/components/NoteForm/NoteForm';
import type { NoteTag } from '@/types/note';
import css from './NotesPage.module.css';

interface NotesClientProps {
  initialTag?: NoteTag;
}

export default function NotesClient({ initialTag }: NotesClientProps) {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSearch = useDebouncedCallback((value: string): void => {
    setSearch(value);
    setPage(1);
  }, 400);

  const handlePageChange = (newPage: number): void => {
    setPage(newPage);
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ['notes', page, search, initialTag],
    queryFn: () =>
      fetchNotes({
        tag: initialTag,
        page,
        search: search || undefined,
        perPage: 12,
      }),
  });

  return (
    <div className={css.app}>
      <div className={css.toolbar}>
        <SearchBox onSearch={handleSearch} />
        <button className={css.button} onClick={() => setIsModalOpen(true)}>
          Create note +
        </button>
      </div>

      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong.</p>}
      {data && data.notes.length > 0 && (
        <>
          <NoteList notes={data.notes} />
          <Pagination
            pageCount={data.totalPages}
            currentPage={page}
            onPageChange={handlePageChange}
          />
        </>
      )}

      {isModalOpen && (
        <Modal closeModal={() => setIsModalOpen(false)}>
          <NoteForm onCancel={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}