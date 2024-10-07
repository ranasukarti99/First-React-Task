
import './App.css';
import Card from './components/card';
import Info from './components/test';
import Header from './header';
import AboutUs from './components/AboutUs';
import Form from './components/form';
import Setbtns from './btnsec';
import Data from './components/names';
import CardTwo from './components/card2';
import {BrowserRouter,Route,Routes}  from "react-router-dom";
import PageNotFound from './components/PageNotFound';
import Main from './components/MainPage';
import Services from './components/Services';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';
import ContactUs from './components/ContactUs';


function App() {
  const data = {email:'test@gmail.com',phone:'959658962'}
  return (
    <>
     {/* <Header/>
     <Us/>
     <Info data={data} />
     <Form/>
     <Data/>
     <Setbtns/>
     <Card/>
     <CardTwo/> */}

     <BrowserRouter>
     <Header/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/blogs' element={<BlogPage/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/login' element={<Form/>}/>
      <Route path='/card' element={<CardTwo/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
     </BrowserRouter>
    </>
   
  );
}

export default App;
