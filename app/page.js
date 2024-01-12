import Header from "./components/Header"
import Greet from "./components/Greet"
import About from "./components/About"

export default function Home() {
  return (
    <div className="site">
      <Header />
      <Greet />
      <About />
    </div>
  )
}
