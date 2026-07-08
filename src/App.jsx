import { Suspense } from 'react'
import './App.css'
import { ToastContainer} from 'react-toastify';
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Card from './components/Card/Card'


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const ticketsPromise = Promise.all([
  fetch("/tickets.json").then((res) => res.json()),
  delay(1200)
]).then(([data]) => data);

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={
        <div className="max-w-7xl mx-auto px-2 text-center py-10">
          <span className="loading loading-dots loading-xl"></span>
        </div>
      }>
        <Card ticketsPromise={ticketsPromise} />
      </Suspense>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App;