import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Content = styled(Unform)`
    input{
        width: 100%;
        padding: 0 1rem;
        height: 1.5rem;
        border-radius: 0.25rem;
        border: 0.5px solid #d7d7d7;
        background: #e7e9ee;        
        font-weight: 400;
        font-size: 1rem;
        margin-top: 0.5rem;
        margin-left: 0.5rem;    
        & + input{
            margin-top: 0.2rem;
            /* margin-left: 0.5rem;
            margin-bottom: 0.1rem; */
        }
        &::placeholder{
            color: var(--text-body);
        }
    }
    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 2rem;
        background: var(--green);
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1rem;
        font-weight: 600;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.9);
        }
    }
    h3{
        display: flex;
        margin-top: 0.5rem;
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1rem;
    }
`;

export const Container = styled.div`
    max-width: 800px;
    display: flex;
    justify-content: center;
    align-items: center; 
    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        color: var(--text-title);        
        strong{
            display: block;
            margin-top: 0.5rem;
            font-size: 1.3rem;
            font-weight: 400;
            line-height: 1rem;
        }        
    }
`;