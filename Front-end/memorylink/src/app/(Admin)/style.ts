import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  side: css`
    height: 100vh;
    overflow: hidden;
    background-color: #003366;
  `,

  layout: css`
    minheight: "100vh";
  `,
  content: css`
    margin: "0 16px";
    padding: 24;
    minheight: 360;
  `,
  list: css`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `,
  items: css`
    letter-spacing: 0.15em;
    color: #ffffff !important;
    font-size: 18px;
    display: flex;
    justify-content: flex-start !important;
    align-items: center;
    height: 60px;
    box-sizing: border-box;
  `,
  logoutButton: css`
    display: flex-row;
    color: #009999;
    font-size: 25px;
    justify-content: flex-end;
    align-items: center;
    margin-right: 50px;
    &:hover {
      color: #ffffff !important;
    }
  `,
  ContainerButton: css`
    margin-bottom: 20px;
    transition: color 0.3s ease;
    position: absolute;
    justify-content: center;
    width: 100%;
    bottom: 0;
    display: flex;
    flex-direction: column;
  `,
  logo: css`
    width: 250px;
    left: 50%;
    transform: translate(-10%, -10%);
    top: 0;
  `,
});
