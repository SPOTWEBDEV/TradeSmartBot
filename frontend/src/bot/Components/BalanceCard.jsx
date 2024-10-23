import React from 'react'

export default function BalanceCard() {
         return (
                  <div className='flex gap-3 px-2 justify-center mt-4'>
                           <div class="w-fit sm:w-[300px] min-h-60 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                                    <div class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                                             <h3 class="text-2xl  sm:text-6xl font-bold text-gray-800 dark:text-white">
                                                      $40,00
                                             </h3>
                                             <p class="mt-2 text-gray-500 dark:text-neutral-400">
                                                      Balance
                                             </p>
                                             <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="#">
                                                      Transaction
                                                      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                               <path d="m9 18 6-6-6-6"></path>
                                                      </svg>
                                             </a>
                                    </div>
                           </div>
                           <div class="w-fit sm:w-[300px] min-h-60 flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
                                    <div class="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                                             <h3 class="text-2xl sm:text-6xl font-bold text-gray-800 dark:text-white">
                                                      $10,00
                                             </h3>
                                             <p class="mt-2 text-gray-500 dark:text-neutral-400">
                                                     Trading Balance
                                             </p>
                                             <a class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="#">
                                                      History
                                                      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                               <path d="m9 18 6-6-6-6"></path>
                                                      </svg>
                                             </a>
                                    </div>
                           </div>
                  </div>
         )
}