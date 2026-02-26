export default function FilterLayout({
  children,
  sidebar,
  modal,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <div style={{ display: "flex", gap: 24 }}>
        <aside style={{ width: 260 }}>{sidebar}</aside>
        <main style={{ flex: 1 }}>{children}</main>
      </div>
      {modal}
    </>
  );
}