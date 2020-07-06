import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

import VideoCalc from './VideoCalc'
import CalcHeader from './calc-header'
import ModalWindow from './modal-window'
import CalcButton from './calc-btn'
import CalcDisplay from './calc-display'
import { getFormErrors } from './utils'

import './app.scss'

const CalcApp = ({ calcAppClicked, outsideCalcAppClicked, showApp, appearance, showCalcApp}) => {

    const [redirect, setRedirect] = useState(false)

    useEffect(()=>{
        if(showApp!==null && !showApp){
            console.log('CALC_APP_SCROLL_UP', showApp)
            window.scrollBy(0, -200)
            setRedirect(true)
        }else{
            setRedirect(false)
        }
    }, [showApp])

    const className = appearance && [null, 'origin'].includes(showApp)? 'origin'
        : appearance? 
            showApp? 'show': 'hide'
            : showApp===null? '': showApp? 'show': 'hide'

    useEffect(()=>{
        if(className==='origin')
            showCalcApp('origin')
    }, [className])

    return (
        <div className={`calc-app-wrapper ${className}`} onClick={(e)=>{
            console.log('TARGET', e.target.className.includes('calc-app-wrapper'))
            if(e.target.className.includes('calc-app-wrapper')){
                console.log('HIDE')
                outsideCalcAppClicked()
            }
        }}>
            {redirect && <Redirect to='/impress'/>}
            <div className={`calc-app ${className}`} onClick={(e) => { 
                calcAppClicked() 
            }}>
                <CalcHeader />
                <VideoCalc />
                <CalcButton />
                <CalcDisplay />
                <ModalWindow />
            </div>
        </div>

    )
}

const mapStateToProps = ({ calc }) => ({
    showApp: calc.showApp
})

const mapDispatchToProps = ({
    calcAppClicked: () => ({ type: 'CALC_APP_CLICKED' }),
    outsideCalcAppClicked: ()=>({type: 'OUTSIDE_CALC_APP_CLICKED'}),
    showCalcApp: (data)=>({type: 'SHOW_CALC_APP', payload: {data}})
})

export default connect(mapStateToProps, mapDispatchToProps)(CalcApp)