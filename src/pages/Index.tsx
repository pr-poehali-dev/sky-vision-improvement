import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

const Index = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero onBooking={() => setModalOpen(true)} />
      <Featured onBooking={() => setModalOpen(true)} />
      <Promo />
      <Footer />
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
};

export default Index;
