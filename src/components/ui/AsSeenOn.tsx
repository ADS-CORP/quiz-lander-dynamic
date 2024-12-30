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
    { src: bbcLogo, alt: 'BBC', width: 55, height: 55 },
    { src: nytLogo, alt: 'The New York Times', width: 75, height: 75 },
    { src: forbesLogo, alt: 'Forbes', width: 60, height: 60 },
    { src: usaLogo, alt: 'USA Today', width: 65, height: 65 },
    { src: foxLogo, alt: 'Fox News', width: 60, height: 60 },
    { src: yahooLogo, alt: 'Yahoo!', width: 55, height: 55 },
    { src: abcLogo, alt: 'ABC', width: 40, height: 40 },
  ];

  return (
    <div className="pt-8 relative" style={{ zIndex: 1 }}>
      <h2 className="text-lg font-semibold text-center mb-6 text-slate-800">
        As Seen On:
      </h2>
      {/* Mobile layout (hidden on md and up) */}
      <div className="md:hidden flex flex-col gap-6 max-w-4xl mx-auto pb-8">
        {/* Top row - 4 logos */}
        <div className="flex justify-center items-center gap-4">
          {logos.slice(0, 4).map((logo) => (
            <div key={logo.alt} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-auto grayscale opacity-75 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
        {/* Bottom row - 3 logos */}
        <div className="flex justify-center items-center gap-4">
          {logos.slice(4).map((logo) => (
            <div key={logo.alt} className="flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-auto grayscale opacity-75 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Desktop layout (hidden on small screens) */}
      <div className="hidden md:flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto pb-8">
        {logos.map((logo) => (
          <div key={logo.alt} className="flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-auto grayscale opacity-75 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
