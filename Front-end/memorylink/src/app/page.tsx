import Hero from "../../components/Hero/page";
import Information from "../../components/Information/page";
import RecentReport from "../../components/RecentReport/page";
import SuccessStories from "../../components/SuccessStories/page";
import ClientLayout from "./(Client)/layout";



export default function Home() {
  return (
    <main className="">
      <ClientLayout>
        <Hero/>
        <Information/>
        <RecentReport/>
        <SuccessStories/>
      </ClientLayout>
    </main>
  );
}
