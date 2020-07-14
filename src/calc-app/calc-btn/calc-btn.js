import React, {useEffect, useCallback} from 'react'
import {connect} from 'react-redux'

import useFetch from '../hooks/useFetch'
import {onCountClick} from '../utils'

import './calc-btn.scss'

//const url = 'https://sleepy-chamber-55762.herokuapp.com/'
const url = process.env.REACT_APP_SERVER_URI

const CalcButton = ({calc, setLoading, setFetchData, setFetchError, openWindow, appClicked, showErrors, fingerPrint})=>{

    const [{error, isLoading, data}, doFetch] = useFetch(url)

    useEffect(()=>{
        if(isLoading){
            setLoading()
        }
        if(error){
            setFetchError(error)
        }
        if(data){
            setFetchData(data)
        }
    }, [isLoading, error, data, setLoading, setFetchError, setFetchData])

    const loading = isLoading? 'loading': ''

    console.log('FROM HOOK', error, isLoading, data)

    return(
        <div className={`calc-btn`}>
            <div 
                className={`btn ${loading}`} 
                onClick={(e)=>{
                    console.log('URI', url, process)
                    const res = onCountClick(calc, doFetch, showErrors, appClicked, isLoading, fingerPrint)
                    if(res==='error'){
                        setFetchError('red_squares')
                    }
                }}
            >
                Рассчитать
            </div>
        </div>
    )
}

const mapStateToProps =(state)=>({
    calc: state.calc,
    fingerPrint: state.fingerPrint
})

const mapDispatchToProps=({
    setLoading: ()=>({type: 'LOADING'}),
    setFetchError: (error)=>({type: 'FETCH_ERROR', payload: {error}}),
    setFetchData: (data)=> ({type: 'DATA_LOADED', payload: {data}}),
    openWindow: (data)=>({type: 'OPEN_WINDOW', payload: data}),
    appClicked: ()=>({type: 'CALC_APP_CLICKED', payload: {isInput: true}}),
    showErrors: (data)=>({type: 'SHOW_ERRORS', payload: data})
})

export default connect(mapStateToProps, mapDispatchToProps)(CalcButton)