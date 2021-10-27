import "./styles.css";
import { GetDadJoke } from "./GetDadJoke";
import { Footer } from "./Footer";

export default function App() {
  return (
    <div className="App">
      <h1>Dad Jokes</h1>
      <GetDadJoke />
      <Footer />
    </div>
  );
}
