import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
     button{
        width: 100px;
        padding: 0 1rem;
        height: 2rem;
        background: var(--green);
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        margin-left: 1rem;
        font-size: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-weight: 600;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.9);
        }
        a{
            text-decoration: none;
            color: #FFF;
            font-weight: 600;
        }
    }
`;