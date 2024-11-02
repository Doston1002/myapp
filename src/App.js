import { useSelector } from 'react-redux';
import Counter from './container/Counter';

const App = () => {
  const count = useSelector((state) => state.count.count); // Corrected state access

  return (
    <div className='container'>
      <h1>Counter: {count}</h1>
      <Counter />
    </div>
  );
};

export default App;
