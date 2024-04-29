import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  main: css`
    display: flex;
    height: 70vh;
    border: 2px solid #003366;
    padding: 100px;
    color: #000;
    margin: 70px;
  `,
  dragbox: css`
    height: 400px;
    flex: 1;
    margin-left: 50px;
  `,
  header: css`
    text-align: center;
    margin-bottom: 30px;
    letter-spacing: 0.15em;
  `,
});
