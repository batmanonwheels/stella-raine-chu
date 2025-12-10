import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

const engraversBt = localFont({
	src: './fonts/engravers-old-english-bt.ttf',
	variable: '--font-engravers-old-english',
});

const dmSerif = localFont({
	src: './fonts/DMSerifText-Regular.ttf',
	variable: '--font-dm-serif-text',
});

const dmSerifItalic = localFont({
	src: './fonts/DMSerifText-Italic.ttf',
	variable: '--font-dm-serif-text-italic',
});

export const metadata: Metadata = {
	title: 'Stella Raine Chu',
	description: 'Multimedia Journalist',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${engraversBt.variable} ${dmSerif.variable} ${dmSerifItalic.variable}`}
			>
				{children}
			</body>
		</html>
	);
}
