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

export default function Home() {
  interface MediaIcon {
    id: number;
    icon: ReactElement; // This should be the type for React elements
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
      <div className="bg-[#1D1D1D] flex justify-center lg:w-1/2 md:w-3/4 w-full my-[78px] rounded-3xl">
        <div className="flex items-center w-[68%] flex-col ">
          <div className="mt-[63px] ">
            <Image
              src="/images/DayDay-Logo2.png"
              width={200}
              height={100}
              alt="daydaylogo"
            />
          </div>

          <div className="bg-white w-full mt-10 mb-[42px] relative rounded-3xl">
            <Image
              className="w-full rounded-3xl h-fit"
              src="/images/profileImage.png"
              alt="artist dayday"
              width={458}
              height={458}
              layout="responsive"
            />
          </div>

          <ul className="flex gap-2 mb-7">
            {mediaIcons.map(({ id, icon }) => (
              <li
                key={id}
                className="rounded-full bg-[#3E3E3E] text-2xl w-9 h-9 flex justify-center items-center"
              >
                {icon}
              </li>
            ))}
          </ul>

          <ActivityList
            customStyle={{color:"darkorangecolor"}}
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
            customStyle={{color:"lightorangecolor"}}
            content="NEW MIX LIVE - TAKE A LISTEN"
          />
          <div className="media-mxtape mb-9 flex gap-4 mt-[41px] px-5 py-4">
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
                <h3 className="feature-title w-fit px-2 py-1 text-sm">
                  Dj Day Day
                </h3>
                <PiSoundcloudLogoFill className="text-3xl" />
              </div>

              <h2 className="music-title">
                @DJDAYDAY_ / The Vibe Mixtape Vol 6 (R&B, Hip Hop, Bashment,
                Afro Beats + UK Rap)
              </h2>
              <p className="text-[#FFC6B2] text-sm">19 hours ago</p>
            </div>
          </div>

          <ActivityList customStyle={{color:"blocoredcolor"}} content="YOUTUBE SHORTS" />

          <div className="flex justify-center relative my-11 gap-5 w-full">
            <Image
              className="rounded-xl w-[46%]"
              src="/images/YTSHORT1.png"
              alt="ytshort1"
              width={210}
              height={355}
              // layout="responsive"
            />
            <Image
              className="rounded-xl w-[46%]"
              src="/images/YTSHORT2.png"
              alt="ytshort1"
              width={210}
              height={355}
              // layout="responsive"
            />
            <div className="w-12 h-12 rounded-full cursor-pointer flex justify-center items-center bg-black absolute right-[-22px] top-1/2 translate-y-[-50%]">
              <HiArrowRight className="text-2xl" />
            </div>
          </div>

          <ActivityList customStyle={{color:'whitecolor',}} content="LATEST EVENT" />

          <div className="w-full mt-10 relative mb-[77px] rounded-md">
            <Image
              className="w-full rounded-md h-fit"
              src="/images/EventCard.png"
              alt="eventCard"
              width={458}
              height={458}
              layout="responsive"
            />
            <p className="absolute top-5 left-7 text-[13px] text-black bg-white font-bold p-2 rounded-md">
              FRI 29TH MAR
            </p>
            <div className="transparent-white flex flex-col text-black w-[92%] gap-y-7 px-4 py-3 left-1/2 translate-x-[-50%] rounded-md absolute bottom-5">
              <p className="tracking-[0.6px] text-xl font-semibold">
                30 Years Of Day Day + Donae'O Live! Friday 29th March…
              </p>
              <div className="flex justify-between">
                <p className="uppercase tracking-[1.15px]">XOYO Birmingham</p>{" "}
                <span className="font-normal">FROM £25.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex flex-col items-center">
        <div className="footer-card flex items-center gap-x-5 px-3 py-4">
          <div className="bg-black w-[50px] opacity-100 h-[50px] flex items-center justify-center  rounded-full">
            <Image src="/images/Shape.PNG" alt="blogo" width={20} height={15} />
          </div>
          <h4 className="font-bold text-[#fff] tracking-widest uppercase text-white opacity-100 pr-4">
            Create a BLOCO.me
          </h4>
        </div>
        <div className="flex gap-x-2 items-center my-12">
          <p className="font-normal footer-p">POWERED BY</p>
          <Image src="/images/bloco.PNG" alt="bloco" width={80} height={30} />
        </div>
      </footer>
    </main>
  );
}

interface ActivityListProps {
  customStyle: React.CSSProperties;
  content: string;
}

const ActivityList = ({ customStyle, content }: ActivityListProps) => {
  return (
    <div className="bg-list w-full flex text-center justify-center relative">
      <div
        className={`${customStyle.color} w-[11px] top-1/2 translate-y-[-50%] left-3.5 rounded-full h-[11px] absolute`}
      ></div>
      <p className="p-2">{content}</p>
    </div>
  );
};

interface MediacardProps {
  imageName: string;
  content: string;
}

const Mediacard = ({ imageName, content }: MediacardProps) => {
  return (
    <div className="media-list relative w-full text-center relative flex justify-center">
      <Image
        className="absolute left-2 top-1/2 translate-y-[-50%] rounded-full"
        src={`/images/${imageName}`}
        alt="blogo"
        width={55}
        height={55}
      />
      <p className="py-6">{content}</p>
    </div>
  );
};
