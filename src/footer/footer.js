import React from 'react'

import image from '../images/all.jpg'

import './footer.scss'

const Footer = () => {
    return (
        <div className={`footer`}>
            <div className={`footer-inner`}>
                <div className={`footer-logo`}>
                    <div className={`image-wrapper`}>
                        <img src={image} alt='' />
                    </div>
                </div>
                <div className={`footer-info`}>
                    <div className={`text-wrapper`}>
                        Юридическая информация: ИП Смашная М.В. УНП 192798020
                        свидетельство о госюрегистрации № 192798029 от 04.04.2017
                </div>

                </div>
            </div>

        </div>
    )
}

export default Footer