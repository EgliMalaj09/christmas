import './App.css';
import { Canvas } from '@react-three/fiber';
import { ChristmasScene } from './component/ChristmasScene';

function App() {
  return (
      <Canvas>
        <ChristmasScene />
      </Canvas>
  );
}

export default App;
