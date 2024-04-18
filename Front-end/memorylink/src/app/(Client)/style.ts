import { createStyles, css } from "antd-style";


export const useStyles = createStyles({
    layoutStyle: css`
        border-radius: 0;
        overflow: hidden;
        width: 100%;
        max-width: 100%
    `,
     
    headerStyle: css`
        padding:0;
        background-color: #003366;
        height:80px;
    `,
    
    footerStyle: css`
       background-color: #003366;
       padding:0;
       height:50px;
    `,
    contentStyle: css`
        text-align: center;
        height: auto;
        background-color:#fff;
    `
})