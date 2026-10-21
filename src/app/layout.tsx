import "./globals.css";

export const metadata = {
  title: "gsm.asia",
  description: "GSM Tool Rental & Remote Servicing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}