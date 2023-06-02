import { useRef } from "react";
import DisplaySection from "./components/DisplaySection";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import SoundSection from "./components/SoundSection";
import WebgiViewer from "./components/WebgiViewer";
import Loader from "./components/Loader";
function App() {
 const webgi=useRef()
 const contentRef=useRef()
 const handlePreview=()=>{
  webgi.current.triggerPreview()
 }
  return (
   
    <div className="App">
      <Loader/>
      <div id="content" ref={contentRef}>
              <Navbar/>
      <Jumbotron/>
      <SoundSection/>
      <DisplaySection triggerPreview={handlePreview}/>
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgi}/>
    </div>
  );
}
//i have created div and put all my elements in't so when i click try me i will get only webgiViewer
export default App;
