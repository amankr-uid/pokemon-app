import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-4xl mx-auto bg-slate-300">{children}</body>
    </html>
  );
}
