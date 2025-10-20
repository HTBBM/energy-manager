import ParticlesComponent from "./components/particles";
import MainPage from "./pages/mainPage";

export default function App() {
  return (
    <div className="bg-[#fff0d4]">
      <ParticlesComponent id="particles" />
      <MainPage />
    </div>
  );
}
