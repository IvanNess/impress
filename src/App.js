import React, { Fragment, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import jwt from 'jsonwebtoken'

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
import Stat from './stat';

import { getFingerprint } from './utils'
import useFetch from './calc-app/hooks/useFetch'

import './App.scss'
import AppWrapper from './app-wrapper'

const Full = ({ match }) => {

  const appearance = match && match.params.param === 'calc' ? true : false

  return (
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
  const [{ error, isLoading, data }, doFetch] = useFetch(`${process.env.REACT_APP_SERVER_URI}/login`)
  const [{ appearanseError, appearanseIsLoading, appearanseData }, doAppearanseFetch] = useFetch(`${process.env.REACT_APP_SERVER_URI}/appearanse`)

  const doFetchCb = useCallback(doFetch, [])
  const doAppearanseFetchCb = useCallback(doAppearanseFetch, [])

  useEffect(() => {
    const tokenCheck = async () => {
      const fingerPrint = await getFingerprint()
      store.dispatch({ type: 'SET_FINGERPRINT', payload: { fingerPrint } })
      if (!localStorage.getItem('token')) {
        doFetchCb({ fingerPrint })
      } else {
        doAppearanseFetchCb({ token: localStorage.getItem('token'), fingerPrint })
      }
    }
    tokenCheck()
  }, [doFetchCb, doAppearanseFetchCb])

  useEffect(() => {
    const getData = async () => {
      console.log('DATA', data)
      if (data) {
        localStorage.setItem('token', data.token)
        const { user } = jwt.verify(data.token, process.env.REACT_APP_JWT_KEY)
        localStorage.setItem('user', user)
      }
    }
    getData()
  }, [data])

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/impress/' exact component={Full} />
          <Route path='/impress/stat' exact component={Stat} />
          <Route path='/impress/:param' component={Full} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
