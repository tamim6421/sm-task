import "./Banner.css";
const Banner = () => {
  return (
    <div className="containerB max-w-[1500px]">
      <div className="overlyB ">
        <div>
          <div className="">
            <div className="">
              <div className="p-10">
                <h1
                  className="text-3xl mb-5 lg:text-4xl text-[#e65252a5] font-bold font-rope pl-5 "
                  data-aos="fade-down"
                >
                  <span className="text-white" data-aos="fade-down">
                    Welcomne To{" "}
                  </span>{" "}
                  <span className="text-blue-500" data-aos="fade-left">
                    AirBook
                  </span>
                </h1>

                <div className="w-full h-[300px] bg-white rounded-lg p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4 items-center">
                      <button className="btn">
                        <input
                          type="radio"
                          name="radio-7"
                          className="radio radio-info"
                          checked
                        />
                        One Way
                      </button>
                      <button className="btn text-blue-500">
                        <input
                          type="radio"
                          name="radio-7"
                          className="radio radio-info"
                          checked
                        />
                        Round Trip
                        <img
                          className="w-[20px]"
                          src="https://i.ibb.co/258K26Y/icons8-down-arrow-50.png"
                        ></img>
                      </button>
                    </div>

                    <div className="flex gap-4 items-center">
                      <button className="btn">1 Traveller</button>
                      <button className="btn text-blue-500">
                        Economy
                        <img
                          className="w-[20px]"
                          src="https://i.ibb.co/258K26Y/icons8-down-arrow-50.png"
                        ></img>
                      </button>
                    </div>
                  </div>

                  <div className="mt-5 flex gap-4">
                    <div className="border  flex items-center gap-2 p-4">
                      <p className=" pr-3 font-bold border-r-2">DAC</p>
                        <div>
                            <h1 className="font-bold">Dhaka</h1>
                            <p>Hazrat Shahjalal InterNationl Airport </p>
                        </div>
                    </div>
                    <div className="border  flex items-center gap-2 p-4">
                      <p className="pr-3 font-bold border-r-2">DAC</p>
                        <div>
                            <h1 className="">Dhaka</h1>
                            <p>Hazrat Shahjalal InterNationl Airport </p>
                        </div>
                    </div>
                    <div className="border  flex items-center gap-2 p-4">
                      <p className=" pr-3 font-bold border-r-2">DAC</p>
                        <div>
                            <h1>Dhaka</h1>
                            <p>Hazrat Shahjalal InterNationl Airport </p>
                        </div>
                    </div>

                    <div className="border  flex items-center gap-2 p-4">
                      <p className=" pr-3 font-bold border-r-2">DAC</p>
                        <div>
                            <h1>Dhaka</h1>
                            <p>Hazrat Shahjalal InterNationl Airport </p>
                        </div>
                    </div>
                    <div className=" p-4">
                    <button className="btn p-10 bg-yellow-400">
                        
                    <img
                          className="w-[20px]"
                          src="https://i.ibb.co/4SdnCNV/icons8-find-64.png"
                        ></img>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
