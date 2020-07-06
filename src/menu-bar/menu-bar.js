import React from 'react'
import {NavLink} from 'react-router-dom'

import MenuPanel from './menu-panel'

import './menu-bar.scss'

const MenuBar = () => {
    return (
        <div className={`menu-bar`}>
            <NavLink className={`logo-wrapper`} to='/impress'>
                <svg id="Layer_1" data-name="Layer 1"  width={152} height={72} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1793.65 510.35">
                    <title>impress</title>
                    <path className='word' d="M109.55,21.8V280.1H32.33V21.8Z"/>
                    <path className='word' d="M171.82,280.1V21.8h47.82A21.37,21.37,0,0,1,231.72,25a17.3,17.3,0,0,1,6.85,9.72l4.24,14a143.28,143.28,0,0,1,13.45-12.33,85.83,85.83,0,0,1,15.07-9.72,81.82,81.82,0,0,1,38-8.84q23.42,0,38.74,12.08t23.29,32.26a76.43,76.43,0,0,1,15.81-20.43A85.36,85.36,0,0,1,407.33,28a98.28,98.28,0,0,1,22.91-7.72,118.89,118.89,0,0,1,24-2.49q22.17,0,39.36,6.6a75,75,0,0,1,28.77,19.18Q534,56.18,540,74.48T546,116V280.1H468.73V116q0-40.1-34.38-40.1-15.69,0-26,10.34T398,116V280.1H320.77V116q0-22.17-8.72-31.13t-25.65-9a43.31,43.31,0,0,0-19.81,4.73A72.1,72.1,0,0,0,249,93.29V280.1Z" />
                    <path className='word' d="M600.74,362.05V21.8h47.83A21.39,21.39,0,0,1,660.65,25a17.35,17.35,0,0,1,6.85,9.72l5.73,18.93a130.1,130.1,0,0,1,16.06-15,106.16,106.16,0,0,1,18.43-11.58,101.08,101.08,0,0,1,21.18-7.59,105.14,105.14,0,0,1,24.78-2.74,79.5,79.5,0,0,1,37.36,9,86.23,86.23,0,0,1,29.65,25.91q12.45,16.94,19.55,41.47t7.1,55.67q0,29.14-8.1,53.8t-22.66,42.85a104.35,104.35,0,0,1-34.88,28.39q-20.3,10.22-45,10.22-20.18,0-33.87-5.73A91.78,91.78,0,0,1,678,262.91v99.14Zm126-286.2a66.69,66.69,0,0,0-15.32,1.62,55.84,55.84,0,0,0-12.7,4.61,48,48,0,0,0-10.84,7.59,113,113,0,0,0-10,10.59v109.6q8.71,9.7,18.93,13.57a59.94,59.94,0,0,0,21.42,3.86A45.55,45.55,0,0,0,738,223.06a40.12,40.12,0,0,0,15.57-13.58q6.59-9.33,10.33-24.28t3.74-36.37q0-20.42-3-34.37T756.3,91.91q-5.37-8.58-12.83-12.32A36.69,36.69,0,0,0,726.78,75.85Z" />
                    <path className='word' d="M888.68,280.1V21.8h45.83a39.29,39.29,0,0,1,9.59,1,17,17,0,0,1,6.48,3.12,13.29,13.29,0,0,1,4,5.6A51.59,51.59,0,0,1,956.93,40l4.23,24.16q14.21-21.91,31.89-34.62a64.77,64.77,0,0,1,38.61-12.7q17.67,0,28.39,8.46l-10,56.8c-.67,3.48-2,5.93-4,7.34a13.46,13.46,0,0,1-8,2.12,52.63,52.63,0,0,1-10-1.12,77.07,77.07,0,0,0-14.45-1.12q-30.39,0-47.82,32.38V280.1Z" />
                    <path className='word' d="M1205,17.81q25.65,0,47,8A102.22,102.22,0,0,1,1288.59,49a105.75,105.75,0,0,1,23.91,37.24q8.6,22,8.59,49.94a110.81,110.81,0,0,1-.74,14.2,22.4,22.4,0,0,1-2.75,8.71,10.44,10.44,0,0,1-5.35,4.49,25.1,25.1,0,0,1-8.59,1.24h-149q3.73,32.39,19.68,47t41.1,14.57q13.45,0,23.16-3.24a117.94,117.94,0,0,0,17.32-7.22q7.59-4,14-7.23a29,29,0,0,1,13.32-3.24q9.21,0,14,6.73l22.42,27.65A115,115,0,0,1,1293.82,262a134,134,0,0,1-28.4,13.45,154.11,154.11,0,0,1-29.14,6.73,219.88,219.88,0,0,1-27.77,1.87,144.84,144.84,0,0,1-50.94-8.85A116.87,116.87,0,0,1,1116,249q-17.82-17.43-28.15-43.34t-10.33-60.28a136.37,136.37,0,0,1,8.84-49.07A119.16,119.16,0,0,1,1151.84,28Q1175.38,17.82,1205,17.81Zm1.49,53.31q-22.17,0-34.62,12.57t-16.44,36.25h96.4a68.17,68.17,0,0,0-2.37-17.94,43.45,43.45,0,0,0-7.72-15.56,39.29,39.29,0,0,0-14.08-11.09Q1219,71.12,1206.51,71.12Z" />
                    <path className='word' d="M1523.35,78.34a20,20,0,0,1-6.35,6.73,16.69,16.69,0,0,1-8.6,2,27.42,27.42,0,0,1-11-2.37l-11.83-5.1a128.61,128.61,0,0,0-14.32-5.11,63.92,63.92,0,0,0-18.19-2.37q-14.7,0-22.54,5.61t-7.84,15.57a15.6,15.6,0,0,0,5.1,11.95,46.72,46.72,0,0,0,13.58,8.35,189,189,0,0,0,19.18,6.85q10.71,3.24,21.92,7.22a196,196,0,0,1,21.92,9.34,82.3,82.3,0,0,1,19.18,13.2,58.87,58.87,0,0,1,13.57,19.06q5.1,11.2,5.11,26.9a88.43,88.43,0,0,1-7,35.37,75.08,75.08,0,0,1-20.8,27.9q-13.82,11.7-34.12,18.18t-46.7,6.48a143,143,0,0,1-26.41-2.49,181.87,181.87,0,0,1-25.53-6.73A138.85,138.85,0,0,1,1359,264.78,98.47,98.47,0,0,1,1341,252.2L1359,223.81a25.84,25.84,0,0,1,7.72-7.85q4.49-2.86,11.71-2.86a24.29,24.29,0,0,1,12.08,3l11.58,6.47a96.8,96.8,0,0,0,14.57,6.48q8.36,3,21.05,3a53.73,53.73,0,0,0,15.2-1.87,26.89,26.89,0,0,0,10-5.11,20,20,0,0,0,7.22-15.44,16.76,16.76,0,0,0-5.23-12.7,45.63,45.63,0,0,0-13.7-8.6,169.81,169.81,0,0,0-19.3-6.72q-10.85-3.12-22-7.1a178.36,178.36,0,0,1-22-9.59,76.07,76.07,0,0,1-19.31-14.2,65.87,65.87,0,0,1-13.69-21q-5.23-12.45-5.24-30.14a78.44,78.44,0,0,1,6.36-31.26,72.57,72.57,0,0,1,19.05-26q12.7-11.2,31.88-17.81t44.84-6.6a144.25,144.25,0,0,1,27,2.49,138.16,138.16,0,0,1,24.53,7,118,118,0,0,1,20.92,10.58,100.65,100.65,0,0,1,16.69,13.33Z" />
                    <path className='word' d="M1742.54,78.34a20,20,0,0,1-6.35,6.73,16.69,16.69,0,0,1-8.6,2,27.42,27.42,0,0,1-11-2.37l-11.83-5.1a128.61,128.61,0,0,0-14.32-5.11,63.92,63.92,0,0,0-18.19-2.37q-14.7,0-22.54,5.61t-7.84,15.57a15.6,15.6,0,0,0,5.1,11.95,46.72,46.72,0,0,0,13.58,8.35,189,189,0,0,0,19.18,6.85q10.71,3.24,21.92,7.22a196,196,0,0,1,21.92,9.34,82.3,82.3,0,0,1,19.18,13.2,58.87,58.87,0,0,1,13.57,19.06q5.1,11.2,5.11,26.9a88.43,88.43,0,0,1-7,35.37,75.08,75.08,0,0,1-20.8,27.9q-13.82,11.7-34.12,18.18t-46.7,6.48a143,143,0,0,1-26.41-2.49,181.87,181.87,0,0,1-25.53-6.73,138.85,138.85,0,0,1-22.79-10.09,98.47,98.47,0,0,1-17.93-12.58l17.93-28.39a25.84,25.84,0,0,1,7.72-7.85q4.48-2.86,11.71-2.86a24.29,24.29,0,0,1,12.08,3l11.58,6.47A96.8,96.8,0,0,0,1635.8,229q8.35,3,21,3a53.73,53.73,0,0,0,15.2-1.87,26.89,26.89,0,0,0,10-5.11,20,20,0,0,0,7.22-15.44,16.76,16.76,0,0,0-5.23-12.7,45.63,45.63,0,0,0-13.7-8.6,169.81,169.81,0,0,0-19.3-6.72q-10.85-3.12-22-7.1a178.36,178.36,0,0,1-22-9.59,76.07,76.07,0,0,1-19.31-14.2,65.87,65.87,0,0,1-13.69-21q-5.23-12.45-5.24-30.14A78.44,78.44,0,0,1,1575,68.25a72.57,72.57,0,0,1,19-26Q1606.79,31,1626,24.41t44.84-6.6a144.25,144.25,0,0,1,27,2.49,138.16,138.16,0,0,1,24.53,7,118,118,0,0,1,20.92,10.58A100.65,100.65,0,0,1,1760,51.19Z" />
                    <path d="M32.33,370.92V477a9,9,0,0,0,13.5,7.79l91.85-53a9,9,0,0,0,0-15.59l-91.85-53A9,9,0,0,0,32.33,370.92Z" />
                    <rect className="cls-1" fill='gray' x="168.21" y="404.44" width="1591.65" height="39" rx="15" />
                    <rect fill='red' x="168.42" y="404.44" width="675.52" height="39" rx="15" />
                    <circle className="cls-2" cx="791.21" cy="423.94" r="46.18" fill='#fff' stroke='#000' strokeMiterlimit={10} strokeWidth='30px'/>
                </svg>
            </NavLink>
            <MenuPanel />
        </div>
    )
}

export default MenuBar