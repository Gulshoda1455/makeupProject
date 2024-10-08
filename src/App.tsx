import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
import './App.css'
import Home from './page/Home'
import { Suspense } from 'react';
import Shop from './page/Shop';
import Builder from './page/Builder';
import Science from './page/Science';
import About from './page/About';
import Holiday from './page/Holiday';

function App() {
  

  return (
    <>
      <BrowserRouter>
   <Suspense fallback={<div>Loading...</div>}>
   <Routes>
        {/* <Route path='/' element={<Layout/>}> */}
          <Route index element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/builder' element={<Builder/>}/>
          <Route path='/science' element={<Science/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/Holiday' element={<Holiday/>}/>
        {/* </Route> */}
        
      </Routes>
   </Suspense>
     
   </BrowserRouter>
    </>
  )
}

export default App
