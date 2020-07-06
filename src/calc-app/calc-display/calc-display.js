import React, { useEffect, useRef } from 'react'
import {connect} from 'react-redux'

import './calc-display.scss'

const CalcDisplay = ({error, data, isLoading})=>{
    const calcRef = useRef(null)

    useEffect(()=>{
        console.log('CALC_DISPLAY_WINDOW_SCROLL')
        console.log(window.getComputedStyle(calcRef.current).height)
        if(data!==null || isLoading){
            window.scrollBy(0, parseFloat(window.getComputedStyle(calcRef.current).height))
        }
    }, [data, isLoading])
    return(
        <div className={`calc-display ${(data || isLoading || error)? `show`: ``}`} ref={calcRef}>
            {data && <div className={`header`} >
                <p>Предполагаемая стоимость:</p>
            </div>}
            {data && <div className={`result`} >
                {data.min===data.max? <p>{data.min} USD</p>:
                <p>от {data.min} USD до {data.max} USD</p>}
            </div>}
            {isLoading && <div className={`loading`} >
                <p>Подождите. Происходит просчет...</p>
            </div>}
            {error && <div className={`error`}>
                {error==='red_squares'? <p>Выберите или заполните выделенные поля...</p>:
                <p>Ивините, произошла ошибка...</p>}
            </div>}
        </div>
    )
}

const mapStateToProps = ({calc: {fetch}})=>({
    error: fetch.error,
    data: fetch.data,
    isLoading: fetch.isLoading
})

export default connect(mapStateToProps)(CalcDisplay)