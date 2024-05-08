"use client";

import WithRole from "@/hoc/withRole";
import Hero from "@/components/Hero";
import Information from "@/components/Information";
import RecentReport from "@/components/RecentReport";
import SuccessStories from "@/components/SuccessStories";
import Loader from "@/components/loader";
import { useUserState } from "./../providers/AuthProvider";
import ClientLayout from "./(Client)/layout";
import { useStyles } from "./styles";

function Home() {
  const { styles } = useStyles();
  const status = useUserState();

  return (
    <main className={styles.main}>
      {status.isPending ? (
        <Loader />
      ) : (
        <ClientLayout>
          <Hero />
          <Information />
          <RecentReport />
          <SuccessStories />
        </ClientLayout>
      )}
    </main>
  );
}

export default Home;
