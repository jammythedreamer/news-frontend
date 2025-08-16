import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./components/HomePage";
import NewsPage from "./components/NewsPage";
import KeywordManagement from "./components/KeywordManagement";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/keywords" element={<KeywordManagement />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
