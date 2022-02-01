import React from 'react';
import { RentingGridStyle, RentingGridCard, RentingGridImg } from '../../styles/components/RentingGrid';
import img1 from '../../images/01.jpg';
import img2 from '../../images/02.jpg';
import img3 from '../../images/03.jpg';
import img4 from '../../images/04.jpg';
import img5 from '../../images/05.jpg';
import img6 from '../../images/06.jpeg';

const RentingGrid: React.FC = () => {
    return(
        <RentingGridStyle>
            <RentingGridCard>
                <RentingGridImg><img src={img1} /> </RentingGridImg>
                <h1>Britador móvel para finos tipo VSI</h1>
                <p>Equipamento de britagem que montado em paralelo com outros conjuntos proporcionam um aumento significativo da produção de materiais "finos".</p>
            </RentingGridCard>
            <RentingGridCard>
                <RentingGridImg><img src={img2} /> </RentingGridImg>
                <h1>Conjunto de Britagem com Carretas Separadas</h1>
                <p>A Cavalca Construções possui um conjunto de britagem formada por um britador de mandíbulas C-100 e britadores cônicos HP 200 da marca Metso.</p>
            </RentingGridCard>
            <RentingGridCard>
                <img src={img3} />
                <h1>Conjunto de Britagem Completo com 1 Chassi</h1>
                <p>Britadores modelo Metso NW 80 HP 200, peneira de 3 decks. Proporcionam excelentes produções atendendo à demanda de grandes Obras com sua montagem fácil e prática.</p>
            </RentingGridCard>
            <RentingGridCard>
                <img src={img4} />
                <h1>Usinas de Micro Revestimento</h1>
                <p>Locação de Usinas de Micro Revestimento sendo utilizadas para a proteção, impermeabilização e rejuvenescimento superficial e estético dos pavimentos asfálticos em início de desgaste pelo tráfego.</p>
            </RentingGridCard>
            <RentingGridCard>
                <img src={img5} />
                <h1>Fresadoras</h1>
                <p>Locação de Fresadora de asfaltos utilizadas para remoção de pavimentos asfálticos, através de corte e desbaste de uma ou mais camadas extraindo um material de tamanho uniforme.</p>
            </RentingGridCard>
            <RentingGridCard>
                <img src={img6} />
                <h1>Recicladoras de Asfalto</h1>
                <p>Locação de Recicladoras de Asfalto, máquinas estabilizadoras de solo e recicladoras de pavimentos asfálticos que executam de uma só vez ambos os serviços, também pode executar separadamente.</p>
            </RentingGridCard>

        </RentingGridStyle>
    )
}

export default RentingGrid