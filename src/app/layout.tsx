import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const engraversBt = localFont({
	src: './fonts/engravers-old-english-bt.ttf',
	variable: '--font-engravers-old-english',
});

export const metadata: Metadata = {
	title: 'Stella Raine Chu',
	description: 'journalist',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${engraversBt.variable}`}>{children}</body>
		</html>
	);
}
