import styled from "styled-components";

export const LittleContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    h5 {
        color: var(--color-text);
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0px;
    }

    p {
        color: var(--color-text);
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0px;
    }
    padding-bottom: 25px;
`