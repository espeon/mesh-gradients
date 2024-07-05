import { GradientReact as GradientView } from "@/components/gradient";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaBluesky, FaDiscord } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { PiSuitcase, PiTwitterLogo, PiGameController, PiTwitchLogo, PiGithubLogo } from "react-icons/pi";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between dark:transition-all">
      <GradientView />
      <div className="z-10 w-full max-w-5xl flex flex-row min-h-full h-screen max-h-full justify-center items-center text-sm lg:flex">
        <div className="mix-blend-luminosity max-w-xs w-full text-black dark:text-white">
          {/*name and title and such row*/}
          <div className="flex flex-row justify-items-end w-full">
            <div className="flex flex-col pt-4 flex-1">
              <h1 className="text-3xl font-medium ">Natalie B.</h1>
              <h2 className="text-md text-slate-700 dark:text-slate-300"><PiGameController className="inline" /> playing zenless zone zero </h2>
              <div className="flex-1" />
            </div>
            <img src="https://i.postimg.cc/2y7f7Zrg/Sailor-Moon-Life-Icons-1.jpg" className="w-24 h-24 rounded-full" alt=""></img></div>
          <div className="flex flex-col">
            <h2 className="text-md text-slate-700 dark:text-slate-300"><GrLocation className="inline" /> Nashville, TN</h2>
            <h2 className="text-md text-slate-700 dark:text-slate-300"><PiSuitcase className="inline" /> no 🙅‍♀️ job</h2>
          </div>
          <div className="flex flex-row flex-wrap pt-4 gap-2">
            <SocialPill logo={PiTwitterLogo} at="@ameiwi" link="https://twitter.com/ameiwi" />
            <SocialPill logo={PiTwitchLogo} at="@ameiwi" link="https://twitch.tv/ameiwi" />
            <SocialPill logo={PiGithubLogo} at="espeon" link="https://github.com/espeon" />
            <SocialPill logo={FaBluesky} at="@natalie.sh" link="https://bsky.app/@natalie.sh" />
            <SocialPill logo={FaDiscord} at="@ameiw" link="https://discord.com/users/267121875765821440" />
          </div>
          <div className="text-lg pt-4">
            I also have a <Link href="https://natalie.sh/blog" className="text-blue-200">blog</Link>.</div>
        </div>
      </div>
    </main>
  );
}

function SocialPill(props: { logo: IconType, at: string, link: string }) {
  return (
    <Link href={props.link ?? "https://nat.vg"} className={`group py-1 px-2 rounded-full bg-slate-500/20 hover:bg-slate-800 shadow-md hover:shadow-sm shadow-slate-800/40 hover:shadow-slate-400/40 w-fit hover:text-blue-200 duration-300 border`}>
      <props.logo className="inline h-4 w-4 text-white group-hover:text-blue-200 duration-200" /> {props.at}
    </Link>
  )
}
