import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  main: css`
    height: 50vh;
  `,
  images: css`
    width: 100%;
    height: 50vh;
    object-fit: cover;
    background: rgba(0, 0, 0, 0.5);
  `,
});
