import React from 'react';
import Image from 'next/image'
import constru from '../../images/em-construcao.png';

const Construcao = () => {
    return(
     <Image 
        src={constru}
        width={500}
        height={500}
     />
    )
}

export default Construcao;
