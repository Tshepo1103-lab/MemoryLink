import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  searchBox: css`
    width: 50%;
    height: 50px;
    z-index: 999;
  `,
  searchContainer: css`
    transform: translate(4%, -70%);
  `,
  header: css`
    text-align: center;
    margin-left: 40px;
    letter-spacing: 0.15em;
  `,
  paragraph: css`
    text-align: center;
    margin-top: 15px;
    font-size: 15px;
    letter-spacing: 0.15em;
  `,
  answer: css`
    text-align: center;
    margin-top: 15px;
    font-size: 13px;
    letter-spacing: 0.1em;
  `,
  recordsContainer: css`
    justify-content: center;
    transform: translateX(25%);
    margin-top: 23px;
    border: 1px solid #003366;
    width: 70%;
    height: 60vh;
    padding: 10px;
  `,
});
