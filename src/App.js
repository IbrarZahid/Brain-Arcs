import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/Views/About/About";
import Blog from "./Components/Views/Blogs/Blog";
import BlogsShowFeed from "./Components/Views/Blogs/BlogsShow/BlogsShowFeed";
import Contact from "./Components/Views/Contact/Contact";
import Home from "./Components/Views/home/Home";
import Pricing from "./Components/Views/Pricing/Pricing";
import Work from "./Components/Views/Work/Work";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="About" element={<About />} />
          <Route path="Work" element={<Work />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="BlogsShowFeed" element={<BlogsShowFeed />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);