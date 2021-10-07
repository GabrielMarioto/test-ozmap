import styled from "styled-components";

export const Container = styled.div`
    max-width: 800px;
    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        color: var(--text-title);        
    }
    .item{
        width: 800px;
        padding: 1em;
        margin: 1em;
        border: 1px solid black;
        display: flex;
        justify-content: space-around;
    }
    .index{
        background: var(--background);
        padding: 1.5rem 2rem;
        color: var(--text-title);
        display: flex;
        justify-content: center;
    }
    .delete{
        background: var(--red);
    }
    button{
        font-size: 1rem;
        color: #fff;
        background: var(--green);
        border: 0;
        padding: 0 1rem;
        border-radius: 0.25rem;
        height: 2rem;
        margin-left: 0.5rem;
        font-weight: 600;
    }
    strong, h3{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;