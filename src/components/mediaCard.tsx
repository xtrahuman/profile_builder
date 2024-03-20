import Image from "next/image";

interface MediacardProps {
    imageName: string;
    content: string;
  }
  
  const Mediacard = ({ imageName, content }: MediacardProps) => {
    return (
      <div className="media-list relative w-full text-center relative flex justify-center">
        <div className="sm:w-[55px] sm:h-[55px] w-[40px] h-[40px] left-2 top-1/2 rounded-full translate-y-[-50%] absolute bg-black">
          <Image
            className="sm:block hidden left-0 top-1/2 rounded-full translate-y-[-50%] absolute"
            src={`/images/${imageName}`}
            alt="blogo"
            width={55}
            height={55}
          />
          <Image
            className="sm:hidden block left-0 top-1/2 rounded-full translate-y-[-50%] absolute" 
            src={`/images/${imageName}`}
            alt="blogo"
            width={40}
            height={40}
          />
        </div>
        <p className="sm:py-6 py-5 md:text-base sm:text-sm text-xs sm:ml-0 ml-5">
          {content}
        </p>
      </div>
    );
  };

  export default Mediacard