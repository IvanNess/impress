import React from 'react';
import { Provider } from 'react-redux'

import store from './store'
import MenuBar from './menu-bar'
import WelcomeBlock from './welcome-block'
import VideotypeBlock from './videotype-block'
import HeadBlock from './head-block'
import VideoPanel from './video-panel'
import ServicePanel from './service-panel'
import ContactBlock from './contact-block'
import Footer from './footer'
import ColorBar from './color-bar';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="app-wrapper" onClick={()=>{
          if(store.getState().showPanelItems===true)
            store.dispatch({type: 'SET_SHOW_PANEL_ITEMS', payload: false})
        }}>
        <div className="app">
          <MenuBar />
          <WelcomeBlock/>
          <VideotypeBlock/>
          <HeadBlock idx={'0'}/>
          <VideoPanel/>
          <HeadBlock idx={'1'}/>
          <ServicePanel/>
          <HeadBlock idx={'2'}/>
          <ContactBlock/>
        </div>
        <Footer/>
        <ColorBar/>
      </div>
    </Provider>
  );
}

export default App;
