import React, {Fragment} from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
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
import ColorBar from './color-bar'
import Calc from './calc-app'

import './App.scss'
import AppWrapper from './app-wrapper'

const Full = ({match})=>{

  const appearance = match && match.params.param === 'calc'? true: false

  return(
    <Fragment>
      <Calc appearance={appearance} />
      <AppWrapper>
        <div className={`app`}>
          <MenuBar />
          <WelcomeBlock />
          <VideotypeBlock />
          <HeadBlock idx={'0'} />
          <VideoPanel />
          <HeadBlock idx={'1'} />
          <ServicePanel />
          <HeadBlock idx={'2'} />
          <ContactBlock />
        </div>
        <Footer />
        <ColorBar />
      </AppWrapper>
    </Fragment>
  )
}

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/impress/' exact component={Full}/>
          <Route path='/impress/:param' component={Full}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
