import './App.css';
import Header from './Header'
import Products from './Products'
import {Provider} from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Header />
    <Products />
    </div>
    </Provider>
  );
}

export default App;
