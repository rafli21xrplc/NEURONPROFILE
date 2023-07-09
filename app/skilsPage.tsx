import Image from "next/image";

const SkilsPage = () => {
  return (
    <section className="py-20 my-20 overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 mx-auto  items-center max-w-6xl">
        <div className="px-4 md:mr-6">
          <h3 className="text-4xl pr-6 sm:leading-snug tracking-tight font-bold ">
            Frameworks
          </h3>
          <p className="mt-4 text-stone-400 text-xl font-medium">
            Frameworks that I{"'"}ve studied and used to create simple projects.
          </p>
        </div>
        <div className="sm:flex sm:flex-col flex-wrap">
          <div className="bg-blue-500 transform -translate-x-10 relative h-64 blur-lg hidden xl:block"></div>
          <div className="transform rounded-md bg-white xl:rotate-3 xl:scale-110 xl:translate-x-10 md:shadow-2xl -m-4 xl:-mt-44 mx-5 p-12 space-y-2">
            <div className="px-4 sm:px-0 grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-8 mx-auto sm:flex sm:flex-col">
              <Image
                className="mx-auto"
                src={"/images/laravel.png"}
                alt="Image Logo"
                width={100}
                height={100}
              />
              <Image
                className="mx-auto"
                src={"/images/nextjs.png"}
                alt="Image Logo"
                width={200}
                height={200}
              />
              <Image
                className="mx-auto"
                src={"/images/codeigniter.png"}
                alt="Image Logo"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkilsPage;
