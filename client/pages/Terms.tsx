import Navbar from "@/components/sahara/Navbar";
import Footer from "@/components/sahara/Footer";

export default function Terms(){
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <Navbar />
      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p className="mt-3 text-foreground/80">Kind, respectful, and safe usage only. This is a placeholder terms page.</p>
      </main>
      <Footer />
    </div>
  );
}
