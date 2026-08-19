import { frauncesFont } from "@/utils/fonts";
import Link from "next/link";

export default function PlayPage() {
  return (
    <main className="font-afacad min-h-[60vh] bg-[#f4f1ea] text-[#363636] px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <p className={`${frauncesFont.className} italic text-3xl md:text-5xl font-semibold mb-4`}>
          Play
        </p>
        <p className="text-lg md:text-xl opacity-80 mb-10">
          Experiments, side quests, and things made for fun. More coming soon.
        </p>
        <Link
          href="/#projects"
          className="inline-flex items-center justify-center min-w-[104px] h-[34px] px-5 rounded-full border border-[#363636] hover:bg-[#d2d6cc] transition-colors"
        >
          Back to Work
        </Link>
      </div>
    </main>
  );
}
