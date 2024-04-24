import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  main: css`
    height: 40vh;
    background-color: #fff;
    padding:20px;
  `,
  card: css`
    background: linear-gradient(to bottom right,#fff, #003366, #);
    border-radius: 20px;
    color:#000;
    border:1px solid #003366;
    cursor: grab;
    box-shadow: 5px 15px 5px 2px rgba(0, 0, 0, 0.09);
    transition: background 0.3s ease-in-out, transform 0.9s ease-in-out, opacity 0.9s ease-in-out;
    overflow: hidden;
    width: 400px;
    height: 300px;
    margin-right: 20px;
    position: relative;
    opacity: 0.8; 
    &:hover {
      opacity: 1; 
      border:2px solid #fff;
      
    }
    `,
    cardBox:css`
    padding: 30px;
    display: inline-flex;
    flex-wrap: nowrap;
    transition: transform 0.9s ease-in-out;
    user-select: none;
    `,
    container: css`
    margin-left: 90px;
    margin-right: 90px;
    margin-bottom: 20px;
    align-items: center;
    overflow-x: auto;
    white-space: nowrap;
    cursor: grab;
    
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
  
    border-radius: 5px;
  }
`
});
