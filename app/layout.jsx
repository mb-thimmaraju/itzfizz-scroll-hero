import "./globals.css";

export const metadata = {
  title: "itzfizz — Find your way forward",
  description:
    "A better way to move. Discover the impact of smarter, more convenient pickup points with itzfizz.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {process.env.NODE_ENV === "production" && (
        <head>
          <link rel="stylesheet" href="./styles.css" />
        </head>
      )}
      <body>{children}</body>
    </html>
  );
}
