import SocketProvider from "./context/SocketProvider";
import "./globals.css";
import AuthProvider from "@/components/Authentication/AuthProvider/AuthProvider";

export const metadata = {
  title: "Fit Track",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
      <SocketProvider>
      <AuthProvider>{children}</AuthProvider>
      </SocketProvider>
      </body>
    </html>
  );
}
