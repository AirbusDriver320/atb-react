import Image from "react-bootstrap/Image";

import "./banner.styles.css";

function Banner({ data }) {
  return (
    <div className='text-center mt-4'>
      <div className='imgGroup'>
        <Image className='logoSnS' src={data.logoSnS} />
        <svg
          id="i-close"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="48"
          height="48"
          fill="none"
          stroke="currentcolor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="0.5"
          className='mx-4 cross'
        >
          <path d="M2 30 L30 2 M30 30 L2 2" />
        </svg>
        <Image className='logoANTO' src={data.logoANTO} />        
      </div>

      <div>
        <Image src={data.bannerImage} fluid />
      </div>
    </div>
  );
}

export default Banner;
