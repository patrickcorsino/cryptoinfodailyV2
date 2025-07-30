// ✅ FILE: app/layout.jsx
import '../styles/globals.css';

export const metadata = {
  title: 'Crypto Dashboard',
  description: 'A simplified CoinMarketCap clone with Degen Mode',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
