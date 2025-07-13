import React, { useState } from 'react'
import './Sidebar.css'
import menu from '../../assets/menu.svg'


const Sidebar = () => {

    const [extended, setExtended] = useState(false)

    return (
        <div className='sidebar'>
            <div className='top'>
                <img className='menu' src={menu} alt="" onClick={(() => setExtended(prev => !prev))} />
                <div className='new-chat'>
                    <img src={menu} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? <div className='recent'>
                    <p className='recent-title'>Recent</p>
                    <div className="recent-entry">
                        <img src={menu} alt="" />
                        <p>What is react ...</p>
                    </div>
                </div> : null}
            </div>
            <div className='bottom'>
                <div className='bottom-item recent-entry'>
                    <img src={menu} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className='bottom-item recent-entry'>
                    <img src={menu} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>  <div className='bottom-item recent-entry'>
                    <img src={menu} alt="" />
                    {extended ? <p>Seetings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar