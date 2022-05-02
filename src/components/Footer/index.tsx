import React from 'react';
import { FooterCard, FooterStyle, FooterText } from '../../styles/components/Footer';

const Footer: React.FC = () => {
    return(
        <>
            <FooterStyle>
                <FooterCard>
                    <h1>Mato Grosso</h1>
                    <p>Rua Sandro Lúcio Guimarães, nº 2320, Loteamento Pampulha, Bairro: Jardim 23 de Setembro, Várzea Grande - Mato Grosso - CEP 78110-724, Telefone (65) 3614-9400
                    </p>
                </FooterCard>
                <FooterCard>
                    <h1>Paraná</h1>
                    <p>Rua Maranhão, nº 1700, sala 1, Centro, Cascavel, PR, CEP: 85801-050, Telefone (45) 3219-9000</p>
                </FooterCard>
            </FooterStyle>
            <FooterText>Copyright 2022 ©  - Cavalca Construções. Todos os direitos reservados. <a href="https://www.flaticon.com/br/icones-gratis/construcao" title="construção ícones">Construção ícones criados por ultimatearm - Flaticon</a></FooterText>
        </>
    )
}

export default Footer