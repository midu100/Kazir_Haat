import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const SectionHeader = ({ title, viewAll }) => {
  return (
    <div className="flex items-end justify-between mb-8">
      <div>
        <h2 className="text-lg md:text-2xl font-bold text-dark font-poppins">{title}</h2>
        <div className="w-12 h-[3px] bg-secondary rounded-full mt-2"></div>
      </div>
      {viewAll && (
        <a href="#" className="text-secondary hover:text-secondary-dark text-xs
          font-semibold flex items-center gap-1 transition-colors uppercase
          tracking-wider font-poppins">
          View All <FiArrowRight size={12} />
        </a>
      )}
    </div>
  )
}

export default SectionHeader
