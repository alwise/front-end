import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';
import {HomeLayout} from './Layouts';
import { About, HomePages, Predict } from './Pages';
import { AppRoutes } from './Utils';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <BrowserRouter>
       <Routes>
            <Route path={AppRoutes.home.path} element={<HomeLayout/>} >
                <Route path={AppRoutes.home.path}  element={<HomePages/>} />
                <Route path={AppRoutes.predict.path}  element={<Predict/>} />
                <Route path={AppRoutes.about.path}  element={<About/>} />
            </Route>
       </Routes>

    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
