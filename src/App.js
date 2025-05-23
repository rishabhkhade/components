import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import ProgressBar from "./components/progress-bar/ProgressBar";
import Input from "./components/inputs-field/Input";
import Steps from "./components/steps/Steps";
import ToDo from "./components/todo/ToDo";
import Search from "./components/search/Search";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Owner from "./components/owner/Owner";
import Tabs from "./components/tabs/Tabs";
import Services from "./components/servicess/Services";
import Download from "./components/download/Download";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/progress" element={<ProgressBar />} />
          <Route path="/input" element={<Input />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/search" element={<Search />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/owner" element={<Owner />} />
          <Route path="/tab" element={<Tabs />} />
          <Route path="/service" element={<Services />} />
          <Route path="/down" element={<Download />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
