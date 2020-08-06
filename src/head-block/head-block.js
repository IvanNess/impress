import React, {useRef, useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

import {isInTheView} from '../utils'

import './head-block.scss'

const headBlocks = [
    {
        id: '0',
        stringCode: 'examples',
        headline: 'Примеры работ',
        description: 'Каждое видео - это история, которую важно правильно рассказать. Мы заботимся о том, чтобы эта история была понятной и увлекательной, и обязательно приносила результаты.'
    },
    {
        id: '1',
        stringCode: 'services',
        headline: 'Наши Услуги',
        description: 'Мы следим за развитием технологий и трендами современного видеомаркетинга и оказываем самые востребованные на сегодня услуги. Вы можете заказать ролик “под ключ” или только отдельные услуги.'
    },
    {
        id: '2',
        headline: 'Контакт',
        stringCode: 'contact',
        description: `Давайте познакомимся! Расскажите нам о Вашем проекте и о своих целях. И мы придумаем, как мы сможем Вам помочь.`
    },
]

const HeadBlock = ({ idx }) => {

    const [appeared, setAppeared] = useState(false)

    const location = useLocation()

    const ref = useRef(null)

    const { description, headline, stringCode } = headBlocks[idx]

    useEffect(()=>{
        console.log('LOCATION', location)
        if(location.hash===`#${stringCode}`){
            ref.current.scrollIntoView({block: "start", behavior: "smooth"})
        }
    }, [location, ref])

    window.addEventListener('scroll', () => {
        if (isInTheView(ref)) {
            setAppeared(true)
        }
    })

    return (
        <div className={`head-block ${stringCode} ${appeared && 'appeared'}`} ref={ref}>
            <div className={`flex-wrapper`}>
                <div className={`headline`}>
                    <h2>
                        {headline}
                    </h2>
                </div>
                <div className={`description ${stringCode}`}>
                    <p>
                        {description}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default HeadBlock