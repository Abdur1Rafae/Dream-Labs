import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="bg-[#F9F9FF] min-h-screen overflow-y-auto">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
