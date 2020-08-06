import React, {useEffect, useState, useRef} from 'react'

import ServiceTile from './service-tile'

import './service-panel.scss'

const services = [
    
        {
            stringCode: 'all',
            title: 'Ролик "под ключ"',
            description: 'полный комплекс услуг по созданию видеороликов'
        },
        {
            stringCode: 'scenario',
            title: 'Написание сценариев',
            description: 'оригинальные концепции, индивидуальный подход, безграничный креатив'
        },
        {
            stringCode: 'film',
            title: 'Видеосъемка',
            description: 'любой сложности и для любого бюджета, современная техника'
        },
        {
            stringCode: 'edit',
            title: 'Видеомонтаж',
            description: 'любой сложности, аккуратно и креативно'
        },
        {
            stringCode: 'animation',
            title: 'Анимация',
            description: '2D и 3D анимация, моушн-дизайн,  whiteboard анимация, анимированные персонажи'
        },
        {
            stringCode: 'dubbing',
            title: 'Дикторская озвучка',
            description: 'на русском и иностранных языках, большой выбор дикторов'
        },
        {
            stringCode: 'language',
            title: 'Языковая поддержка',
            description: 'перевод и локализация роликов, добавление субтитров'
        },
        {
            stringCode: 'budget',
            title: 'Бюджетные решения',
            description: 'видеоролики по шаблонам, использование футажей, бюджетные исполнители'
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