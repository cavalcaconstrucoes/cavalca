import styled from "styled-components";

export const RentingGridStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: center;
`;

export const RentingGridCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
    border: 1px solid none;
    background-color: #616161;
    border-radius: 4px;
    box-shadow: 0 2px 2px 2px rgba(216, 213, 213, 0.062);
    height: 350px;
    width: 400px;

    h1{
        margin-top: 5px;
        color: #FFBF00;
        font-size: 22px;
    }

    p{
        margin-top: 5px;
        font-size: 16px;
    }

    img {
        max-width:280px;
        max-height:250px;
        width: auto;
        height: auto;
    }   
`;

export const RentingGridImg = styled.div`
    align-items: center;
    margin: 0;
`;