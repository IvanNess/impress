import React, { useEffect, useState } from 'react'

import image from '../images/all.jpg'

import './welcome-block.scss'

const WelcomeBlock = () => {

    const [topAnimation, setTopAnimation] = useState(false)
    const [bottomAnimation, setBottomAnimation] = useState(false)
    const [leftAnimation, setLeftAnimation] = useState(false)
    const [rightAnimation, setRightAnimation] = useState(false)

    const [first, setFirst] = useState(true)

    useEffect(()=>{

        setTimeout(()=>{
            setFirst(false)
        }, 2100)

        setTimeout(()=>{
            setBottomAnimation(true)
        }, 0)
        setTimeout(()=>{
            setRightAnimation(true)
        }, 2000)
        setTimeout(()=>{
            setTopAnimation(true)
        }, 4000)
        setTimeout(()=>{
            setLeftAnimation(true)
        }, 6000)

        setTimeout(()=>{
            setBottomAnimation(false)
        }, 4100)
        setTimeout(()=>{
            setRightAnimation(false)
        }, 6100)
        setTimeout(()=>{
            setTopAnimation(false)
        }, 8100)
        setTimeout(()=>{
            setLeftAnimation(false)
        }, 10100)

        setInterval(()=>{

            setTimeout(()=>{
                setBottomAnimation(true)
            }, 0)
            setTimeout(()=>{
                setRightAnimation(true)
            }, 2000)
            setTimeout(()=>{
                setTopAnimation(true)
            }, 4000)
            setTimeout(()=>{
                setLeftAnimation(true)
            }, 6000)

            setTimeout(()=>{
                setBottomAnimation(false)
            }, 4100)
            setTimeout(()=>{
                setRightAnimation(false)
            }, 6100)
            setTimeout(()=>{
                setTopAnimation(false)
            }, 8100)
            setTimeout(()=>{
                setLeftAnimation(false)
            }, 10100)

        }, 8000)
    }, [])



    return (
        <div className={`welcome-block`}>
            <div className={`welcome-text`}>
                <div className={`welcome-headline`}>
                    <h1>
                        Тот самый видео продакшн, который Вы искали
                    </h1>

                </div>
                <div className={`welcome-description`}>
                    <p>
                        Создаем современные видео для любых Ваших задач:
                        привлечение и удержание клиентов, повышение лояльности,
                        обучение и техподдержка, продажи, улучшение имиджа.
                    </p>

                </div>
                <div className={`welcome-order`}>
                    <p>
                        Заказать видео >
                    </p>

                </div>
            </div>
            <div className={`animation-wrapper`}>
                <div className={`top ${topAnimation && 'animation'}`} ></div>
                <div className={`left-right-wrapper`}>
                    <div className={`left ${leftAnimation && 'animation'} ${first? 'first': ''}`} ></div>
                    <div className={`welcome-image-wrapper`}>
                        <img src={image} alt='' />
                    </div>
                    <div className={`right ${rightAnimation && 'animation'}`} ></div>
                </div>
                <div className={`bottom ${bottomAnimation && 'animation'}`} ></div>
            </div>
        </div>
    )
}

export default WelcomeBlock