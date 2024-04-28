import { createStyles,css } from "antd-style";

export const useStyles=createStyles({
        main: css`
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
    `,
        header: css`
        text-align: center;
        margin-left: 40px;
        letter-spacing: 0.15em;
    `,
    mother: css`
    margin-top:40px;
        width: 90%;
        height: 55vh;
        background-color: #003366;
        position: relative;
    `,
    child: css`
        display:flex;
        align-items:center;
        position: absolute;
        color: #000;
        width: 100%;
        border:5px solid #003366;
        background-color:#fff;
        height:100%;
        margin-top:50px;
        margin-left:50px;
    `,
    button: css`
    width: 150px;
    color: #ffffff;
    background-color: #003366;
    &:hover {
        background-color: #009999 !important;
        color: #ffffff !important;
        border: 2px solid #ffffff !important;
    }
    `,
    comment:css`
        margin-bottom:20px;
        background-color:#003366;
        width:100%;
        color:#fff;
        padding:10px;
        border-radius:5px;
    `
})