import Navbar from "@/components/Navbar";
import TopHeader from "../components/TopHeader";
import Footer from "@/components/Footer";


export default function Home() {
  return (
  <div>
    {/* Top-Header */}
    <TopHeader/>

    {/* Navbar */}
    <Navbar/>
<div className="w-full h-[200px] bg-purple-300">

</div>
    {/* Footer */}
    <Footer/>
  </div>
  );
}
