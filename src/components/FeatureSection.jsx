import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-200">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6x mt-10 lg:mt-20 tracking-wide">
          Easily build and deploy your{" "}
          <span className="bg-linear-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            VR apps
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
    {features.map((feature, index) => (
        <div key={index} className="w-full sm:1/2 lg:w-1/3">
            <div className="flex">
                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                    {feature.icon}
                </div>
            </div>
        </div>
    ))};
      </div>
    </div>
  );
};

export { FeatureSection };
