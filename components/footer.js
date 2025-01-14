import Image from 'next/image';
import { default as Link } from 'next/link';
import React from 'react';
const footer = () => {
    const src = 'https://img.icons8.com/ios-glyphs/30/000000/github.png';
    return (
        <div className='bg-twitter p-4' >
            <Link href="/">
                <a> <p className=' font-bold text-2xl text-center text-stone-50' >TweetJOBS</p> </a>
            </Link>
            <br />
            <div className='flex flex-col justify-center items-center' >
                <Link href='/' ><a>
                    <Image className='text-center' loader={() => src} src='https://img.icons8.com/ios-glyphs/30/000000/github.png' height={70} width={70} />
                </a>
                </Link>
            </div>
            <br />
            <div className='p-0 text-center text-stone-50' >
                Made with 🧡 by <a href='https://twitter.com/gulshanagg333'>Gulshan</a> and <a href='https://twitter.com/ishanjain_'>Ishan</a>
            </div>
        </div>
    )
}

export default footer
