import React from 'react'

const Equipment = () => {
  return (
  <div className='my-5 flex items-center flex-col text-justify mx-10 container'>
  <div className='font-semibold text-3xl mb-5'>Equipment</div>
    <div className="gap-3 md:flex items-center">
          <div className="bg-gray-300 mb-4">
            <img src="https://images.contentstack.io/v3/assets/blt1d89a78b502b83f3/bltfcd8733ca2371582/61143decc44c171460d4d54e/Listing_Cables.png" className=" photo max-w-full h-auto rounded-full"  alt=""/>
          </div>

          <div className="bg-gray-300 mb-4">
            <img src="https://images.contentstack.io/v3/assets/blt1d89a78b502b83f3/blt7671d065ea9f3415/61143dec067c9314b57e56d4/Listing_Treadmills.png" className=" photo max-w-full h-auto rounded-full" alt=""/>
          </div>
          <div className="bg-gray-300 mb-4">
            <img src="https://images.contentstack.io/v3/assets/blt1d89a78b502b83f3/blt2fb538dd29425107/6148f172d7fc263e226a7a18/Listing_Cycling.png" className=" photo max-w-full h-auto rounded-full" alt=""/>
          </div>
    </div>
</div>
  )
}

export default Equipment