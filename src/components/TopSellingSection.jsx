import React from 'react'
import SectionHeader from './common/SectionHeader'
import TopProductCard from './common/TopProductCard'

const TopSellingSection = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-8">
      <SectionHeader title="Top Selling Products" />
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-4">
          <TopProductCard
            image="/images/mustard.png"
            name="Pure Mustard Oil 5 Liters"
            price="1,550"
            badge="Best Seller"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <TopProductCard
            image="/images/onion.png"
            name="Sundarbans Honey 1 KG"
            price="2,200"
            oldPrice="2,500"
            saveAmount="300"
            badge="Sale!"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <TopProductCard
            image="/images/rice.png"
            name="Pure Cow Ghee 1 KG"
            price="1,700"
            oldPrice="1,800"
            saveAmount="100"
            badge="Best Seller"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <TopProductCard
            image="/images/chili.png"
            name="Laccha Semai 1 KG"
            price="1,300"
            oldPrice="1,500"
            saveAmount="200"
            badge="Best Seller"
          />
        </div>
      </div>
    </section>
  )
}

export default TopSellingSection
