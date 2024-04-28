import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  main: css`
    background-color: #003366;
    width: 60%;
    height: 50vh;
    display: flex;
    justify-content: center;
  `,
  recordsContainer: css`
    display: flex;
    justify-content: center;
    transform: translateX(20%);
    margin-top: 40px;
    border: 1px solid #003366;
    width: 70%;
    height: 56vh;
    padding: 10px;
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
