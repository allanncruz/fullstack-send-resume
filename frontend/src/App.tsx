import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import ResumeForm from "./components/ResumeForm";
import GlobalStyles from "./styles/GlobalStyles";
import { colors } from "./styles/themes/colors";
import ResumesList from "./components/ResumesList";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={colors}>
        <GlobalStyles />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<ResumeForm />} />
              <Route path="/resumes" element={<ResumesList />} />
            </Routes>
          </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
 