import React from 'react'

const CategoryCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      <div className="w-20 h-20 rounded-full bg-light border-2 border-transparent
        group-hover:border-secondary flex items-center justify-center
        text-primary text-2xl group-hover:text-secondary transition-all
        duration-300 group-hover:shadow-md">
        {icon}
      </div>
      <span className="font-poppins text-[18px] font-medium text-dark
        group-hover:text-secondary transition-colors duration-300">{title}</span>
    </div>
  )
}

export default CategoryCard
