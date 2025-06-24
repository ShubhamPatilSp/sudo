import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="w-8 h-8 bg-[#F97316] rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-xl">S</span>
      </div>
      <span className="font-bold text-[#111827] text-xl">Sudo</span>
    </Link>
  );
};
