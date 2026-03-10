import type { Metadata } from 'next';
import css from './NotFound.module.css';

export const metadata: Metadata = {
  title: 'NoteHub | 404 - Page not found',
  description: 'This page does not exist',
  openGraph: {
    title: 'NoteHub | 404 - Page not found',
    description: 'This page does not exist',
    url: 'https://your-app.vercel.app/not-found',
    images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
  },
};

export default function NotFound() {
  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </>
  );
}