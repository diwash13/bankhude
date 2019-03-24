import React from 'react'
import Banks from '../About/bankhude.jpg'

export default function About() {
    return (
        <div className='about-body'>
            
          <div className='bankhude'>
            <img className='banks' src={Banks} alt='Priyanka'></img>
          </div>
          <div className='about'>
          <h3>Who is Priyanka Sharma?</h3>
            <p>I am a  Licensed Esthetician in Greater Boston Area. With 5+ years of experience in the cosmetic and skincare industry, I have gained extensive experience treating all different skin types. I have performed treatments ranging from facials to hair removal, from body contouring to waxing and threading. I use the most cutting edge products available in the industry. Working alongside top esthetician professionals, I have gained great knowledge of both general and cosmetic dermatology. I specialize in facial, hair removal and various occasional makeups.
Since graduating from The Elizabeth Grady School of Esthetics and Massage Therapy, I have developed my knowledge by working as an esthetician for Elizabeth Grady in Medford, MA. I have also worked as makeup artist in Lancome and Sephora.
</p>
          </div>
        
        {/* <footer className='footer'>
        </footer> */}
        </div>
    )
}