import { Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Layout from './components/Layout'
import SeasonPage from './pages/SeasonPage'

import './index.css'
import './styles/type.css'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SeasonPage />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App
