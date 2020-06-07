import React from 'react'

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

    const { description, headline, stringCode } = headBlocks[idx]

    return (
        <div className={`head-block ${stringCode}`}>
            <div className={`flex-wrapper`}>
                <div className={`headline`}>
                    {headline}
                </div>
                <div className={`description ${stringCode}`}>
                    {description}
                </div>
            </div>

        </div>
    )
}

export default HeadBlock