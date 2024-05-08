// styles/styles.js

import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
  title: css`
    marginleft: "45%";
    color: "#fff";
  `,
  cardSpace: css`
    marginleft: "20%";
  `,
  card: css`
    background: "transparent";
  `,
  icon: css`
    backgroundcolor: "rgba(0,255,0,0.25)";
    borderradius: "20px";
    fontsize: "24px";
    padding: "8px";
  `,
  tableCard: css`
    width: "200%";
    background: "transparent";
  `,
  chartCard: css`
    width: "100%";
    marginleft: "50%";
    background: "transparent";
  `,
  pieChartCard: css`
    width: "95%";
    height: "200px";
    background: "transparent";
  `,
  lineChartCard: css`
    background: "transparent";
  `,
});
