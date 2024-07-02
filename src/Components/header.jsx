import React from 'react'

const Header = () => {
  return (
     <div className="flex flex-col pb-2.5 bg-white">
      <div className="flex overflow-hidden relative flex-col items-center px-5 pb-20 w-full text-base text-white min-h-[609px] max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/20f7dccb0c7eb1617e96df14aba6015216a4d09b68ae7de412ad6c995f60dfc8?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/20f7dccb0c7eb1617e96df14aba6015216a4d09b68ae7de412ad6c995f60dfc8?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/20f7dccb0c7eb1617e96df14aba6015216a4d09b68ae7de412ad6c995f60dfc8?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/20f7dccb0c7eb1617e96df14aba6015216a4d09b68ae7de412ad6c995f60dfc8?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/20f7dccb0c7eb1617e96df14aba6015216a4d09b68ae7de412ad6c995f60dfc8?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/20f7dccb0c7eb1617e96df14aba6015216a4d09b68ae7de412ad6c995f60dfc8?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/20f7dccb0c7eb1617e96df14aba6015216a4d09b68ae7de412ad6c995f60dfc8?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/20f7dccb0c7eb1617e96df14aba6015216a4d09b68ae7de412ad6c995f60dfc8?apiKey=5316b5fd95434c1a877fb04bebbe8291&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 justify-between self-stretch px-16 py-5 w-full bg-white shadow-lg text-neutral-500 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0d17614c7acd83cfb614cfbc27c184aef828edb96a2586941507b1103d01f834?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d17614c7acd83cfb614cfbc27c184aef828edb96a2586941507b1103d01f834?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d17614c7acd83cfb614cfbc27c184aef828edb96a2586941507b1103d01f834?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d17614c7acd83cfb614cfbc27c184aef828edb96a2586941507b1103d01f834?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d17614c7acd83cfb614cfbc27c184aef828edb96a2586941507b1103d01f834?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d17614c7acd83cfb614cfbc27c184aef828edb96a2586941507b1103d01f834?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d17614c7acd83cfb614cfbc27c184aef828edb96a2586941507b1103d01f834?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0d17614c7acd83cfb614cfbc27c184aef828edb96a2586941507b1103d01f834?apiKey=5316b5fd95434c1a877fb04bebbe8291&"
            className="shrink-0 self-start mt-2 max-w-full aspect-[4.17] w-[181px]"
          />
          <div className="flex gap-5 items-center max-md:flex-wrap">
            <div className="grow self-stretch my-auto leading-[157%]">
              Find Suppliers
            </div>
            <div className="flex gap-2 self-stretch my-auto text-sm leading-6">
              <div className="grow">Find Service Tags</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8be75784ee48be4d431581e5c527a1843d00b19cbede941303f1f1700407172d?apiKey=5316b5fd95434c1a877fb04bebbe8291&"
                className="shrink-0 self-start w-4 aspect-square"
              />
            </div>
            <div className="justify-center self-stretch px-11 py-5 font-bold text-center text-green-800 rounded-md border border-green-800 border-solid leading-[160%] max-md:px-5">
              Login / Sign Up
            </div>
          </div>
        </div>
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
      <div className="self-center mt-24 w-full max-w-[1311px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 font-bold max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl leading-10 text-indigo-950 max-md:max-w-full">
                <span className="">Ready to dive into </span>
                <span className="text-indigo-950">HABOT?</span>
              </div>
              <div className="mt-11 text-lg font-light leading-7 text-black max-md:mt-10 max-md:max-w-full">
                Signing up with HABOT opens the door to a world of new
                opportunities and potential for business growth. Gain access to
                a vibrant community of like-minded individuals, unlock valuable
                resources, and take the first step towards realizing your
                entrepreneurial dreams.
              </div>
              <div className="flex gap-5 self-start py-5 pr-7 pl-20 mt-11 text-lg leading-6 text-center text-white bg-green-800 rounded-md border border-green-800 border-solid max-md:px-5 max-md:mt-10">
                <div className="flex-auto">Sign up Today !</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2efde65ac90724f5a7c9d21ab68b371e9a04c4632bd5652924e68a96596d531e?apiKey=5316b5fd95434c1a877fb04bebbe8291&"
                  className="shrink-0 self-start w-8 aspect-[2]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-3 text-xl font-medium leading-8 text-center text-neutral-700 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
                <div className="grow justify-center items-center px-16 py-7 bg-white rounded-md border border-amber-600 border-solid w-fit max-md:px-5">
                  Abu Dhabi
                </div>
                <div className="grow justify-center items-center px-16 py-7 whitespace-nowrap bg-white rounded-md border border-amber-600 border-solid w-fit max-md:px-5">
                  Dubai
                </div>
              </div>
              <div className="flex gap-5 mt-6 max-md:flex-wrap max-md:max-w-full">
                <div className="grow justify-center px-14 py-6 bg-white rounded-md border border-amber-600 border-solid w-fit max-md:px-5">
                  Sharjah & Ajman
                </div>
                <div className="grow justify-center items-center px-16 py-6 whitespace-nowrap bg-white rounded-md border border-amber-600 border-solid w-fit max-md:px-5">
                  Fujairah
                </div>
              </div>
              <div className="flex gap-5 mt-6 max-md:flex-wrap">
                <div className="grow justify-center px-16 py-7 bg-white rounded-md border border-amber-600 border-solid w-fit max-md:px-6">
                  Ras Al Khaimah
                </div>
                <div className="grow justify-center px-16 py-6 bg-white rounded-md border border-amber-600 border-solid w-fit max-md:px-5">
                  Umm Al Quwain
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start self-center px-14 py-20 mt-28 max-w-full rounded-md bg-sky-950 w-[1316px] max-md:px-5 max-md:mt-10">
        <div className="mt-14 mb-7 ml-3 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow justify-center items-center px-16 py-20 min-h-[350px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5c688fac96a4151f08e416a124414d9399080f768e056db6a071a2bea2716597?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c688fac96a4151f08e416a124414d9399080f768e056db6a071a2bea2716597?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c688fac96a4151f08e416a124414d9399080f768e056db6a071a2bea2716597?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c688fac96a4151f08e416a124414d9399080f768e056db6a071a2bea2716597?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c688fac96a4151f08e416a124414d9399080f768e056db6a071a2bea2716597?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c688fac96a4151f08e416a124414d9399080f768e056db6a071a2bea2716597?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c688fac96a4151f08e416a124414d9399080f768e056db6a071a2bea2716597?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5c688fac96a4151f08e416a124414d9399080f768e056db6a071a2bea2716597?apiKey=5316b5fd95434c1a877fb04bebbe8291&"
                  className="object-cover absolute inset-0 size-full"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b54ee871f41d8e38ad4a3f18ee895001f45e37004f490f129693723ecf416011?apiKey=5316b5fd95434c1a877fb04bebbe8291&"
                  className="mt-14 max-w-full aspect-[1.41] w-[106px] max-md:mt-10"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-4 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 items-start text-2xl font-bold leading-8 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col flex-1 text-red-400">
                    <div className="self-center">Buyer</div>
                    <div className="shrink-0 mt-3 h-1 bg-red-400 rounded-sm" />
                  </div>
                  <div className="flex-auto text-white">Supplier</div>
                </div>
                <div className="flex gap-2.5 mt-12 max-md:flex-wrap max-md:mt-10">
                  <div className="flex flex-col items-center self-start">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/032982ca12cab11209295bcb84562fb904db6ec2929a6efb123be43af7960221?apiKey=5316b5fd95434c1a877fb04bebbe8291&"
                      className="aspect-square w-[18px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/28002fbbfa061514784a4ec73cbca17e96e7164891721c5ea6c774250586336c?apiKey=5316b5fd95434c1a877fb04bebbe8291&"
                      className="mt-5 aspect-square w-[18px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/990b87ded6f3217ed5f53e6dadca0b57c77d5d92096391c65a6b202d822e1708?apiKey=5316b5fd95434c1a877fb04bebbe8291&"
                      className="mt-5 aspect-square w-[18px]"
                    />
                  </div>
                  <div className="flex-auto text-xl font-medium leading-10 text-white max-md:max-w-full">
                    Post your requirements.
                    <br />
                    Sit back for multiple suppliers to contact you.
                    <br />
                    Choose among the suppliers based on the ratings and reviews.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-20 mt-36 w-full bg-cyan-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between mt-7 mb-3.5 w-full max-w-[1110px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col my-auto text-4xl font-semibold leading-10 text-black">
            <div>Let Suppliers Find You</div>
            <div className="shrink-0 self-end h-1 bg-red-400 w-[159px]" />
          </div>
          <div className="justify-center px-14 py-5 text-lg font-bold leading-6 text-center text-white bg-red-400 rounded-md max-md:px-5">
            Get Verified
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-16 pt-6 pb-20 mt-32 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col mb-2 w-full max-w-[1200px] max-md:max-w-full">
          <div className="self-center text-4xl font-bold leading-10 text-center text-neutral-800">
            How it works?
          </div>
          <div className="self-center mt-11 text-lg leading-7 text-center text-black w-[839px] max-md:mt-10 max-md:max-w-full">
            Buyers post their needs and review top suppliers, while suppliers
            complete profiles, connect with potential buyers, and build
            successful business relationships, sharing valuable feedback.
          </div>
          <div className="mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center items-center px-20 py-11 w-full text-xl font-medium leading-7 text-center text-black bg-cyan-50 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/414cffe7d8ebe32a319383eaace1ce89d63f0bfe7637197145db9dd9cd9732ed?apiKey=5316b5fd95434c1a877fb04bebbe8291&"
                    className="aspect-square w-[74px]"
                  />
                  <div className="mt-11 max-md:mt-10">
                    Select Your Role and Sign Up
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex grow justify-center items-center px-16 py-12 w-full text-xl font-medium leading-7 text-center text-black bg-white max-md:px-5">
                  <div className="flex flex-col max-w-full w-[165px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/41f62e16c0429432837007a6ae970e9098f7b317f9c80c5dbba555a35c6af090?apiKey=5316b5fd95434c1a877fb04bebbe8291&"
                      className="self-center aspect-square w-[75px]"
                    />
                    <div className="mt-9">Buyers Post Your Requirements</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-end px-16 py-12 w-full text-xl font-medium leading-7 text-center text-black bg-cyan-50 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/29335ea81315db7da6ba564c6f0948efce2e39a466ce040ed076ddafcd39e694?apiKey=5316b5fd95434c1a877fb04bebbe8291&"
                    className="self-center aspect-[0.97] w-[76px]"
                  />
                  <div className="mt-8">
                    {" "}
                    Review, Select, and Contact the Best Suppliers
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-16 pt-14 pb-8 w-full text-xl font-medium leading-7 text-center text-black bg-white max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e96534d4527cb9db32a3e3fcd54efb5e5ebbf3049c858d4d7aa5d7ed1f396a4?apiKey=5316b5fd95434c1a877fb04bebbe8291&"
                    className="self-center aspect-square w-[75px]"
                  />
                  <div className="mt-6">
                    {" "}
                    Suppliers Complete your profile and get notified for
                    opportunities
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-end px-14 py-12 w-full text-xl font-medium leading-7 text-center text-black bg-cyan-50 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d53115b881f708a7d8a89e3600ed94adfdc9e0e97cb141e098ac1caa70bb53a3?apiKey=5316b5fd95434c1a877fb04bebbe8291&"
                    className="self-center aspect-square w-[75px]"
                  />
                  <div className="mt-9">
                    Contact to Buyers and Share your Quote for the service
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center px-14 py-10 w-full text-xl font-medium leading-7 text-center text-black bg-white max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6783a28ec0cfbb7790988318431939e3119dee8711199b4c01255360e66b5b06?apiKey=5316b5fd95434c1a877fb04bebbe8291&"
                    className="self-center aspect-[1.02] w-[87px]"
                  />
                  <div className="mt-6">
                    Both the Parties can Connect and Make Business Leave a
                    Feedback
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-10 mt-28 w-full text-white bg-blue-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col pt-8 pb-5 pl-7 w-full border-t border-b border-solid border-white border-opacity-20 max-w-[1200px] max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col grow shrink-0 text-base font-bold leading-6 whitespace-nowrap basis-0 w-fit max-md:max-w-full">
                <div className="flex gap-5 justify-between self-end mr-10 max-w-full w-[183px] max-md:mr-2.5">
                  <div>Company</div>
                  <div>Terms</div>
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f8633b8a22602f0e28efc7402dc25e9bad1f21cfd9f32092099d9320f4626617?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8633b8a22602f0e28efc7402dc25e9bad1f21cfd9f32092099d9320f4626617?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8633b8a22602f0e28efc7402dc25e9bad1f21cfd9f32092099d9320f4626617?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8633b8a22602f0e28efc7402dc25e9bad1f21cfd9f32092099d9320f4626617?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8633b8a22602f0e28efc7402dc25e9bad1f21cfd9f32092099d9320f4626617?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8633b8a22602f0e28efc7402dc25e9bad1f21cfd9f32092099d9320f4626617?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8633b8a22602f0e28efc7402dc25e9bad1f21cfd9f32092099d9320f4626617?apiKey=5316b5fd95434c1a877fb04bebbe8291&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f8633b8a22602f0e28efc7402dc25e9bad1f21cfd9f32092099d9320f4626617?apiKey=5316b5fd95434c1a877fb04bebbe8291&"
                  className="self-center aspect-[7.14] w-[480px] max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col self-start text-sm font-light leading-6">
                <div className="text-base font-bold leading-6">Related</div>
                <div className="mt-6">Find Buyer</div>
                <div className="mt-3">Feedback</div>
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3115e410496ff0f705a881dfbdfeb4121f458e1e85ea6e06561cd29445c35ddd?apiKey=5316b5fd95434c1a877fb04bebbe8291&"
              className="shrink-0 my-auto w-52 max-w-full aspect-[5.26]"
            />
          </div>
          <div className="flex gap-5 justify-between mt-2 max-w-full font-light w-[472px] max-md:flex-wrap">
            <div className="text-base leading-8">
              © R Singhania
              <br />
            </div>
            <div className="text-sm leading-6">Accessibility</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
