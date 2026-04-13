import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'

const ProductCard = ({ image, name, price, oldPrice, badge, savePct }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-100 hover:shadow-lg
      transition-all duration-300 group overflow-hidden h-full flex flex-col">
      <div className="relative p-5 pb-2 flex items-center justify-center">
        {badge && (
          <span className="absolute top-3 left-3 bg-secondary text-white
            text-[10px] font-semibold px-2.5 py-0.5 rounded-full z-10 font-poppins">
            {badge}
          </span>
        )}
        {savePct && (
          <span className="absolute top-3 right-3 bg-save text-white
            text-[10px] font-semibold px-2 py-0.5 rounded-full z-10 font-poppins">
            {savePct}
          </span>
        )}
        <img src={image} alt={name}
          className="h-40 object-contain group-hover:scale-105
          transition-transform duration-500" />
      </div>
      <div className="p-4 pt-3 flex flex-col flex-1">
        <h3 className="font-poppins font-medium text-dark text-sm mb-2
          leading-relaxed line-clamp-2">{name}</h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-base font-bold text-secondary font-poppins">৳{price}</span>
          {oldPrice && (
            <span className="text-xs text-gray-400 line-through font-poppins">৳{oldPrice}</span>
          )}
        </div>
        <button className="mt-auto w-full border border-gray-200 text-secondary
          hover:bg-secondary hover:text-white hover:border-secondary
          font-poppins text-xs py-2.5 rounded transition-all duration-300
          flex items-center justify-center gap-1.5 cursor-pointer">
          <FiShoppingCart size={13} /> Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
