import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuHighlights from "@/components/MenuHighlights";
import Reviews from "@/components/Reviews";
import OrderNow from "@/components/OrderNow";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <MenuHighlights />
      <Reviews />
      <OrderNow />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
