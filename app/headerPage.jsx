import Image from "next/image";
import Animate from "./components/Animate";

const HeaderPage = () => {
  return (
    <main>
      <div className="relative overflow-hidden">
        <div className="pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24">
          <div className="mx-auto max-w-5xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  <h1 className=" mt-4 text-4xl font-bold tracking-tight sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <div className="lg:justify-normal justify-center flex font-semibold text-2xl gap-2">
                      <span>Hello Everyone </span>
                      <Image
                        src={
                          "https://camo.githubusercontent.com/e8e7b06ecf583bc040eb60e44eb5b8e0ecc5421320a92929ce21522dbc34c891/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966"
                        }
                        alt="Hai"
                        width={30}
                        height={30}
                      />
                      <span> , I am..</span>
                    </div>
                    <span className="block text-pink-500">Mochamad </span>
                    <span className="block text-slate-50">
                      Surya Rafliansyah
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-slate-50 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Junior programmer | Junior BackEnd Engineer
                  </p>
                </div>
              </div>
              <div className="lg:block flex justify-center content-center">
                <Image
                  className="block"
                  alt=""
                  src={"/images/profile-circle.png"}
                  width={700}
                  height={700}
                />
              </div>
              <Animate />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeaderPage;
