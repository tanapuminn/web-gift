import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import imgDay from '../assets/calendar.png'
import imgMemories from '../assets/memory.png'
import imgMessage from '../assets/img2.png'

const Menu = () => {
  return (
    <div className="flex justify-center items-center min-h-screen gradient-background">
      <div className="gradient-background border-1 border-amber-50 shadow-lg rounded-xl p-6 max-w-2xl w-full mx-auto">
        <p className="p-3 mb-4 text-3xl font-bold text-[#ff006a] text-center">
          Choose Menu Our Love
        </p>
        <div className="grid grid-cols-1 gap-4">
          <Card title="TIME LOVE" link="/day" imageUrl={imgDay} />
          <Card title="Our Memories" link="/memory" imageUrl={imgMemories} />
          <Card title="Message" link="/message" imageUrl={imgMessage} />
        </div>
      </div>
    </div>

  )
}

export default Menu