import Image from "next/image";

export default function Home() {
  return (
    <main className="all-texts flex flex-col items-center justify-center">
      <div className="bg-[#1D1D1D] flex justify-center w-1/2 my-[78px] rounded-3xl">
        <div className="flex items-center w-3/4 flex-col ">
          <div className="mt-[63px]">
            <Image
              src="/images/DayDay-Logo2.PNG"
              width={200}
              height={100}
              alt="daydaylogo"
            />
          </div>

          <div className="bg-white h-[478px] w-full mt-10 mb-[42px]  relative rounded-3xl">
          <Image
              className="absolute rounded-3xl top-0 bottom-0 left-0 right-0"
              src="/images/artist-dayday.PNG"
              alt="artist dayday"
              width={478}
              height={478}
              layout="responsive"
            />
          </div>

          <ActivityList color ='darkorangecolor' content='Award winning DJ & Radio Presenter' />

          <div className="media-list mt-[34px] relative w-full relative flex justify-center">
            <Image
              className="absolute left-4 top-1/2 translate-y-[-50%] rounded-full"
              src="/images/usherphoto.PNG"
              alt="blogo"
              width={60}
              height={60}
            />
            <p className="p-7">BBC 1xtra media list</p>
          </div>

          <ActivityList color ='lightorangecolor' content='NEW MIX LIVE - TAKE A LISTEN' />
          <div className="media-mxtape flex gap-4 mt-[41px] px-5 py-4">
            <div className="">
              <Image
                src="/images/pic-mixtape.PNG"
                alt="blogo"
                width={150}
                height={150}
              />
            </div>
            <div className="flex flex-col w-[70%] gap-y-3">
              <h3 className="feature-title w-fit px-2 py-1 text-sm">
                Dj Day Day
              </h3>
              <h2 className="music-title">
                @DJDAYDAY_ / The Vibe Mixtape Vol 6 (R&B, Hip Hop, Bashment,
                Afro Beats + UK Rap)
              </h2>
              <p className="text-[#FFC6B2] text-sm">19 hours ago</p>
            </div>
          </div>

          <ActivityList color ='blocoredcolor' content='YOUTUBE SHORTS' />
        </div>
      </div>

      <footer className="flex flex-col items-center">
        <div className="footer-card flex items-center gap-x-4 px-3 py-4">
          <div className="bg-black w-[50px] opacity-100 h-[50px] flex items-center justify-center  rounded-full">
            <Image src="/images/blogo.PNG" alt="blogo" width={30} height={30} />
          </div>
          <h4 className="font-bold text-[#fff] uppercase text-white opacity-100 pr-4">
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
  color: string;
  content: string;
}

const ActivityList = ({ color, content }: ActivityListProps) => {
  return (
    <div className="bg-list mt-11 w-full flex justify-center relative">
      <div className={`${color} w-[11px] top-1/2 translate-y-[-50%] left-3 rounded-full h-[11px] absolute`}></div>
      <p className="p-3.5">{content}</p>
    </div>
  );
};
