import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="py-14 bg-stone-100">
      <div className="container w-full m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20 ">
        <div className="w-full justify-center text-center gap-6 md:text-center lg:flex flex-col xl:flex-row lg:items-center lg:gap-16">
          <div className="order-last mb-6 space-y-6 md:mb-0 w-5/6 flex justify-center flex-col mx-auto py-20">
            <h1 className="text-4xl font-bold md:text-5xl">
              About<span className="text-blue-500"> Me</span>
            </h1>
            <p className="text-lg">
              I am a Grade 11 student majoring in Software Engineering (RPL)
              with an interest in programming and software development. I have
              proficiency in various programming languages ​​such as PHP,
              JavaScript, Kotlin, Java, TypeScript and Python, as well as
              experience with frameworks such as Laravel and CodeIgniter. I also
              have basic knowledge in Machine Learning. I sometimes create blogs
              and ecommerce websites using Laravel, and use JavaScript and
              libraries like Hapi and Nanoid to build APIs. Even though it has
              flaws in frameworks like Next.js, React, and Express. I am
              committed to learning and improving my skills within the
              framework. I am also interested in learning the programming
              languages ​​and frameworks used by well-known startups such as
              Tokopedia, Blibli and Google.
            </p>
            <div className="flex flex-row-reverse flex-wrap md:gap-1 justify-center">
              <button
                type="button"
                title="more about"
                className="order-first py-3 px-6 text-center rounded-xl sm:w-max"
              >
                <span className="block text-blue-500 text-5xl font-semibold">
                  <Link href={"http://t.me/syahSyr"}>
                    <i className="fa-brands fa-telegram"></i>
                  </Link>
                </span>
              </button>
              <button
                type="button"
                title="more about"
                className="order-first py-3 px-6 text-center rounded-xl sm:w-max"
              >
                <span className="block text-black text-5xl font-semibold">
                  <Link href={"https://github.com/rafli21xrplc"}>
                    <i className="fa-brands fa-github"></i>
                  </Link>
                </span>
              </button>
              <button
                type="button"
                title="more about"
                className="order-first py-3 px-6 text-center rounded-xl sm:w-max"
              >
                <span className="block text-red-600 text-5xl font-semibold">
                  <Link
                    href={
                      "https://www.instagram.com/msrafliansyah/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
                    }
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </span>
              </button>
              <button
                type="button"
                title="more about"
                className="order-first py-3 px-6 text-center rounded-xl sm:w-max"
              >
                <span className="block text-blue-600 text-5xl font-semibold">
                  <Link
                    href={
                      "https://www.linkedin.com/in/mochamad-surya-rafliansyah-0505b6243/"
                    }
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                </span>
              </button>
            </div>
          </div>
          <div className="gap-4 lg:w-full w-5/6 mx-auto">
            <div className="col-span-3 row-span-3">
              <Image
                className="w-full h-full object-cover object-top rounded-xl"
                src={"/images/pothme.jpeg"}
                alt="Image"
                width={2000}
                height={1800}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
