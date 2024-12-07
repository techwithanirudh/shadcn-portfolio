import React from 'react'

export default function Content() {
    return (
        <div className='bg-muted/30 py-8 px-12 h-full w-full flex flex-col justify-between'>
            <Section2 />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-[22vw] leading-[0.8] mt-10'>Portfolio</h1>
            <p>©copyright</p>
        </div>
    )
}
