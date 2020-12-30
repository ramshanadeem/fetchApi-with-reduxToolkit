import logo from './logo.svg';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/store';
import AddPost from './AddPost';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AddPost/>
    </div>
    </Provider>
  );
}

export default App;
