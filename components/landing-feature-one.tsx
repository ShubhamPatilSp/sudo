import Image from "next/image";
import { Button } from "./ui/button";

export const LandingFeatureOne = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl shadow-lg p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
              Used ChatGPT to write your assignment?
            </h2>
            <p className="text-gray-600 text-lg">
              Your professor might catch it—unless you humanize it first. Use Sudo to make it sound real and pass AI checks. Get full marks without stress.
            </p>
            <Button className="rounded-full bg-[#F97316] hover:bg-[#F97316]/90 text-white px-8 py-4">
              Start Now - For Free
            </Button>
          </div>
          <div>
            <div className="relative w-full h-[400px] bg-gray-50 rounded-lg border border-gray-200">
              {/* Placeholder for actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Feature Image Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
