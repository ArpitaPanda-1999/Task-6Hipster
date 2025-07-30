import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main
                className="min-h-screen transition-all duration-300 p-4 mt-16"
                style={{
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                    fontFamily: "var(--font)",
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>

        </BrowserRouter>
    );
}

export default App;