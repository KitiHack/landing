import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[20/24] max-w-[650px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <iframe src="https://astrus.tijan.dev/widget/#/v1/subscribe?subscription=eyJhcHBBZGRyZXNzIjoiMHg3MDM2NmYxQTVmMUMwNzYxMzZCYkRhNjI2MDM1OTdENDNBY2JCYjkzIiwiY2hhaW4iOiIweGZhIiwicGxhbklkIjoyfQ%3D%3D" style={{ borderRadius: "20px", width: "100%", height: "100%" }}>

              </iframe>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Easy to Integrate
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Astrus can be integrated with easy into any application - just copy the subscription widget link from the admin dashboard.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Astrus Widget
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We have developed 2 Astrus widgets: Subscribe Widget and Cancel Subscription Widget - both accessible from admin dashboard. Try Astrus`&apos;` Subscription Widget on the left.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Webhooks
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Astrus can also be integrated into any backend with Astrus Webhooks - you can easily setup webhooks and get data to your backend in realtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
