import { features } from "../constants";

// React functional component
const FeatureSection = () => {
  return (
    // main container for the feature section
    // relative allows child elements to be positioned relative to this container
    // mt-20 adds space above the section
    // border-b adds a bottom border to separate sections
    // min-h-200 ensures the section has a minimum height
    <div className="relative mt-20 border-b border-neutral-800 min-h-200">
      
      {/* Section header container */}
      <div className="text-center">
        
        {/* small badge label at the top */}
        {/* rounded-full makes it pill shaped */}
        {/* uppercase forces the text to be capitalized */}
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          feature
        </span>

        {/* main heading */}
        {/* responsive text sizing */}
        {/* text-3xl default */}
        {/* sm:text-5xl on small screens */}
        {/* lg:text-6xl on large screens */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          
          {/* regular text */}
          Easily build and deploy your{" "}

          {/* gradient text effect */}
          {/* bg-linear-to-r creates gradient */}
          {/* bg-clip-text clips the gradient into the text */}
          {/* text-transparent allows gradient to show */}
          <span className="bg-linear-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            VR apps
          </span>
        </h2>
      </div>

      {/* container for the feature cards */}
      {/* flex-wrap allows items to move to the next row when screen shrinks */}
      <div className="flex flex-wrap mt-10 lg:mt-20">
        
        {/* looping through the features array */}
        {/* .map() dynamically renders a feature card for each feature */}
        {features.map((feature, index) => (
          
          // key helps React efficiently update the DOM
          // width is responsive:
          // full width on mobile
          // half width on small screens
          // one third width on large screens
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            
            {/* container for icon + text */}
            <div className="flex">

              {/* icon container */}
              {/* centered circle background for the icon */}
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                
                {/* icon from the features object */}
                {feature.icon}

              </div>

              {/* text container */}
              <div>

                {/* feature title */}
                <h5 className="mt-1 mb-6 text-xl">
                  {feature.text}
                </h5>

                {/* feature description */}
                <p className="text-neutral-500 text-md p-2 mb-20">
                  {feature.description}
                </p>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// exporting the component so it can be used in other files
export { FeatureSection };