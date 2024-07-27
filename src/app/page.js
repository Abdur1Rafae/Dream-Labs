import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Form from "@/components/Form";

export default function Home() {
  return (
    <div className="bg-[#f1f2f3] min-h-screen overflow-hidden">
      <Header/>
      <Main/>
      <Form/>
      <Footer/>
    </div>
  );
}
