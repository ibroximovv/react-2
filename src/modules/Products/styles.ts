import styled from "styled-components";

export const ProductsSectionStyle = styled.section`
    padding-bottom: 90px;

    .products {
        div {
            h2 {
                color: var(--color-text);
                font-weight: 700;
                font-size: 32px;
                line-height: 100%;
                letter-spacing: 0px;
                text-align: center;
                width: 539px;
                margin: 0 auto;
                padding: 114px 0 66px;
                @media (max-width: 1040px) {
                    width: 100%;
                }
            }
        }

        ul {
            display: flex;
            gap: 46px;
            width: 1095px;
            height: 204px;
            justify-content: space-between;
            @media (max-width: 1040px) {
                display: flex;
                width: 100%;
                flex-wrap: wrap;
                height: auto;
                gap: 20px;
                justify-content: center;
            }
            padding-bottom: 30px !important;
            margin-bottom: 30px;
        }
        Button {
            margin: 0 auto;
            display: block;
        }
    }
`