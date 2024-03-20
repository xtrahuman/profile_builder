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
        <p className="p-2 md:text-base sm:text-sm text-xs sm:ml-0 ml-5">
          {content}
        </p>
      </div>
    );
  };

  export default ActivityList