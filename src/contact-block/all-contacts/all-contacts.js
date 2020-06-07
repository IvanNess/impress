import React from 'react'

import image from '../../images/all.jpg'

import './all-contacts.scss'

const AllContacts = () => {
    return (
        <div className={`all-contacts`}>
            <div className={`email-block`}>
                <div className={`title`}>
                    Email:
                </div>
                <div className={`content`}>
                    impressstudio@gmail.com
                </div>
            </div>

            <div className={`messengers-block`}>
                <div className={`title`}>
                    Телефон, мессенджеры:
                </div>
                <div className={`content`}>
                    +375 44 725-64-19
                    <div className={`image-wrapper a1`}>
                        <img src={image} alt='' />
                    </div>
                    <div className={`image-wrapper wattsapp`}>
                        <img src={image} alt='' />
                    </div>
                    <div className={`image-wrapper viber`}>
                        <img src={image} alt='' />
                    </div>
                    <div className={`image-wrapper telegram`}>
                        <img src={image} alt='' />
                    </div>
                </div>
            </div>

            <div className={`skype-block`}>
                <div className={`title`}>
                    Skype:
                </div>
                <div className={`content`}>
                    impress.studio
                </div>
            </div>

            <div className={`sociall-block`}>
                <div className={`title`}>
                    Социальные сети:
                </div>
                <div className={`content`}>
                    <div className={`image-wrapper instagram`}>
                        <img src={image} alt='' />
                    </div>
                    <div className={`image-wrapper facebook`}>
                        <img src={image} alt='' />
                    </div>
                    <div className={`image-wrapper vk`}>
                        <img src={image} alt='' />
                    </div>
                    <div className={`image-wrapper youtube`}>
                        <img src={image} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllContacts