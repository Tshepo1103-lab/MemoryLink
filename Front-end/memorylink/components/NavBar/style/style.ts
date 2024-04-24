import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  left: css`
    position: absolute;
    left: 50px;
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
    right: 50px;
  `,
  link: css`
    margin-right: 40px;
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    font-family:
    Helvetica Neue,
    Arial,
    sans-serif;
    letter-spacing: .14em;
    &:hover{
      color: #009999 !important;
    }
  `,
  socialLink: css`
    margin-left: 40px;
    color: #fff;
    font-size: 25px;
    font-family:
    Helvetica Neue,
    Arial,
    sans-serif;
    &:hover{
      color: #009999 !important;
    }
  `,
});
