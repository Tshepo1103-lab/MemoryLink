import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  main: css`
    height: 50vh;
  `,
  images: css`
    backdrop-filter: blur(10px);
    width: 100%;
    height: 50vh;
    object-fit: cover;
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  `,
});
