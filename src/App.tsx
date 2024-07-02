import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="p-8 gap-8 flex flex-row items-center justify-center min-h-screen">
      <Sidebar />
      <div className="min-h-[700px] h-full  w-full flex flex-col items-start justify-start">
        <Navbar />
        <MainContent />  
      </div>
    </div>
  );
}
export default App;
