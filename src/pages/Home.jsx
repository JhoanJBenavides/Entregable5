import { useDispatch } from "react-redux";
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";


const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setTrainerName(e.target.trainerName.value))
    navigate("/pokedex")

  }


  return (
    <section className="grid grid-rows-[1fr_auto] h-screen overflow-hidden">
      <div className="text-center justify-self-center self-center">
        <main>
          <header>
            <img src="/images/pokedex.png" alt=""/>
          </header>
          <h3 className="font-semibold">HELLO TRAINER!</h3>
          <p className="font-bold " >Write your name for start...</p>
          <form onSubmit={handleSubmit}>
            <input 
            className="border-2 p-1 gap-1"
            name="trainerName" 
            placeholder="your name..." 
            type="text"
            autoComplete="off" 
            required
            />
            <button className="p-1 w-48 font-semibold bg-red-500 hover:bg-red-700 hover:text-white transition-colors" type="submit">Start</button>
          </form>
        </main>
      </div>
      <Footer />
    </section>
  );
};
export default Home;
