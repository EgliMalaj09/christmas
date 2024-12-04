import './App.css';
import { Canvas } from '@react-three/fiber';
import { ChristmasScene } from './component/ChristmasScene';

function App() {
  return (
    <div className="App">
      <Canvas>
        <ChristmasScene />
      </Canvas>
    </div>
  );
}

export default App;
