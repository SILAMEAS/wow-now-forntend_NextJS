import React from 'react';

const ItemCarousel = ({image,title}:{image:string,title:string}) => {
    return (
        <div className={`flex flex-col justify-center items-center `}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/*<img*/}
            {/*    srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}*/}
            {/*    src={`${image}?w=164&h=164&fit=crop&auto=format`}*/}
            {/*    alt={title}*/}
            {/*    loading="lazy"*/}
            {/*    style={{minWidth:100,minHeight:100,width:100,height:100,borderRadius:"50%"}}*/}
            {/*/>*/}
            <div className={`h-36 w-36 overflow-hidden`}>
                <img className={`h-full w-full rounded-full object-cover object-center`} src={image} alt={"image of item carousel"}/>
            </div>
            <span className={`py-5 font-semibold text-xl text-green-400`}>{title}</span>

        </div>
    );
};
/**
 <img
 srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
 src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
 alt={item.title}
 loading="lazy"
 style={{minWidth:100,minHeight:100}}
 />
 * */
export default ItemCarousel;
