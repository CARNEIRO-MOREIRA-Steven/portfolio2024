import "./globals.css";


export const metadata = {
  title: "CARNEIRO MOREIRA Steven - Portfolio",
  description: "Bienvenue sur mon portfolio, je vous laisse me découvrir. Pour toutes demandes contactez moi ! ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
