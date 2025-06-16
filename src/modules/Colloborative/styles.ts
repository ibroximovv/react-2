import styled from "styled-components";

export const ColloborativeWrapper = styled.section`
    display: flex;
    gap: 84px;
    padding-bottom: 150px;
    @media (max-width: 1040px) {
        flex-direction: column-reverse;
    }
    .colloborative-content {
        @media (max-width: 1040px) {
            width: 100%;
        }
        width: 500px;
        display: flex;
        gap: 30px;
        flex-direction: column;
        div {
            display: flex;
            flex-direction: column;
            gap: 8px;
            h4 {
                color: var(--color-text);
                font-weight: 700;
                font-size: 32px;
                line-height: 100%;
                letter-spacing: 0px;
            }

            h6 {
                color: var(--color-text);
                font-weight: 600;
                font-size: 16px;
                line-height: 100%;
                letter-spacing: 0px;

            }
        }

        p {
            color: var(--color-text);
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
            letter-spacing: 0px;
        }

    }
`