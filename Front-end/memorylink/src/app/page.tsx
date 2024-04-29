"use client";

import WithRole from "@/hoc/withRole";
import Hero from "@/components/Hero/page";
import Information from "@/components/Information/page";
import RecentReport from "@/components/RecentReport/page";
import SuccessStories from "@/components/SuccessStories/page";
import Loader from "@/components/loader";
import { useUserState } from './../providers/AuthProvider'
import ClientLayout from "./(Client)/layout";
import { useStyles } from "./styles";

function Home() {
  const { styles } = useStyles();
  const status=useUserState();

  return (
    <main className={styles.main}>
      {status.isPending?
      <Loader/>:
      <ClientLayout>
        <Hero />
        <Information />
        <RecentReport />
      </ClientLayout>}
    </main>
  );
}

export default WithRole(Home);
