import Image from "next/image";

const Dedicated = () => {
  return (
    <div className="relative" id="aboutus-section">
      <Image
        src="/images/dedicated/spiral.svg"
        height={272}
        width={686}
        alt="spiral-design"
        className="absolute left-[2px] top-[7px]  hidden lg:block -z-10"
      />

      <div className="mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 my-16">
          {/* COLUMN-1 */}
          <div>
            <Image
              src="/images/dedicated/man.png"
              alt="man-icon"
              width={416}
              height={530}
              className="mx-auto md:mx-0 bg-transparent rounded-[126px]"
            />
          </div>

          {/* COLUMN-2 */}
          <div className="relative">
            <Image
              src="images/dedicated/comma.svg"
              alt="comma-image"
              width={200}
              height={106}
              className="absolute  hidden lg:block top-[-96px] left-[480px]"
            />
            <h2 className="text-4xl lg:text-6xl leading-3 pt-4 font-bold sm:leading-tight mt-5 mb-4 text-center lg:text-start">
              Design with intent. Build with precision.
            </h2>
            <p className="font-medium text-lightblack text-xl mt-5 mb-4 text-center lg:text-start">
              We craft user-centered digital products—combining UI/UX design,
              web & app development, and CMS solutions to help brands grow.
            </p>
            <p className="text-xl font-semibold italic mt-12 mb-4 lg:ml-32 preline text-center lg:text-start">
              {" "}
              Empathy in design. Precision in code.
            </p>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { k: "50+", v: "Projects" },
                { k: "10+", v: "Experience" },
                { k: "92%", v: "Retention" },
                { k: "5", v: "Continents" },
              ].map((stat) => (
                <div key={stat.k}>
                  <div className="text-4xl mb-3 font-bold text-gray-900">
                    {stat.k}
                  </div>
                  <div className="text-md text-gray-500">{stat.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dedicated;
