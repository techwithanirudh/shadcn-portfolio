import React from 'react'
import Link from '@/components/motion/link';
import { metadata as meta } from '@/app/config';

import { footer } from '@/components/sections/footer/config';
import { links } from '@/components/sections/header/config';
import { contact } from '@/components/sections/contact/config';

export default function Content() {
    return (
        <div className='bg-muted/30 py-8 px-12 h-full w-full flex flex-col justify-between'>
            <Nav />
            <Copyright />
        </div>
    )
}

const Copyright = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end'>
            <h1 className='text-[18vw] md:text-[16vw] lg:text-[18vw] xl:text-[20vw] 2xl:text-[22vw] leading-[0.8] mt-10'>Portfolio</h1>
            <p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mt-4 sm:mt-0'>© 2024 {meta.author.name}</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-zinc-500 dark:text-zinc-400'>About</h3>
                {links.map((link, index) => {
                    const { title, href } = link;

                    return (
                        <Link
                            className="underline-offset-4 hover:underline"
                            href={href}
                            key={`ft-l_about_${index}`}
                        >
                            {title}
                        </Link>
                    );
                })}
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-zinc-500 dark:text-zinc-400'>Socials</h3>
                {contact.socials.map((link, index) => {
                    const { name, href } = link;

                    return (
                        <Link
                            className="underline-offset-4 hover:underline"
                            href={href}
                            target='_blank'
                            key={`ft-l_social_${index}`}
                            external
                        >
                            {name}
                        </Link>
                    );
                })}
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-zinc-500 dark:text-zinc-400'>More</h3>
                {footer.map((link, index) => {
                    const { title, href } = link;

                    return (
                        <Link
                            className="underline-offset-4 hover:underline"
                            href={href}
                            key={`ft-l_more_${index}`}
                        >
                            {title}
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}