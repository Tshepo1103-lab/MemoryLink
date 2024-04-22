import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  left: css`
    position: absolute;
    left: 20px;
  `,
  middle: css`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -23%);
    top: 0;
    z-index: 999;
  `,
  right: css`
    position: absolute;
    right: 20px;
  `,
  link: css`
    margin-right: 20px;
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    font-family:
      Helvetica Neue,
      Arial,
      sans-serif;
  `,
  socialLink: css`
    margin-left: 20px;
    color: #fff;
    font-size: 20px;
    font-family:
      Helvetica Neue,
      Arial,
      sans-serif;
  `,
});
