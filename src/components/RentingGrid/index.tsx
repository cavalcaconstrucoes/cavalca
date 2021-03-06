import React from 'react';
import { RentingGridStyle, RentingGridCard, RentingGridImg } from '../../styles/components/RentingGrid';
import img1 from '../../images/01.jpg';
import img2 from '../../images/02.jpg';
import img3 from '../../images/03.jpg';
import img4 from '../../images/04.jpg';
import img5 from '../../images/05.jpg';
import img6 from '../../images/06.jpeg';
import Construcao from '../construcao/construcao';

const RentingGrid: React.FC = () => {
    return(
        <RentingGridStyle>
            <Construcao />
        </RentingGridStyle>
    )
}

export default RentingGrid