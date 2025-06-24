import { Button } from "./ui/button";

export const LandingContent = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Your Content:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 h-[400px] border border-gray-200">
            <div className="flex justify-between items-center text-gray-600 mb-4">
              <span className="text-gray-600">Upload File</span>
              <button className="p-2 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors">
                📄
              </button>
            </div>
            <div className="h-full border-t border-gray-200 pt-4">
              <textarea
                placeholder="Paste or write text here"
                className="w-full h-full bg-transparent text-gray-600 placeholder-gray-400 focus:outline-none resize-none p-4"
              />
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 h-[400px] border border-gray-200">
            <div className="h-full flex items-center justify-center text-gray-400">
              Your humanised text will be displayed here.
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
          <span className="text-gray-500 text-sm">0/5000 Characters</span>
          <div className="flex gap-4">
            <Button variant="outline" className="rounded-full bg-white hover:bg-gray-100 text-gray-700 border-gray-300">
              Detect AI Content
            </Button>
            <Button className="rounded-full bg-[#F97316] hover:bg-[#F97316]/90 text-white px-6 py-3">
              Humanize ✨
            </Button>
          </div>
          <div className="flex gap-4 text-gray-500">
            <button className="hover:text-gray-700 transition-colors">Export</button>
            <button className="hover:text-gray-700 transition-colors">Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
};
