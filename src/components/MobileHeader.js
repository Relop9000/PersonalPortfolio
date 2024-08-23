import { Rubik } from "next/font/google";

export default function MobileHeader() {
  return (
    <div className="flex justify-between p-4 mobileHeader max-w-7xl md:container md:hidden">
      <div>
        <h2 className="text-3xl font-normal">TOM</h2>
      </div>
      <div className="flex justify-center items-center w-8 h-8">
        <img src="/kebab.png" className="w-6 scale-150" />
      </div>
    </div>
  );
}
