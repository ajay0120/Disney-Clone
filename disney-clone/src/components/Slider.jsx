import React,{useEffect,useRef,useState} from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const IMAGE_BASE_URL ="https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;

function Slider() {
    const [movieList,setMovieList]=useState([]);
    useEffect(() =>{
        getTrendingVideos();
    },[])

    const getTrendingVideos=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }
    const elementRef=useRef();
    const scrollLeft=()=>{
        elementRef.current.scrollLeft-=screenWidth-110;
    }
    const scrollRight=()=>{
        elementRef.current.scrollLeft+=screenWidth-110;
    }
  return (
    // <div className='flex overscroll-x-auto w-full px-16 py-4 scrollbar-none'>
    //   {movieList.map((item,index)=>(
    //     <img src={IMAGE_BASE_URL+item.backdrop_path}
    //     className='min-w-full h-[310px]  object-left-top mr-5 rounded-md'/>
    //   ))}
    // </div>
    <div className="w-screen overflow-hidden">
      <div>
        <HiChevronLeft className="hidden md:block text-[30px] absolute mt-[200px] mx-8 cursor-pointer" 
        onClick={()=>scrollLeft()}/>
        <HiChevronRight className="hidden md:block text-[30px] absolute mt-[200px] mx-8 cursor-pointer right-0" 
        onClick={()=>scrollRight()}/>
      </div>
      <div className="flex overflow-x-auto w-full scrollbar-none px-16 py-4 scroll-smooth" ref={elementRef}>
        {movieList.map((item, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full md:h-[400px] object-cover object-left-top hover:border-[4px] border-gray-400  mr-5 rounded-md transition-all duration-100 ease-in"
            alt={item.title || item.name}
          />
        ))}
      </div>
    </div>

  )
}

export default Slider
