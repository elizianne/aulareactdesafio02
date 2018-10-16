import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Repository = styled.div`
    width: 250px;
    background: #fff;
    border-radius: 3px;
    margin: 0 10px;
    padding-bottom: 15px;
    display: flex;
    flex-direction: column;

    header {
        padding: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 50px;
        }

        strong {
            font-size: 20px;
            margin-top: 1px;
        }

        small {
            font-size: 12px;
            color: #666;
        }
    }
`;
