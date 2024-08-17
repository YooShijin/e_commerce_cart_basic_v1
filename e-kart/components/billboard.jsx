const Billboard = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-auto md:aspect-[2.4,1] overflow-hidden bg-cover md:h-96 h-[600px]"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/ddvrbjegh/image/upload/v1723920755/E-kart/plfjacngaujdefwykoga.jpg")`,
        }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {"Explore the special collection"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
