import Image from "next/image";
import Link from "next/link";

const ProjectPage = () => {
  return (
    <section className="text-gray-600 body-font bg-stone-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-gray-100 px-4 py-4 my-10 mx-auto lg:w-3/4 text-center">
          <h3 className="text-gray-600 text-4xl pr-6 sm:leading-snug tracking-tight font-bold ">
            Project
          </h3>
          <p className="mt-4 text-stone-400 text-xl font-medium">
            some of the projects that I made to be material for the
            implementation of learning.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 gap-5 flex-row items-center justify-center">
          <div className="p-4 md:w-2/5">
            <div className="shadow-xl h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-slate-50 to-slate-100 overflow-hidden">
              <Image
                width={800}
                height={200}
                alt=""
                src={"/images/Neutural.jpeg"}
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Ecommerce Website
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                  Neutural
                </h1>
                <p className="leading-relaxed mb-3">
                  Neutural can provide a better experience for visitors, whether
                  its reading a blog or shopping at an online store.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-2/5">
            <div className="shadow-xl h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-slate-50 to-slate-100 overflow-hidden">
              <Image
                width={600}
                height={100}
                alt=""
                src={"/images/NeuronBrains.png"}
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Blog Website
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
                  <Link
                    href={"https://rafli21xrplc.github.io/NEURONBRAIN/"}
                    target="_blank"
                  >
                    NeuronBrain
                  </Link>
                </h1>
                <p className="leading-relaxed mb-3">
                  NEURONBRAIN is a blog website dedicated to discussing the
                  history of industrial technology and featuring writings
                  written by the authors themselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
