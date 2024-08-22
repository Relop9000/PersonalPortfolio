import { Rubik } from "next/font/google";

export default function MobileHeader() {
  return (
    <div className="flex justify-center p-4 mobileHeader">
      <div className="flex justify-between max-w-7xl w-80">
        <h2 className="text-3xl font-normal">TOM</h2>
        <img src="/kebab.png" className="w-6" />
      </div>
    </div>
  );
}
