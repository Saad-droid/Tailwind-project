import React from 'react'

const SuppyInfo = () => {
  return (
    <div>
      <div className="relative mt-32 text-6xl font-bold text-center leading-[66px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
          Are You a Supplier?
          <br />
          <span className="">Explore Matching Opportunities.</span>
        </div>
        <div className="flex relative gap-2.5 mt-10 font-light text-gray-500 max-md:flex-wrap max-md:mt-10">
          <div className="flex flex-col justify-center px-5 py-2 bg-white rounded-md border border-gray-300 border-solid">
            <div className="flex gap-4 py-2.5 bg-white">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f70e7c99cdc1499f06f30542cea63dcccd81a3d3d2cae66e4170b61b6f21b38a?apiKey=5316b5fd95434c1a877fb04bebbe8291&"
                className="shrink-0 aspect-square w-[21px]"
              />
              <div className="flex-auto">Search your required service here</div>
            </div>
          </div>
          <div className="flex flex-col justify-center px-5 py-2 bg-white rounded-md border border-gray-300 border-solid">
            <div className="flex gap-3 justify-center py-2.5 bg-white">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3fcdc727d07f7ba009da674b72159e31ce2ed9bee9c40d85126d1744b56c97e?apiKey=5316b5fd95434c1a877fb04bebbe8291&"
                className="shrink-0 self-start aspect-square w-[23px]"
              />
              <div className="flex-auto">Search your desired location here</div>
            </div>
          </div>
          <div className="justify-center px-9 py-6 font-bold text-center text-white whitespace-nowrap bg-green-800 rounded-md border border-green-800 border-solid leading-[159%] max-md:px-5">
            Search
          </div>
        </div>
        <div className="relative mt-11 mb-2.5 text-lg font-medium text-center underline max-md:mt-10 max-md:max-w-full">
          <span className="font-bold">Are you a buyer? </span>
          <span className="underline ">
            Click here if you are looking to post a requirements
          </span>
        </div>
      </div>

   
  )
}

export default SuppyInfo
