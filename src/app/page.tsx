export default function Home() {
  return (
    <main className="all-texts flex justify-center">
      <div className="bg-[#1D1D1D] flex justify-center w-1/2 my-[78px] rounded-3xl">
        <div className="flex items-center w-3/4 flex-col ">
          <h1 className="mt-[63px]">home page</h1>

          <div className="bg-white h-[478px] w-full my-[42px] rounded-3xl"></div>

          <div className="bg-list w-full flex justify-center">
            <p className="p-3.5">Award winning DJ and radio presenter</p>
          </div>
          <div className="media-list mt-[34px] w-full relative flex justify-center">
            <p className="p-7">BBC 1xtra media list</p>
          </div>

          <div className="bg-list mt-11 w-full flex justify-center relative">
            <div className="oval-ball-orangecolor w-[11px] top-1/2 translate-y-[-50%] left-3 rounded-full h-[11px] absolute"></div>
            <p className="p-3.5">Award winning DJ and radio presenter</p>
          </div>

          <div className="media-mxtape mt-[41px] px-5 py-4">
            <div></div>
            <div className="flex flex-col w-[70%] gap-y-3">
              <h3 className="artist-title w-fit px-2 py-1 text-sm">Dj Day Day</h3>
              <h2 className="music-title">@DJDAYDAY_ / The Vibe Mixtape Vol 6 (R&B, Hip Hop, Bashment, Afro Beats + UK Rap)</h2>
              <p className="text-[#FFC6B2] text-sm">19 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
