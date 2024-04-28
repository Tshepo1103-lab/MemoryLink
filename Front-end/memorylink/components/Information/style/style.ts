import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  main: css`
    height: 45vh;
    background-color: #ffffff;
    padding: 20px;

  `,
  container: css`
    display: flex;
    justify-content: space-between;
    padding: 40px;
    margin-bottom:20px;
  `,
  header: css`
    text-align: left;
    margin-left: 40px;
  `,
  card:css`
    width: 300px;
    margin-bottom: 20px;
  `,
  view:css`
    margin-top: 10px;
    width:100px;
    color:#ffffff;
    background-color:#003366;
  `,
  icon:css`
    margin-bottom: 10px;
    font-size:50px;
  `
});
