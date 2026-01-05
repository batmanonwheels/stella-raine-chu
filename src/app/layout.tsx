import type { Metadata, Viewport } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { Analytics } from '@vercel/analytics/next';

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

export const viewport: Viewport = {
	themeColor: '#fefefe',
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
				<Analytics />
			</body>
		</html>
	);
}
