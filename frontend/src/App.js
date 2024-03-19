import { LiveVideo } from "./svg";

function App() {
  const get = async () => {
    const res = await fetch("http://localhost:8000");
    console.log(res);
  };

  get();

  return (
    <div>
      <p>lorem ipsum dolor sit amet.</p>
      <LiveVideo color="blue" />
    </div>
  );
}

export default App;
