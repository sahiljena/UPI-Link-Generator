import Header from "./Components/Header";
import PayForm from "./Pages/PayForm";
import Paylink from "./Pages/PayLink";
import { Routes, Route } from 'react-router-dom';
import Footer  from "./Components/Footer";
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' exact element={<PayForm/>} />
      <Route path='/:id' exact element={<Paylink />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
