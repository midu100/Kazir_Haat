import React from 'react'
import CategoryCard from './common/CategoryCard'
import { GiWheat, GiHoneyJar, GiCow, GiChiliPepper } from 'react-icons/gi'
import { LuDroplets, LuLeaf, LuBean, LuSprout } from 'react-icons/lu'

const CategorySection = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-10">
      <h2 className="text-lg md:text-2xl font-bold text-dark font-poppins text-center mb-8">
        Shop by Category
      </h2>
      <div className="flex flex-wrap justify-center gap-5 md:gap-16">
        <CategoryCard icon={<LuDroplets size={38} />} title="Oil & Ghee" />
        <CategoryCard icon={<GiHoneyJar size={38} />} title="Honey" />
        <CategoryCard icon={<GiChiliPepper size={38} />} title="Spices" />
        <CategoryCard icon={<GiWheat size={38} />} title="Rice" />
        <CategoryCard icon={<LuBean size={38} />} title="Lentils & Grains" />
        <CategoryCard icon={<LuLeaf size={38} />} title="Vegetables" />
        <CategoryCard icon={<GiCow size={38} />} title="Cattle Products" />
        <CategoryCard icon={<LuSprout size={38} />} title="Seeds" />
      </div>
    </section>
  )
}

export default CategorySection
