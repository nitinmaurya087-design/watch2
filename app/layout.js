import './globals.css';

export const metadata = {
  title: 'Nitin Maurya — Frontend Developer & UI/UX Designer',
  description:
    'Portfolio of Nitin Maurya, a Frontend Developer and UI/UX Designer focused on modern, responsive and interactive web experiences.',
  openGraph: {
    title: 'Nitin Maurya — Frontend Developer & UI/UX Designer',
    description:
      'Portfolio of Nitin Maurya, a Frontend Developer and UI/UX Designer focused on modern, responsive and interactive web experiences.',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
