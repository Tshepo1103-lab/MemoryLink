"use client";

import WithRole from "../../HOC/withRole";
import Hero from "../../components/Hero/page";
import Information from "../../components/Information/page";
import RecentReport from "../../components/RecentReport/page";
import SuccessStories from "../../components/SuccessStories/page";
import ClientLayout from "./(Client)/layout";
import { useStyles } from "./styles";

function Home() {
  const { styles } = useStyles();

  return (
    <main className={styles.main}>
      <ClientLayout>
        <Hero />
        <Information />
        <RecentReport />
      </ClientLayout>
    </main>
  );
}

export default WithRole(Home);
