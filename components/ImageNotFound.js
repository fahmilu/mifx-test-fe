import { useState } from 'react';
import Image from 'next/image';

const ImageNotFound = (props) => {
    const [ImageError, setImageError] = useState(false);

    return (
        <div className={`relative aspect-square`}>
            {!ImageError ? (
                <Image
                   {...props}
                   onError={() => {
                       setImageError(true);
                   }}
    
                   className={`w-full h-full object-cover absolute top-0 left-0`}
                />
            ) :
            ( <div className={` w-full h-full bg-gray-500 top-0 left-0`}></div> )}
        </div>
    );
};

export default ImageNotFound;