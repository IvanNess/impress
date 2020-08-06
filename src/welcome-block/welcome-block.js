import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import lozad from 'lozad'

import image from '../images/placeholder.jpg'
import video from '../videos/videomini.mp4'

import './welcome-block.scss'

const WelcomeBlock = () => {

    useEffect(() => {
        const observer = lozad() // lazy loads elements with default selector as '.lozad'
        observer.observe()
    }, [])

    // const [topAnimation, setTopAnimation] = useState(false)
    // const [bottomAnimation, setBottomAnimation] = useState(false)
    // const [leftAnimation, setLeftAnimation] = useState(false)
    // const [rightAnimation, setRightAnimation] = useState(false)

    // const [first, setFirst] = useState(false)

    // useEffect(()=>{

    //     console.log('WELCOME_BLOCK')

    //     const t = 2000

    //     setTimeout(()=>{
    //         setFirst(false)
    //     }, t+100)


    //     const timeout = ()=>{
    //         setTimeout(()=>{
    //             setTopAnimation(false)
    //             setBottomAnimation(true)

    //             setTimeout(()=>{
    //                 setLeftAnimation(false)
    //                 setRightAnimation(true)

    //                 setTimeout(()=>{
    //                     setBottomAnimation(false)
    //                     setTopAnimation(true)

    //                     setTimeout(()=>{
    //                         setRightAnimation(false)
    //                         setLeftAnimation(true)

    //                         setTimeout(()=>{
    //                             timeout()
    //                         }, t)

    //                     }, t)

    //                 }, t)

    //             }, t)

    //         }, 0)

    //     }


    //     requestAnimationFrame(()=>{
    //         timeout()
    //     })

    // }, [])



    return (
        <div className={`welcome-block`}>
            <div className={`welcome-text`}>
                <div className={`welcome-headline`}>
                    <h1>
                        Тот самый видео-продакшн и студия видеомаркетинга
                    </h1>

                </div>
                <div className={`welcome-description`}>
                    <p>
                        Создаем современные видео для любых
                        Ваших задач: привлечение и удержание
                        клиентов, обучение и техподдержка,
                        продажи, увеличение узнаваемости,
                        развитие статуса эксперта и др.
                    </p>

                </div>
                <div className={`welcome-order`}>
                    <Link to='/impress/#contact'>
                        <p>
                            Заказать видео >
                        </p>
                    </Link>

                </div>
            </div>
            {/* <div className={`media-wrapper`}>
                <div className={`top ${topAnimation && 'animation'}`} ></div>
                <div className={`left-right-wrapper`}>
                    <div className={`left ${leftAnimation && 'animation'} ${first? 'first': ''}`} ></div>
                    <div className={`welcome-image-wrapper`}>
                        <img src={image} alt='' />
                    </div>
                    <div className={`right ${rightAnimation && 'animation'}`} ></div>
                </div>
                <div className={`bottom ${bottomAnimation && 'animation'}`} ></div>
            </div> */}

            <div className={`media-wrapper`}>
                <video
                    data-poster={image}
                    className="lozad"
                    autoPlay muted loop playsInline
                    width="512" height="304"
                >
                    <source data-src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default WelcomeBlock