import { useSelector} from 'react-redux';
import Counter from './container/Counter';

const App = () => {
  const state = useSelector((state) => state.count); // Accessing `count` state

  return (
    <div className='container'>
      <h1>Counter: {state}</h1>
    
      <Counter />
    </div>
  );
};

export default App;