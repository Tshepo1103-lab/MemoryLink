import { createStyles ,css} from "antd-style";

export const useStyles=createStyles({
    main: css`
    background-color:  #003366;
    width:60%;
    height: 60vh;
    display: flex;
    justify-content: center;
    `,
    recordsContainer:css`
    display: flex; 
    justify-content:center; 
    transform: translateX(30%);   
    margin-top: 40px;
    border:2px solid #003366;
    width:60%;
    padding:40px;
    `,
    header: css`
    text-align: center;
    margin-left: 40px;
    letter-spacing: .15em; 
    `,
    paragraph:css`
    text-align:center;
    margin-top:15px;
    `
});