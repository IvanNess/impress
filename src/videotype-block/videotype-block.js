import React from 'react'

import Videotype from './videotype'

import './videotype-block.scss'

const videotypes = [
    {
        stringCode: 'explainer',
        title: 'Explainer video',
        description: 'доступно и увлекательно рассказать о проекте'
    },
    {
        stringCode: 'learning',
        title: 'Обучающее видео',
        description: 'научить пользоваться продуктом'
    },
    {
        stringCode: 'presentation',
        title: 'Видеопрезентация',
        description: 'рассказать о миссии и достижениях компании'
    },
    {
        stringCode: 'advideo',
        title: 'Рекламное видео',
        description: 'увеличение продажи и узнаваемость'
    },
    {
        stringCode: 'videoblog',
        title: 'Видеоблог',
        description: 'развлекать клиентов и делиться своим экспертным мнением'
    },
    {
        stringCode: 'videocontent',
        title: 'Видеоконтент',
        description: 'доносить полезную и интересную информацию через соцсети'
    }
]

const VideotypeBlock = ()=>{
    return(
        <div className={`videotype-block`}>
            {videotypes.map(videotype=>{
                return (
                    <Videotype 
                        key={videotype.stringCode}
                        stringCode={videotype.stringCode}
                        title={videotype.title}
                        description={videotype.description}
                    />
                )
            })}
        </div>
    )
}

export default VideotypeBlock