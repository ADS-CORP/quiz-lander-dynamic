import Image from 'next/image';
import bbcLogo from '../../../public/images/bbc.png';
import nytLogo from '../../../public/images/nyt.png';
import forbesLogo from '../../../public/images/forbes.png';
import usaLogo from '../../../public/images/usa.png';
import foxLogo from '../../../public/images/foxnews.png';
import yahooLogo from '../../../public/images/yahoo.png';
import abcLogo from '../../../public/images/abc.png';

export default function AsSeenOn() {
  const logos = [
    { src: bbcLogo, alt: 'BBC', width: 55, height: 55, sizes: '55px' },
    { src: nytLogo, alt: 'The New York Times', width: 75, height: 75, sizes: '75px' },
    { src: forbesLogo, alt: 'Forbes', width: 60, height: 60, sizes: '60px' },
    { src: usaLogo, alt: 'USA Today', width: 65, height: 65, sizes: '65px' },
    { src: foxLogo, alt: 'Fox News', width: 60, height: 60, sizes: '60px' },
    { src: yahooLogo, alt: 'Yahoo!', width: 55, height: 55, sizes: '55px' },
    { src: abcLogo, alt: 'ABC', width: 40, height: 40, sizes: '40px' },
  ];

  return (
    <div className="pt-8 relative overflow-hidden" style={{ zIndex: 1, minHeight: 'calc(135px + 6rem)' }}>
      <h2 className="text-lg font-semibold text-center mb-6 text-slate-800">
        As Seen On:
      </h2>
      {/* Mobile layout (hidden on md and up) */}
      <div className="md:hidden flex flex-col gap-6 max-w-full mx-auto pb-8 px-4">
        {/* Top row - 4 logos */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 flex-wrap" style={{ minHeight: '75px' }}>
          {logos.slice(0, 4).map((logo) => (
            <div 
              key={logo.alt} 
              className="flex-shrink-0"
              style={{ 
                width: `${logo.width}px`, 
                height: `${logo.height}px`
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                sizes={logo.sizes}
                loading="lazy"
                className={`grayscale opacity-75 hover:opacity-100 transition-opacity ${['USA Today', 'The New York Times', 'Yahoo!'].includes(logo.alt) ? 'object-contain' : ''}`}
                style={{ 
                  color: 'transparent',
                  width: ['USA Today', 'The New York Times', 'Yahoo!'].includes(logo.alt) ? 'auto' : `${logo.width}px`,
                  height: ['USA Today', 'The New York Times', 'Yahoo!'].includes(logo.alt) ? 'auto' : `${logo.height}px`,
                  maxHeight: `${logo.height}px`,
                  ...(logo.alt === 'USA Today' ? {
                    objectFit: 'contain',
                    padding: '2px 0',
                    transform: 'scale(1.2)',
                    transformOrigin: 'center'
                  } : {}),
                  ...(logo.alt === 'The New York Times' ? {
                    objectFit: 'contain',
                    maxWidth: '100%'
                  } : {}),
                  ...(logo.alt === 'Yahoo!' ? {
                    objectFit: 'contain',
                    maxWidth: '100%'
                  } : {})
                }}
              />
            </div>
          ))}
        </div>
        {/* Bottom row - 3 logos */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 flex-wrap" style={{ minHeight: '60px' }}>
          {logos.slice(4).map((logo) => (
            <div 
              key={logo.alt} 
              className="flex-shrink-0"
              style={{ 
                width: `${logo.width}px`, 
                height: `${logo.height}px`
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={`grayscale opacity-75 hover:opacity-100 transition-opacity ${['USA Today', 'The New York Times', 'Yahoo!'].includes(logo.alt) ? 'object-contain' : ''}`}
                style={{ 
                  color: 'transparent',
                  width: ['USA Today', 'The New York Times', 'Yahoo!'].includes(logo.alt) ? 'auto' : `${logo.width}px`,
                  height: `${logo.height}px`,
                  ...(logo.alt === 'USA Today' ? {
                    objectFit: 'contain',
                    padding: '2px 0',
                    transform: 'scale(1.2)',
                    transformOrigin: 'center'
                  } : {}),
                  ...(logo.alt === 'The New York Times' ? {
                    objectFit: 'contain',
                    width: 'auto',
                    maxWidth: '100%'
                  } : {}),
                  ...(logo.alt === 'Yahoo!' ? {
                    objectFit: 'contain',
                    width: 'auto',
                    maxWidth: '100%'
                  } : {})
                }}
                loading="lazy"
                sizes={logo.sizes}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Desktop layout (hidden on small screens) */}
      <div className="hidden md:flex flex-wrap justify-center items-center gap-4 lg:gap-6 max-w-4xl mx-auto pb-8 px-4" style={{ minHeight: '75px' }}>
        {logos.map((logo) => (
          <div 
            key={logo.alt} 
            className="flex-shrink-0"
            style={{ 
              width: `${logo.width}px`, 
              height: `${logo.height}px`
            }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={`grayscale opacity-75 hover:opacity-100 transition-opacity ${['USA Today', 'The New York Times', 'Yahoo!'].includes(logo.alt) ? 'object-contain' : ''}`}
              style={{ 
                color: 'transparent',
                width: ['USA Today', 'The New York Times', 'Yahoo!'].includes(logo.alt) ? 'auto' : `${logo.width}px`,
                height: `${logo.height}px`,
                ...(logo.alt === 'USA Today' ? {
                  objectFit: 'contain',
                  padding: '2px 0',
                  transform: 'scale(1.2)',
                  transformOrigin: 'center'
                } : {}),
                ...(logo.alt === 'The New York Times' ? {
                  objectFit: 'contain',
                  width: 'auto',
                  maxWidth: '100%'
                } : {}),
                ...(logo.alt === 'Yahoo!' ? {
                  objectFit: 'contain',
                  width: 'auto',
                  maxWidth: '100%'
                } : {})
              }}
              loading="lazy"
              sizes={logo.sizes}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
