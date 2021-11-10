import './App.css';
import { useSpring, animated } from 'react-spring';

function App() {
  const style = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 100 }
  });
  console.log(style);
  return (
    <div className="App">
      <div style={{ position: 'absolute' }}>
        <animated.div
          style={{
            width: 80,
            height: 80,
            backgroundColor: '#46e891',
            borderRadius: 16,
            ...style
          }}
        ></animated.div>
      </div>
    </div>
  );
}

export default App;
