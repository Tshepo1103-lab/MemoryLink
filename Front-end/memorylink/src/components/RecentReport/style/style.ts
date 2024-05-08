import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  main: css`
    height: 60vh;
    background-color: #003366;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  `,
  mother: css`
    width: 90%;
    height: 80%;
    background-color: #fff;
    position: relative;
    margin-bottom: 20px;
  `,
  child: css`
    color: #ffffff;
    width: 100%;
    height: 100%;
  `,
  header: css`
    color: #fff !important;
  `,
  card: css`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #003366;
    margin: 0 auto;
  `,
  image: css`
    flex: 1;
    objectfit: cover;
    height: 40vh;
    marginleft: 40px;
    width: 600px;
  `,
  paragraph: css`
    color: #fff;
    font-size: 18px;
    letter-spacing: 0.1em;
    text-align: left;
    margin-left: 30px;
  `,
});
