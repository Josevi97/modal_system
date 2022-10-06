import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ModalProvider from './contexts/modal.context';
import AboutView from './views/AboutView/AbutView';
import HomeView from './views/HomeView/HomeView';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ModalProvider />}>
          <Route path='/' element={<HomeView />}></Route>
          <Route path='/about' element={<AboutView />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )

}

export default App;
