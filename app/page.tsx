// import { LandingNavbar } from "@/components/landing-navbar";
import LandingHero from "@/components/landing-hero";
// import { LandingContent } from "@/components/landing-content";
import SUDOCompleteSection from "@/components/landing-brands";
import { LandingFeatureOne } from "@/components/landing-feature-one";
import LandingAllInOne from "@/components/landing-all-in-one";
// import { LandingFeaturesGrid } from "@/components/landing-features-grid";
import LandingTestimonials from "@/components/landing-testimonials";
import { LandingFaq } from "@/components/landing-faq";
import { LandingFooter } from "@/components/landing-footer";

const LandingPage = () => {
  return (
    <div className="h-full ">
      {/* <LandingNavbar /> */}
      <LandingHero />
      {/* <LandingContent /> */}
      <SUDOCompleteSection />
      {/* <LandingFeatureOne /> */}
      <LandingAllInOne />
      {/* <LandingFeaturesGrid /> */}
      <LandingTestimonials />
      <LandingFaq />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
