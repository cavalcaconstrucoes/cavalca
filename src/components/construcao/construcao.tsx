import React from 'react';
import Image from 'next/image'
import constru from '../../images/em-construcao.png';

const Construcao = () => {
    return(
     <Image 
        src={constru}
        alt="site em construção"
        width="350px"
        height="300px"
     />
    )
}

export default Construcao;
