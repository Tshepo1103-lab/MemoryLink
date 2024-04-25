import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  main: css`
    text-align: center;
    height: auto;
    background-color: #fff;
    overflow: none;
  `,
  icon: css`
    margin-bottom: 10px;
    font-size: 50px;
  `,
  card: css`
    width: 400px;
    border: none;
    height: 500px;
  `,
  container: css`
    display: flex;
    justify-content: space-between;
    padding: 40px;
    margin-bottom: 20px;
  `,
  header: css`
    margin-left: 40px;
    letter-spacing: 0.15em;
  `,
});
