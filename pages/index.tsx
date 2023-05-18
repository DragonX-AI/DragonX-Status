import type { NextPage } from "next";
import Head from 'next/head';
import Image from "next/image";
//import IncidentsSection from "../src/incidents";
import ServicesSection from "../src/services";

const Home: NextPage = () => {
  return (
    <div className="h-full w-full ">
      <Head>
        <title>DragonX Status Page</title>
      </Head>
      <div className="mt-20 absolute inset-0  bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="w-full h-40 absolute bg-light-purple dark:purple dark:bg-black">
        <div className="sm:ml-0 ml-5 mr-0 mt-3 md:pl-80 md:pr-80 sm:w-full h-full bg-purple-500 dark:bg-black">
          <h1 className="text-4xl font-bold text-white dark:text-white pt-6">
            DragonX - DragonNote Status Page
          </h1>
        </div>
      </div>
      <div className="mt-20 w-full absolute overflow-scroll	">
        <ServicesSection />
      </div>
    </div>
  );
};

export default Home;
//bg-[url(/grid.svg)]