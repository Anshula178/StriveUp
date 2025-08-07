import Image from "next/image";

const index = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:py-4 lg:px-8 mt-20 mb-32">
      <h2 className="text-3xl sm:text-6xl font-bold text-center leading-tight mb-6">
        Our team is committed to delivering <br /> nothing but excellence.
      </h2>

      <h3 className="text-lg sm:text-2xl font-medium text-center text-gray-500 leading-relaxed mb-12">
        We bring creativity, strategy, and innovation together <br />
        to build solutions that truly make an impact.
      </h3>

      <div className="grid grid-cols-1 place-items-center">
        <Image
          src="/images/team/ourteam.png"
          alt="office-image"
          height={184}
          width={1196}
          className="rounded-3xl w-full max-w-4xl"
        />
      </div>
    </div>
  );
};

export default index;
