// "use client"
// import { StaticImageData } from 'next/image';
// import Image from "next/image";

// const Carousel = ({ imagesList }: {
//     imagesList: StaticImageData[]
// }) => {
//     return (
//         <div id="indicators-carousel" className="relative w-full" data-carousel="static">

//             <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

//                 <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
//                     {imagesList.map((image, index) => {
//                         return (
//                             <Image
//                                 src={image}
//                                 key={index}
//                                 alt={`Slide ${index + 1}`}
//                                 height={200}
//                                 width={300}
//                                 className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                             />
//                         )
//                     })}
//                 </div>
//             </div>

//             <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
//                 {imagesList.map((_, index) => {
//                     return (
//                         <button
//                             type="button"
//                             className="w-3 h-3 rounded-full"
//                             aria-current="true"
//                             aria-label={`Slide ${index + 1}`}
//                             data-carousel-slide-to={index}
//                             key={index}
//                         />
//                     )
//                 })}
//             </div>

//             <button 
//                 type="button" 
//                 className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" 
//                 data-carousel-prev
//             >
//                 <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
//                     </svg>
//                     <span className="sr-only">Previous</span>
//                 </span>
//             </button>

//             <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//                 <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//                     <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
//                     </svg>
//                     <span className="sr-only">Next</span>
//                 </span>
//             </button>
//         </div>
//     );
// }

// export default Carousel;