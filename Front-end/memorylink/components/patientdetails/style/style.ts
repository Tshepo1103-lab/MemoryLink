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
})