import { Provider } from 'react-redux'
import './App.scss'

import { Board } from './components/job/board'
import { Layout } from './components/layout';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Board />
      </Layout>
    </Provider>
  );
}

export default App;
