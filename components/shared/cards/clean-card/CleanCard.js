import React from 'react'

const CleanCard = ({name, imgArr, progress}) => {
    return (
        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-teal-500 left-4 -top-6">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </div>
            <div class="mt-8">
                <p class="text-xl font-semibold my-2">{name}</p>
                <div class="flex space-x-2 text-gray-400 text-sm">

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                     <p>Core UI Team</p>
                </div>
                <div class="flex space-x-2 text-gray-400 text-sm my-3">

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                     <p>3 Weeks</p>
                </div>
                <div class="border-t-2 "></div>

                <div class="flex justify-between">
                    <div class="my-2">
                        <p class="font-semibold text-base mb-2">Team Members</p>
                        <div class="flex space-x-2">
                                {imgArr.map((item, i) => {
                                    <img src={imgArr[i]}
                                    class="w-6 h-6 rounded-full"/>
                                })}
                        </div>
                    </div>
                     <div class="my-2">
                        <p class="font-semibold text-base mb-2">Progress</p>
                        <div class="text-base text-gray-400 font-semibold">
                            <p>{progress}%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CleanCard
