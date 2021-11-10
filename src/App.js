import './App.css';
import { useSpring, animated } from 'react-spring';

function App() {
  const style = useSpring({
    loop: { reverse: true },
    from: { x: 100 },
    to: { x: 500 }
  });
  return (
    <div className="App">
      <div style={{ position: 'absolute' }}>
        <animated.div
          style={{
            width: 100,
            height: 100,
            backgroundColor: '#46e891',
            borderRadius: 20,
            ...style
          }}
        ></animated.div>
      </div>
    </div>
  );
}

export default App;
