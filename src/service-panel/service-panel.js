import React, {useEffect, useState, useRef} from 'react'

import ServiceTile from './service-tile'

import './service-panel.scss'

const services = [
    
        {
            stringCode: 'all',
            title: 'Ролики "под ключ"',
            description: 'Оригинальные концепции, индивидуальный подход, безграничный креатив'
        },
        {
            stringCode: 'scenario',
            title: 'Неписание сценариев',
            description: 'Оригинальные концепции, индивидуальный подход, безграничный креатив'
        },
        {
            stringCode: 'film',
            title: 'Видеосъемка',
            description: 'Оригинальные концепции, индивидуальный подход, безграничный креатив'
        },
        {
            stringCode: 'animation',
            title: 'Анимация',
            description: 'Оригинальные концепции, индивидуальный подход, безграничный креатив'
        },
        {
            stringCode: 'edit',
            title: 'Видеомонтаж',
            description: 'Оригинальные концепции, индивидуальный подход, безграничный креатив'
        },
        {
            stringCode: 'dubbing',
            title: 'Дикторская озвучка',
            description: 'Оригинальные концепции, индивидуальный подход, безграничный креатив'
        },
        {
            stringCode: 'language',
            title: 'Языковая поддержка',
            description: 'Оригинальные концепции, индивидуальный подход, безграничный креатив'
        },
        {
            stringCode: 'budget',
            title: 'Бюджетные решения',
            description: 'Оригинальные концепции, индивидуальный подход, безграничный креатив'
        }
]

const ServicePanel = ()=>{

    const [show, setShow] = useState(false)
    const ref = useRef(null)

    window.addEventListener('scroll', ()=>{
        if(ref.current && document.documentElement.clientHeight > ref.current.getBoundingClientRect().y){
            setShow(true)
        }
    })

    return(
        <div className={`service-panel ${show? 'show': ''}`} ref={ref}>
            {services.map(service=>{
                return <ServiceTile
                    key={service.stringCode}
                    stringCode={service.stringCode}
                    title={service.title}
                    description={service.description}
                />
            })}
        </div>
    )
}

export default ServicePanel