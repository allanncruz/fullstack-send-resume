import ResumeForm from "./components/ResumeForm";
import Logo from "./assets/logo-paytour.svg"
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
       <img src={Logo} alt="Paytour" />
       <ResumeForm />
    </div>
  );
}

export default App;
 