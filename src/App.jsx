import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});
function App() {
  return (
    <>
    <Router>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </ThemeProvider>
    </Router>
    </>
  )
}

export default App
