import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  main: css`
    height: 60vh;
    background-color:  #003366;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:20px;
  `,
  mother:css`
    width: 90%;
    height: 90%;
    background-color:#fff;
    position: relative; 
    margin-bottom:20px;
  `,
  child:css`
    color:#ffffff;
    width: 100%;
    height: 100%;
  `,
  header:css`
  color:#fff !important;
  `,
  card:css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #003366;
  `,
  image:css`
  flex: 1;
  objectFit: cover;
  height:40vh;
  marginLeft:40px;
  width:600px;
  `
  
});
