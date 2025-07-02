import Account from "@/components/ui/account";
import Banking from "@/components/ui/banking";
import Details from "@/components/ui/details";
import Faq from "@/components/ui/faq";
import Hero from "@/components/ui/hero";
import Partners from "@/components/ui/partners";
import Planning from "@/components/ui/planning";
import Solution from "@/components/ui/solution";
import Testimonials from "@/components/ui/testimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Partners />
      <Details />
      <Account />
        <Banking />
      <Planning />
      {/* <div className="mt-[95rem] sm:mt-[60rem] md:mt-[70rem] lg:mt-[55rem]"> */}
        <Solution />
      {/* </div> */}
      <Testimonials />
      <Faq />
    </main>
  );
}
