import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100%;
`;

export const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    width: 350px;
    height: 654px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
    margin-right: 30px;
`;

export const Form = styled.form`
    display: flex;
    padding: 0 0 20px;
    margin: 0 0 20px;
    border-bottom: 1px solid #eee;

    input {
        flex: 1;
        height: 50px;
        width: 230px;
        padding: 0 20px;
        background: #d0d0d0;
        font-size: 18px;
        color: #444;
        border-radius: 3px;

        border: ${props => (props.withError ? "2px solid #f00" : 0)};
    }

    button {
        width: 80px;
        height: 50px;
        padding: 0 20px;
        margin-left: 10px;
        background: #63f5d8;
        color: #fff;
        border: 0;
        font-size: 20px;
        font-weight: bold;
        border-radius: 3px;

        &:hover {
            background: #52d89f;
        }
    }
`;
