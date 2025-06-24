import { Button } from "./ui/button";

const FeatureCard = ({ title, description, tag, users, featureNumber }: { title: string, description: string, tag: string, users: string, featureNumber: number }) => (
  <div className="bg-white/5 rounded-2xl p-8 space-y-4 flex-1">
    <p className="text-sm text-white/60">FEATURE {featureNumber}</p>
    <h3 className="text-2xl text-white font-bold">{title}</h3>
    <p className="text-white/70">{description}</p>
    <Button variant="outline" className="rounded-full bg-transparent text-white">Try Now →</Button>
    <p className="text-sm text-red-400">* {users} Currently using</p>
  </div>
);

export const LandingFeaturesGrid = () => {
  const features = [
    {
      featureNumber: 1,
      title: "AI Content Detector",
      description: "Worried your assignment might get flagged as AI? Our AI checker helps you make sure your work passes AI detection with up to 99.8% accuracy. It's free to check, fast, and super reliable—just what you need before hitting submit.",
      users: "8,805+"
    },
    {
      featureNumber: 2,
      title: "AI Humanizer & Paraphraser",
      description: "Make your AI writing sound 100% human. Avoid getting flagged by tools like GPTZero or Turnitin—your content will read naturally and pass as fully human-written.",
      users: "12,606+"
    },
    {
      featureNumber: 3,
      title: "AI Content Writer",
      description: "Stuck on what to write? Quickly generate your next essay, article, outline, or project in seconds. Get human-like content in any tone—casual, formal, or anything in between—with easy in-text editing built right in.",
      users: "3,230+"
    },
    {
      featureNumber: 4,
      title: "Quick Export",
      description: "Export your work in seconds. Easily download your content in the format you need—Google Docs, Microsoft Word, and more.",
      users: "1,234+"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        Your <span className="bg-[#F97316] px-2 rounded">All-in-One</span> Smart Writing Assistant
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">{feature.featureNumber}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
            </div>
            <p className="text-gray-600 mb-6">{feature.description}</p>
            <Button className="rounded-full bg-[#F97316] hover:bg-[#F97316]/90 text-white px-6 py-3">
              Try Now →
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              * {feature.users} Currently using
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
