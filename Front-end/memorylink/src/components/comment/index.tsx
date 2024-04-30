import React from "react";
import { useStyles } from "./style/style";

const CommentFC = () => {
  const { styles } = useStyles();

  return (
    <div className={styles.main}>
      <textarea className={styles.input} />
    </div>
  );
};

export default CommentFC;
