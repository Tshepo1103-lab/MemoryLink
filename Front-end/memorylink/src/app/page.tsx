import Hero from "../../components/Hero/page";
import Information from "../../components/Information/page";
import RecentReport from "../../components/RecentReport/page";
import SuccessStories from "../../components/SuccessStories/page";



export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Information/>
      <RecentReport/>
      <SuccessStories/>
    </main>
  );
}
