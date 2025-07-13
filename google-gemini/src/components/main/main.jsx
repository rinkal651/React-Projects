import React from 'react'
import './main.css'
import menu from '../../assets/menu.svg'

const Main = () => {
    return (
        <div className='main'>
            <div className='nav'>
                <p>Gemini</p>
                <img src={menu} alt="" />
            </div>
            <div className='main-container'>
                <div className='greet'>
                    <p><span>Hello, Dev.</span></p>
                    <p>How can I help you today?</p>
                </div>


                <div className='cards'>
                    <div className='card'>
                        <p>Suggest beutiful places to see on an upcoming road trip</p>
                        <img src={menu} alt="" />
                    </div>
                </div>

                <div className='cards'>
                    <div className='card'>
                        <p>Briefly summarize the concept: urban planning</p>
                        <img src={menu} alt="" />
                    </div>
                </div>

                <div className='cards'>
                    <div className='card'>
                        <p>Brainstorm team bonding activities for our work retreat</p>
                        <img src={menu} alt="" />
                    </div>
                </div>

                <div className='cards'>
                    <div className='card'>
                        <p>Imporve redability of following code.</p>
                        <img src={menu} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main