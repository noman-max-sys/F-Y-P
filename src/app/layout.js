// app/layout.js

import Navbar from './components/Navbar';
 // Import Navbar CSS globally

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create next app" />
        <title>Create Next App</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
