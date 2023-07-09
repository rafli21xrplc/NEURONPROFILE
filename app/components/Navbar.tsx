import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="lg:w-10/12 md:w-full mx-auto my-5 px-2 py-4">
      <ul className="mx-5 flex justify-between">
        <li className="">
          <span className="text-2xl">NEURONPROFILE</span>
        </li>
        <li className="text-xl flex justify-center gap-20 text-slate-50">
          <Link
            className="inline-block rounded px-6 pb-2 pt-2.5 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-slate-900 hover:text-slate-100 text-white focus:outline-none focus:ring-0 active:text-slate-100"
            href={
              "https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=raflisurya824@gmail.com"
            }
          >
            MailTo
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
