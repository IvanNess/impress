import React from 'react'

import FormBlock from './form-block'
import AllContacts from './all-contacts'

import './contact-block.scss'

const ContactBlock = ()=>{
    return(
        <div className={`contact-block`}>
            <FormBlock/>
            <AllContacts/>
        </div>
    )
}

export default ContactBlock