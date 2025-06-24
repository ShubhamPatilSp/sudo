import { Button } from "./ui/button";
import { Logo } from "./logo";

export const LandingFooter = () => {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">500,000+</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join 500,000+ students and writers using SUDO to write faster and sound more human.
          </p>
          <Button variant="outline" className="rounded-full bg-[#F97316] hover:bg-[#F97316]/90 text-white">
            Try Now - For Free
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="text-sm text-gray-600 mt-4">
              We make writing easier for students and writers—simple as that.
            </p>
            <Button className="rounded-full bg-[#F97316] hover:bg-[#F97316]/90 text-white mt-4">
              Start Now - For Free
            </Button>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">AI Humaniser</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>AI Humaniser</li>
              <li>AI Content Detector</li>
              <li>AI Content Writer</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Pricing</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Social Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 pt-10 mt-10 border-t border-gray-200">
          All rights reserved - SUDO Labs Limited 2025
        </div>
      </div>
    </footer>
  );
};
