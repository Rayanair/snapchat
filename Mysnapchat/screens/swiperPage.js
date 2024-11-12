import React from 'react';
import Swiper from 'react-native-swiper'

import Chat from './ChatPage';
import Cameras from './Camera';


  function SwiperPage(params) {

    const token = params.route.params.token;
    const email = params.route.params.email;
    const id = params.route.params.id;
    const username = params.route.params.username;
    
  return (
    <Swiper showsButtons={true}>
      <Chat id={id} email={email} username={username} token={token} />
      <Cameras id={id} email={email} username={username} token={token}/>
  </Swiper>
  )
    
  }

  export default SwiperPage;