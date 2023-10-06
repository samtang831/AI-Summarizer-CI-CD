import { logo } from '../assets';
import React from 'react'


const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '2.5rem', paddingTop: '0.75rem' }} className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" style={{ width: '7rem', objectFit: 'contain' }} />

        <button
        type="button"
        onClick={() => window.open('https://github.com/samtang831')} 
        className="black_btn">
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your readings with Summafy, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  )
}

export default Hero