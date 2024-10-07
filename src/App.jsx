import "./App.css";
import CategoryBody from "./layout/CategoryBody"; 
import Menubar from "./layout/Menubar";
import Topnav from "./layout/Topnav";

function App() {
  return (

    <div className="h-screen max-w-[1280px] mx-auto  ">
      <Topnav />
      <main>
        <CategoryBody/>
      </main>
      <Menubar/>
    </div>
  );
}

export default App;
