import { socialMedia } from '@/data'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 relative' id='contact'>
      {/* Footer background grid */}
      <div className='absolute inset-0 -z-10 opacity-20'>
        <Image
          src='/footer-grid.svg'
          alt='Footer Grid Background'
          layout='fill'
          objectFit='cover'
          quality={80}
          priority
        />
      </div>

      {/* Footer content */}
      <div className='flex flex-col justify-center items-center gap-6'>
        <p className='md:text-base text-sm md:font-sm font-light opacity-30'>
          Copyright © 2025 Semas
        </p>

        <div className='flex items-center gap-6 opacity-30'>
        {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${profile.link.includes('github') ? 'GitHub' : 'LinkedIn'} profile`}
              className='transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-300'
            >
              <Image
                src={profile.img}
                alt={`Icon for ${profile.link.includes('github') ? 'GitHub' : 'LinkedIn'}`}
                width={20}
                height={20}
                className='object-contain'
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
