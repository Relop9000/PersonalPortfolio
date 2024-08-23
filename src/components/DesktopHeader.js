import DownloadCV from "./DownloadCV";
export default function DesktopHeader() {
  return (
    <div className="desktopHeader py-4 px-20 md:container hidden md:block">
      <div className="flex items-center justify-between">
        <div className="flex text-3xl font-normal">TOM</div>
        <div className="flex items-center justify-end gap-6 font-medium text-gray-600 text-base">
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
          <span className="text-gray-100">|</span>
          <img className="w-9 h-9" src="/themeLight.png" />
          <DownloadCV />
        </div>
      </div>
    </div>
  );
}
