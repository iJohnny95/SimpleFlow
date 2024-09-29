// _document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="dark"> {/* Force dark mode here */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
