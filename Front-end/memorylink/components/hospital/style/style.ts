import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  main: css`
    background-color: #003366;
    width: 60%;
    height: 60vh;
    display: flex;
    justify-content: center;
  `,
  recordsContainer: css`
    display: flex;
    justify-content: center;
    transform: translateX(30%);
    margin-top: 40px;
    border: 1px solid #003366;
    width: 60%;
    padding: 40px;
  `,
  header: css`
    text-align: center;
    margin-left: 40px;
    letter-spacing: 0.15em;
  `,
  paragraph: css`
    text-align: center;
    letter-spacing: 0.15em;
    margin-top: 15px;
    font-size: 15px;
  `,
});
