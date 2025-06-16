import styled from "styled-components";


export const CustomerWrapper = styled.section`
    display: flex;
    gap: 94px;
    padding-bottom: 150px;
    @media (max-width: 1040px) {
        flex-direction: column;
    }
    .customer-content {
        @media (max-width: 1040px) {
            width: 100%;
        }
        width: 480px;
        display: flex;
        flex-direction: column;
        gap: 30px;
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

        ul {
            display: flex;
            flex-direction: column;
            gap: 30px;
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