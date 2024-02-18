import { ClerkProvider } from "@clerk/nextjs";
import {dark} from "@clerk/themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
 <ClerkProvider appearance={{baseTheme:dark}}>
{children}

    </ClerkProvider>
    </main>
   
      
  );
}
