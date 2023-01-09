import { Box } from "@mui/system";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ChannelDetail from "./components/ChannelDetail";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import SearchFeed from "./components/SearchFeed";
import VideoDetail from './components/VideoDetail';

function App() {
  return (
    <>
      <Router>
        <Box sx={{ backgroundColor: '#000'}}>
          <Navbar />
          <Routes>
            <Route path="/" element= {<Feed />} />
            <Route path="/video/:id" element= {<VideoDetail />} />
            <Route path="/channel/:id" element= {<ChannelDetail />} />
            <Route path="/search/:searchTerm" element= {<SearchFeed />} />
          </Routes>
        </Box>
      </Router>
    </>
  );
}

export default App;
