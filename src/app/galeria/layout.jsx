import Header from "@/components/Header";

import Footer from "@/components/Footer";
import Contactos from "@/components/Contactos";

export default function Layout({ children }) {
  return (
    <>
      <section className="mt-2">
        <Header />
      </section>
      <div>{children}</div>
      <Contactos />
      <Footer />
    </>
  );
}
