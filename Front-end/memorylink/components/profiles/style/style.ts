import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  searchBox: css`
    width: 50%;
    margin-top: 2%;
    position: fixed;
    height: 50px;
    z-index: 999;
    left: 50%;
    transform: translateX(-47%);
  `,
  searchContainer: css`
    transform: translate(4%, -40%);
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
  recordsContainer: css`
    display: flex;
    justify-content: center;
    transform: translateX(30%);
    margin-top: 100px;
    border: 1px solid #003366;
    width: 60%;
    padding: 40px;
  `,
});
