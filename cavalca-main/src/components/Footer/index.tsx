import React from 'react';
import { FooterCard, FooterStyle, FooterText } from '../../styles/components/Footer';
import icon from '../../images/icon.png';

const Footer: React.FC = () => {
    return(
        <>
            <FooterStyle>
                <FooterCard>
                    <h1>Mato Grosso</h1>
                    <p>Avenida Ulisses Pompeu de Campos, nº 2320, Centro Norte, Várzea Grande - Mato Grosso - CEP 78110-600, Telefone (65) 3614-9400
                    </p>
                </FooterCard>
                <FooterCard>
                    <h1>Paraná</h1>
                    <p>Rod. BR 467, S/N, KM 109,3 - Prédio 1 - Jardim Canadá, Cascavel, PR, CEP 85813-450, Telefone (45) 3219-9000</p>
                </FooterCard>
                <FooterCard><img src={icon} /></FooterCard>
            </FooterStyle>
            <FooterText>Copyright 2021 ©  - Cavalca Engenharia. Todos os direitos reservados.</FooterText>
        </>
    )
}

export default Footer