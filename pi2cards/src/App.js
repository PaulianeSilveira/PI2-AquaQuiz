import React from 'react';
import'./Card.css';
import Card from './Components/Card.js';

// import logo from './logo.svg';


function App() {
  return (
    <div className='App'>
     <Card
     title ='Card title'
     imageUrl='https://voupassar.club/wp-content/uploads/2016/09/rio-madeira.jpg'
    //  image src = './Components/Images/foto1.jpg'
     body ='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti sunt consectetur repellendus
      commodi quidem rerum. Nulla sequi ratione odit? Eaque laboriosam facere eveniet atque molestias. Itaque 
      velit tempore laudantium fugiat!'/>
    </div>
  );
}

export default App;
