import React from 'react'
import Paypal from './Paypal'

const Pricing = () => {
  return (
   <>
  <section className="text-2xl font-bold flex-col flex items-center pt-6 pb-5 2xl:py-40">
  <div className='font-semibold text-3xl mb-5'>Pricing</div>
  <div className=" container mx-auto px-4">
    <div className="mb-16 md:mb-24 text-center">
      <h2 className="mb-5 md:mb-8 text-5xl lg:text-6xl 2xl:text-7xl text-white font-bold font-heading">Choose a plan</h2>
    </div>
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-wrap items-center -mx-3">
        <div className="w-full lg:w-1/3 px-3 mb-8 lg:mb-0">
          <div className="px-12 py-16 bg-gray-900 rounded-3xl">
            <div className="pb-8 mb-14 border-b border-gray-400">
              <div className="flex justify-between items-center px-3">
                <h3 className="text-4xl text-white font-bold font-heading">Newbie</h3>
                <p className="text-lg text-white font-bold">$89</p>
              </div>
            </div>
            <ul className="text-lg text-white mb-16">
              <li className="flex items-center mb-8">
                <span className="mr-6">
                  <svg width="20" height="16" viewbox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="white"></path>
                  </svg>
                </span>
                <span>Coaching</span>
              </li>
              <li className="flex items-center mb-8">
                <span className="mr-6">
                  <svg width="20" height="16" viewbox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="white"></path>
                  </svg>
                </span>
                <span>Limited Training</span>
              </li>
              <li className="flex items-center">
                <span className="mr-6">
                  <svg width="20" height="16" viewbox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="white"></path>
                  </svg>
                </span>
                <span>1 Team Trainer </span>
              </li>
            </ul>
            <div className="text-center"><a className="inline-block px-10 py-4 border border-gray-200 hover:border-gray-100 rounded-full font-bold text-white" href="#">Buy now</a></div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-3 mb-8 lg:mb-0">
          <div className="px-12 py-16 bg-red-600 rounded-3xl">
            <div className="pb-8 mb-14 border-b border-blueGray-300">
              <div className="flex justify-between items-center px-3">
                <h3 className="text-4xl text-white font-bold font-heading">Pro</h3>
                <p className="text-lg text-white font-bold">$199</p>
              </div>
            </div>
            <ul className="text-lg text-white mb-16">
              <li className="flex items-center mb-8">
                <span className="mr-6">
                  <svg width="20" height="16" viewbox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="white"></path>
                  </svg>
                </span>
                <span>Fitness Training</span>
              </li>
              <li className="flex items-center mb-8">
                <span className="mr-6">
                  <svg width="20" height="16" viewbox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="white"></path>
                  </svg>
                </span>
                <span>5 Team trainers</span>
              </li>
              <li class="flex items-center mb-8">
                <span className="mr-6">
                  <svg width="20" height="16" viewbox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="white"></path>
                  </svg>
                </span>
                <span>Unlimited coaching</span>
              </li>
              <li class="flex items-center mb-8">
                <span className="mr-6">
                  <svg width="20" height="16" viewbox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="white"></path>
                  </svg>
                </span>
                <span>Nutrition advice</span>
              </li>
              <li className="flex items-center">
                <span className="mr-6">
                  <svg width="20" height="16" viewbox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="white"></path>
                  </svg>
                </span>
                <span>Money Payback guarantee</span>
              </li>
            </ul>
            <div ClassName="text-center"><a ClassName="inline-block px-10 py-4 border border-blueGray-300 hover:border-blueGray-100 rounded-full font-bold text-white" href="#">Buy now</a></div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-3">
          <div className="px-12 py-16 bg-gray-900 rounded-3xl">
            <div className="pb-8 mb-14 border-b border-gray-400">
              <div className="flex justify-between items-center px-3">
                <h3 className="text-4xl text-white font-bold font-heading">Max-Pro</h3>
                <p className="text-lg text-white font-bold">$229</p>
              </div>
            </div>
            <ul className="text-lg text-white mb-16">
              <li className="flex items-center mb-8">
                <span className="mr-6">
                  <svg width="20" height="16" viewbox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="white"></path>
                  </svg>
                </span>
                <span>Daily unlimited training</span>
              </li>
              <li className="flex items-center mb-8">
                <span className="mr-6">
                  <svg width="20" height="16" viewbox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="white"></path>
                  </svg>
                </span>
                <span>Free Nutrition advice</span>
              </li>
              <li className="flex items-center">
                <span className="mr-6">
                  <svg width="20" height="16" viewbox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z" fill="white"></path>
                  </svg>
                </span>
                <span>Access unlimited trainers</span>
              </li>
            </ul>
            <div className="text-center"><a className="inline-block px-10 py-4 border border-gray-200 hover:border-gray-100 rounded-full font-bold text-white" href="#">Buy now</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   </>
  )
}

export default Pricing