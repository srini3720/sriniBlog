import Container from "@/components/Container";
import Footer from "@/components/footer";
import { MainNav } from "@/components/main-nav";
import { Navbar } from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
