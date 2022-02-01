import styled from "styled-components";

export const FooterStyle = styled.div`
    display: flex;
    flex: row;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(71,71,73,0.994817910074186) 100%, rgba(175,179,180,1) 100%); 
    padding: 50px;
    margin-top: 50px;
`;

export const FooterCard = styled.div`
    h1{
        font-size: 14px;
    }
    p{
        font-size: 14px;
    }
`;

export const FooterText = styled.div`
    text-align: center;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(71,71,73,0.994817910074186) 100%, rgba(175,179,180,1) 100%);

    p{
        bottom: 0;
        position:fixed;
    }
`;