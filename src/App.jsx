import "./App.css";
import AudioPage from "./pages/AudioPage";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/audio" element={<AudioPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
