import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import ResumeForm from "./components/ResumeForm";
import GlobalStyles from "./styles/GlobalStyles";
import { colors } from "./styles/themes/colors";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={colors}>
        <GlobalStyles />
        <Header />
        <ResumeForm />
      </ThemeProvider>
    </div>
  );
}

export default App;
 