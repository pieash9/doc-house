import img from "../../../assets/home/banner.png";
import teethImg from "../../../assets/home/teeth.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const OurService = () => {
  return (
    <section className="flex ">
      <div className="md:w-1/2">
        <img src={img} alt="" />
      </div>
      <div className="md:w-1/2">
        <div className="mb-7">
          {" "}
          <h3 className="text-3xl font-semibold">Our Services</h3>
          <p className="md:w-3/4  text-justify mt-5">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        {/* React Tab */}
        <div>
          <Tabs>
            <TabList className="tabs tabs-boxed bg-[#F7A582] w-fit">
              <Tab className="tab tab-lg text-black ">Cavity Protection</Tab>
              <Tab className="tab tab-lg text-black ">Cosmetic Dentisty</Tab>
              <Tab className="tab tab-lg text-black">Oral Surgery</Tab>
            </TabList>

            <TabPanel>
              <div className="card w-full bg-base-100 shadow-xl mt-10 p-4">
                <figure>
                  <img className="w-full" src={teethImg} alt="teeth" />
                </figure>
                <div className="my-8">
                  <h2 className="text-3xl font-medium">
                    Electro Gastrology Therapy
                  </h2>
                  <p className="text-justify mt-4">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inve ntore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Sed ut
                    perspiciatis unde omnis iste natus error{" "}
                  </p>
                  <p className="text-justify mt-2">
                    Sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inve ntore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <div className="mt-5">
                    <button className="btn btn-error btn-outline">
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="card w-full bg-base-100 shadow-xl mt-10 p-4">
                <figure>
                  <img className="w-full" src={teethImg} alt="teeth" />
                </figure>
                <div className="my-8">
                  <h2 className="text-3xl font-medium">
                    Electro Gastrology Therapy
                  </h2>
                  <p className="text-justify mt-4">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inve ntore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Sed ut
                    perspiciatis unde omnis iste natus error{" "}
                  </p>
                  <p className="text-justify mt-2">
                    Sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inve ntore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <div className="mt-5">
                    <button className="btn btn-error btn-outline">
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="card w-full bg-base-100 shadow-xl mt-10 p-4">
                <figure>
                  <img className="w-full" src={teethImg} alt="teeth" />
                </figure>
                <div className="my-8">
                  <h2 className="text-3xl font-medium">
                    Electro Gastrology Therapy
                  </h2>
                  <p className="text-justify mt-4">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inve ntore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Sed ut
                    perspiciatis unde omnis iste natus error{" "}
                  </p>
                  <p className="text-justify mt-2">
                    Sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inve ntore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <div className="mt-5">
                    <button className="btn btn-error btn-outline">
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default OurService;
