import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  main: css``,
  form: css`
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 60px 20px;
    box-sizing: border-box;
    background-color: #ffffff;
    font-size: 24px;
    border-radius: 3%;
    box-shadow: 5px 15px 5px 2px rgba(0, 0, 0, 0.1);
  `,
  input: css`
    width: 350px;
    height: 40px;
    font-size: 20px;
    border: none;
    border-radius: 0;
    border-bottom: 2px solid #003366;
    outline: none;
    background-color: transparent;
    margin-top: 15px;
    margin-bottom: 20px;
    box-sizing: border-box;
    ::placeholder {
      color: #666666 !important;
    }
  `,
  middle: css`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -105%);
    z-index: 999;
  `,
  button: css`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    font-size: 15px;
    letter-spacing: 0.15em;
    width: 350px;
    height: 50px;
    align-items: center;
    color: #ffffff;
    transform: translate(-33%, -40%);
    background-color: #003366;
    &:hover {
      background-color: #009999 !important;
      color: #fffffff !important;
      border: 2px solid #ffffff !important;
    }
  `,
  text: css`
    display: flex;
    color: #000;
    transform: translate(35%, -40%);
    font-size: 15px;
    text-align: center;
    text-decoration: none;
    &:hover {
      color: #009999;
    }
  `,
});
