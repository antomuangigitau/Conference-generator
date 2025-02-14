import Navbar from "./components/Navbar";
import TicketContainer from "./components/TicketContainer";

function App() {
  return (
    <>
      <div className="px-6 bg-[#041E23] min-h-screen pt-6 sm:px-10 ">
        <Navbar />
        <div className="flex justify-center mt-10 pb-6">
          <TicketContainer />
        </div>
      </div>
    </>
  );
}

export default App;
