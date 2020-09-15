import React, { Suspense } from "react";
import "../../src/App.css";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

import SimpleMap from "../components/MAP";
const Cards = React.lazy(() => import("../components/Cards"));

function Home() {
  return (
    <div>
      <HeroSection />
      <Suspense fallback={<div>loading...</div>}>
        <Cards />
      </Suspense>
      <SimpleMap />
      <Footer />
    </div>
  );
}

export default Home;
