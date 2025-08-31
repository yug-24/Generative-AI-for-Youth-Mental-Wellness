import Navbar from "@/components/sahara/Navbar";
import Footer from "@/components/sahara/Footer";

export default function Privacy(){
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <Navbar />
      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-3 text-foreground/80">Your privacy matters. Sahara does not share your data. This is a placeholder policy page.</p>
      </main>
      <Footer />
    </div>
  );
}
