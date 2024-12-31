import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { outfit } from '@/app/ui/fonts';

export default function IgiftLogo() {
  return (
    <div
      className={`${outfit.className} flex flex-row items-center leading-none text-white`}
    >
      {/* Globe Icon */}
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />

      {/* iGift Text with Superscript Icon */}
      <p className="text-[44px] relative inline-block">
        iGift
        <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center absolute top-0 -right-8">
          {/* Plus Circle SVG */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 21 21"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            aria-label="Plus Circle Icon"
          >
            <path d="M10.5 21C4.701 21 0 16.299 0 10.5S4.701 0 10.5 0 21 4.701 21 10.5 16.299 21 10.5 21zm0-19C5.813 2 2 5.813 2 10.5S5.813 19 10.5 19 19 15.187 19 10.5 15.187 2 10.5 2zm5 9h-4v4h-2v-4H6v-2h4V6h2v4h4v2z" />
          </svg>
        </span>
      </p>
    </div>
  );
}
