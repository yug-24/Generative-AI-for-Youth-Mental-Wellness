import Navbar from "@/components/sahara/Navbar";
import Footer from "@/components/sahara/Footer";
import AuthForm from "@/components/sahara/AuthForm";

export default function Signup() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <Navbar />
      <AuthForm mode="signup" />
      <Footer />
    </div>
  );
}
