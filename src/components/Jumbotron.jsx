import React from 'react'
import Iphone from '../assets/images/iphone-14.jpg'
import HoldingIphone from '../assets/images/iphone-hand.png'
function Jumbotron() {
    const handleLearnMode=()=>{
        const element=document.querySelector(".sound-section")
        window.scrollTo({
            top:element?.getBoundingClientRect().top,
            left:0,
            behavior:'smooth'
        })
    }
return (
    <div className='jumbotron-section wrapper'>
        <h2 className='title'>New</h2>
        <img  className='logo' src={Iphone} alt='iPhon 14 Pro'/>
        <p className='text'>Big and bigger.</p>
        <span className='description'>
            From $41.62/mo for 24mo or $999 before trade-in
        </span>
        <ul className='links'>
            <li>
                <button className='button'>Buy</button>
            </li>
            <li>
                <a className='link' onClick={handleLearnMode}>Learn more</a>
            </li>
        </ul>
        <img className='iphone-img' src={HoldingIphone} alt='iphone'/>
    </div>
)
}

export default Jumbotron