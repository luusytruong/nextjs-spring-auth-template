export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-white/15 p-4">
        header
      </header>
      <main>{children}</main>
    </>
  );
}
