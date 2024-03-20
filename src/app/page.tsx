import Image from "next/image";
import { PiSoundcloudLogoFill } from "react-icons/pi";
import { HiArrowRight } from "react-icons/hi2";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ReactElement } from "react";
import { FaTiktok } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import ActivityList from "@/components/activityList";
import Mediacard from "@/components/mediaCard";

export default function Home() {
  interface MediaIcon {
    id: number;
    icon: ReactElement; 
  }

  const mediaIcons: MediaIcon[] = [
    {
      id: 1,
      icon: <RiFacebookFill />,
    },
    {
      id: 2,
      icon: <FaXTwitter />,
    },
    {
      id: 3,
      icon: <IoLogoInstagram />,
    },
    {
      id: 4,
      icon: <FaYoutube />,
    },
    {
      id: 5,
      icon: <FaTiktok />,
    },
    {
      id: 6,
      icon: <FaWhatsapp />,
    },
    {
      id: 7,
      icon: <FaSnapchatGhost />,
    },
  ];

  return (
    <main className="all-texts background-blur flex flex-col w-full h-full items-center justify-center">
      <div className="bg-[#1D1D1D] flex justify-center lg:w-1/2 md:w-3/4 w-full md:my-[60px] mt-0 mb-10 sm:rounded-3xl">
        <div className="flex items-center w-[68%] flex-col ">
          <div className="md:mt-[63px] mt-[40px] relative md:h-[108px] md:w-[228px] sm:h-[90px] sm:w-[180px]  h-[75px] w-[150px]">
            <Image
              className="h-fit w-full"
              src="/images/DayDay-Logo2.png"
              width={228}
              height={108}
              alt="daydaylogo"
              layout="responsive"
            />
          </div>

          <div className="bg-white w-full mt-10 sm:mb-[42px] mb-8 relative rounded-3xl">
            <Image
              className="w-full rounded-3xl h-fit"
              src="/images/profileImage.png"
              alt="artist dayday"
              width={458}
              height={458}
              layout="responsive"
            />
          </div>

          <ul className="flex sm:gap-2 gap-1 mb-7">
            {mediaIcons.map(({ id, icon }) => (
              <li
                key={id}
                className="rounded-full bg-[#3E3E3E] sm:text-2xl text-lg sm:w-9 w-7 sm:h-9 h-7 flex justify-center items-center"
              >
                {icon}
              </li>
            ))}
          </ul>

          <ActivityList
            customStyle={{ color: "darkorangecolor" }}
            content="Award winning DJ & Radio Presenter"
          />

          <div className="mt-[34px] mb-11 flex flex-col w-full gap-5">
            <Mediacard
              imageName="1XTRA-image.png"
              content="BBC 1XTRA Radio Shows"
            />
            <Mediacard
              imageName="YoutubeImageProfile.png"
              content="DJ DAY DAY Youtube Channel"
            />
            <Mediacard
              imageName="MerchandiseShop.png"
              content="DJ DAY DAY Mechandise"
            />
          </div>
          <ActivityList
            customStyle={{ color: "lightorangecolor" }}
            content="NEW MIX LIVE - TAKE A LISTEN"
          />
          <div className="media-mxtape mb-9 w-full flex sm:gap-4 gap-2 mt-[41px] sm:px-5 sm:py-4 p-3">
            <div className="">
              <Image
                className="rounded-3xl"
                src="/images/artworks.png"
                alt="blogo"
                width={150}
                height={150}
              />
            </div>
            <div className="flex flex-col w-[65%] gap-y-2">
              <div className="flex justify-between">
                <h3 className="feature-title w-fit px-2 py-1 sm:text-sm text-xs">
                  Dj Day Day
                </h3>
                <PiSoundcloudLogoFill className="sm:text-3xl text-xl" />
              </div>

              <div className="flex flex-col h-full lg:w-[90%] justify-between">
                <h2 className="music-title crop-text sm:text-base text-sm">
                  @DJDAYDAY_ / The Vibe Mixtape Vol 6 (R&B, Hip Hop, Bashment,
                  Afro Beats + UK Rap)
                </h2>
                <p className="text-[#FFC6B2]  text-sm">19 hours ago</p>
              </div>
            </div>
          </div>

          <ActivityList
            customStyle={{ color: "blocoredcolor" }}
            content="YOUTUBE SHORTS"
          />

          <div className="flex justify-center relative my-11 gap-5 w-full">
            <Image
              className="rounded-xl w-[46%]"
              src="/images/YTSHORT1.png"
              alt="ytshort1"
              width={210}
              height={355}
            />
            <Image
              className="rounded-xl w-[46%]"
              src="/images/YTSHORT2.png"
              alt="ytshort1"
              width={210}
              height={355}
            />
            <div className="w-12 h-12 rounded-full cursor-pointer flex justify-center items-center bg-black absolute right-[-22px] top-1/2 translate-y-[-50%]">
              <HiArrowRight className="text-2xl" />
            </div>
          </div>

          <ActivityList
            customStyle={{ color: "whitecolor" }}
            content="LATEST EVENT"
          />

          <div className="w-full mt-10 relative mb-[77px] rounded-md">
            <Image
              className="w-full rounded-md h-fit"
              src="/images/EventCard.png"
              alt="eventCard"
              width={458}
              height={458}
              layout="responsive"
            />
            <p className="absolute apercu-bold sm:top-5 sm:left-7 top-4 left-6 sm:text-[13px] text-[11px] text-black bg-white font-bold p-2 rounded-md">
              FRI 29TH MAR
            </p>
            <div className="transparent-white flex flex-col text-black w-[92%] sm:gap-y-7 gap-y-4 sm:px-4 px-3 sm:py-3 py-2 left-1/2 translate-x-[-50%] rounded-md absolute bottom-5">
              <p className="tracking-[0.6px] sm:text-xl text-base font-semibold">
                30 Years Of Day Day + Donae&apos;O Live! Friday 29th March…
              </p>
              <div className="flex justify-between">
                <p className="uppercase apercu-bold tracking-[1.15px] sm:text-base text-[11px]">XOYO Birmingham</p>{" "}
                <span className="font-normal apercu-regular sm:text-base text-[11px]">FROM £25.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex flex-col items-center">
        <div className="footer-card flex items-center sm:gap-x-5 gap-x-3 px-3 sm:py-4 py-3">
          <div className="bg-black sm:w-[50px] w-[45px] sm:h-[50px] h-[45px]  opacity-100  flex items-center justify-center  rounded-full">
            <Image className="sm:block hidden"  src="/images/Shape.PNG" alt="blogo" width={20} height={15} />
            <Image className="sm:hidden block" src="/images/Shape.PNG" alt="blogo" width={18} height={12} />
          </div>
          <h4 className="font-bold apercu-bold text-[#fff] sm:text-base text-sm sm:tracking-widest tracking-wider uppercase text-white opacity-100 sm:pr-4 pr-3">
            Create a BLOCO.me
          </h4>
        </div>
        <div className="flex gap-x-2 items-center my-12">
          <p className="font-normal footer-p">POWERED BY</p>
          <Image src="/images/bloco.PNG" alt="bloco" width={65} height={20} />
        </div>
      </footer>
    </main>
  );
}