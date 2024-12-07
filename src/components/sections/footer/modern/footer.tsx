import React from 'react'
import Content from './content';

export default function Footer() {
  return (
    <>
      <div
        className="relative h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className='fixed bottom-0  h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] w-full'>
          <Content />
        </div>
      </div>
    </>
  )
}