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
    width: 450px;
    border: none;
    height: 430px;
    box-shadow: 5px 15px 5px 2px rgba(0, 0, 0, 0.1);
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
