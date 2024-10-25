import {Route,createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import MainLayout from './layouts/MainLayout';
import React from 'react'
import Homepage from './pages/Homepage';
import Jobspage from './pages/Jobspage';
import NotFoundpage from './pages/NotFoundpage';
import Jobpage,{JobLoader} from './pages/Jobpage';
import AddjobPage from './pages/AddjobPage';

  
const App = () => {
  const addJob = async(newJob) => {

    const res=await fetch('/api/jobs', {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(newJob),
    });
    return;
  
  };
  
  
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
      <Route index element ={<Homepage />}/>
      <Route path='/jobs' element={<Jobspage />}/>
      <Route path='/add-job' element={<AddjobPage addJobSubmit={addJob} />}/>
      <Route path='/jobs/:id' element={<Jobpage />} loader={JobLoader}/>
      <Route path='*' element={<NotFoundpage />}/>
      
  
    </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  );
};

export default App;