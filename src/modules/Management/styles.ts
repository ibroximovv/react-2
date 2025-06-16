import styled from "styled-components";

export const ManagementContentWrapper = styled.section`
    padding-top: 110px;
    padding-bottom: 169px;
    display: flex;
    gap: 84px;
    .management-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
        .little-content {
            width: 486px;
            @media (max-width: 1040px) {
                width: 100%;
            }
        }
    }

    @media (max-width: 1040px) {
        flex-direction: column-reverse;
    }
`