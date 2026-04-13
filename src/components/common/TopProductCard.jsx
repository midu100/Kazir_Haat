import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

const TopProductCard = ({ image, name, price, oldPrice, saveAmount, badge }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-100 hover:shadow-lg
      transition-all duration-300 flex overflow-hidden h-full">
      <div className="w-2/5 bg-gray-50 flex items-center justify-center p-5 relative">
        {badge && (
          <span className="absolute top-3 right-3 bg-secondary text-white
            text-[10px] font-semibold px-2.5 py-0.5 rounded-full font-poppins">
            {badge}
          </span>
        )}
        <img src={image} alt={name} className="h-28 md:h-32 object-contain" />
      </div>
      <div className="w-3/5 p-5 flex flex-col justify-center">
        <h3 className="font-poppins font-semibold text-dark text-sm md:text-base
          mb-2 leading-snug">{name}</h3>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg font-bold text-secondary font-poppins">৳{price}</span>
          {oldPrice && (
            <span className="text-xs text-gray-400 line-through font-poppins">৳{oldPrice}</span>
          )}
        </div>
        {saveAmount && (
          <span className="inline-block bg-save text-white text-[10px] font-bold
            px-2.5 py-0.5 rounded mb-3 w-fit font-poppins">Save: ৳{saveAmount}</span>
        )}
        <div className="flex items-center gap-2 mt-1">
          <button className="border border-secondary text-secondary
            hover:bg-secondary hover:text-white text-[11px] py-2 px-3
            rounded transition-all duration-300 flex items-center gap-1
            cursor-pointer font-poppins">
            <FiShoppingCart size={11} /> Cart
          </button>
          <button className="bg-secondary text-white hover:bg-secondary-dark
            text-[11px] py-2 px-4 rounded transition-all duration-300
            flex items-center gap-1 cursor-pointer font-poppins">
            <FiShoppingCart size={11} /> Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopProductCard
