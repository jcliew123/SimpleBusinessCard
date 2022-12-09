import React from 'react'
import './app.css';
import ProfilePic from './images/profile_pic.jpeg';
import Header from './components/Header';
import ButtonsList from './components/ButtonsList';
import Footer from './components/Footer';
import TextContent from './components/TextContent';

const App = () => {
  return (
    <div className='container'>
      <div className='card-container'>
        <img src={ProfilePic} alt='Profile Picture' className='profile-pic'/>
        <div className='main-content'>
          <Header />
          <ButtonsList />
          <TextContent />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App;