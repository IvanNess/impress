import React, {useRef, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

import './head-block.scss'

const headBlocks = [
    {
        id: '0',
        stringCode: 'examples',
        headline: 'Примеры работ',
        description: 'Каждое видео - это история, которую важно правильно рассказать. Мы гордимся, когда наши видео приносят свои плоды и успех.'
    },
    {
        id: '1',
        stringCode: 'services',
        headline: 'Наши Услуги',
        description: 'Каждое видео - это история, которую важно правильно рассказать. Мы гордимся, когда наши видео приносят свои плоды и успех.'
    },
    {
        id: '2',
        headline: 'Контакт',
        stringCode: 'contact',
        description: 'Расскажите нам о своем проекте, пожеланиях и мечтах. Задайте свои вопросы. Мы обязательно постараемся помочь.'
    },
]

const HeadBlock = ({ idx }) => {

    
    const location = useLocation()

    const ref = useRef(null)

    const { description, headline, stringCode } = headBlocks[idx]

    useEffect(()=>{
        console.log('LOCATION', location)
        if(location.hash===`#${stringCode}`){
            ref.current.scrollIntoView({block: "start", behavior: "smooth"})
        }
    }, [location, ref])


    return (
        <div className={`head-block ${stringCode}`} ref={ref}>
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