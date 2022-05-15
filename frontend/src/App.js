import { Provider } from 'react-redux'
import './App.scss'

import { Board } from './components/job/board'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Board />
      </div>
    </Provider>
  );
}

export default App;
