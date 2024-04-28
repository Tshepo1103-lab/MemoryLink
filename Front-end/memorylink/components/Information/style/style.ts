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
    margin-bottom: 20px;
  `,
  header: css`
    text-align: left;
    margin-left: 40px;
    letter-spacing: 0.15em;
  `,
  card: css`
    width: 300px;
    margin-bottom: 20px;
  `,
  view: css`
    margin-top: 10px;
    width: 100px;
    color: #ffffff;
    background-color: #003366;
    &:hover {
      background-color: #009999 !important;
      color: #fffffff !important;
      border: 2px solid #ffffff !important;
    }
  `,
  icon: css`
    margin-bottom: 10px;
    font-size: 50px;
  `,
});
