import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const linkItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const sosmedList = [
  { href: "https://www.facebook.com/", icon: <FaFacebookF size={"1.2em"} /> },
  { href: "http://twitter.com/", icon: <FaTwitter size={"1.2em"} /> },
  { href: "https://id.linkedin.com/", icon: <FaLinkedinIn size={"1.2em"} /> },
];

export default function Home() {
  return (
    <>
      <div className="navbar bg-slate-800 fixed">
        <div className="navbar-start">
          <Link href={"/"} className="btn btn-ghost text-xl">
            OODK
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {linkItems.map((doc) => (
              <li key={doc.name}>
                <Link href={doc.href}>{doc.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IoMenu size={"2em"} />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {linkItems.map((doc) => (
                <li key={doc.name}>
                  <Link href={doc.href}>{doc.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="h-screen flex flex-col lg:flex-row items-center justify-around pt-20 p-4">
        <div className="max-w-2xl flex flex-col gap-1 order-2 lg:order-1 text-center lg:text-start">
          <h1 className="font-semibold text-4xl">Hai Saya OODK</h1>
          <h3 className="text-sky-500 font-semibold text-2xl">
            Frontend Developer
          </h3>
          <p className="my-5">
            saya adalah ahli programmer,menjadi Backend Developer terhandal
          </p>
          <div className="flex gap-4 items-center m-auto lg:m-0">
            <Link href={"/"} className="btn btn-info">
              Hire Me
            </Link>
            <Link href={"#contact"} className="btn btn-info btn-outline">
              Let&apos;s Talk
            </Link>
          </div>
          <div className="flex items-center gap-3 lg:mt-24 mt-10 m-auto lg:m-0">
            {sosmedList.map((doc) => (
              <Link
                target="blank"
                className="border-2 p-2 rounded-full text-sky-500 border-sky-500 transition"
                key={doc.href}
                href={doc.href}
              >
                {doc.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="overflow-hidden lg:rounded-b-full lg:rounded-s-full lg:rounded-none rounded-full order-1 lg:order-2">
          <Image
            src={"/profile.jpeg"}
            alt="profile"
            width={200}
            height={200}
            className="lg:w-80 w-52"
          />
        </div>
      </div>

      <div className="bg-slate-700 px-4 py-10 gap-6 flex flex-col justify-center items-center text-center">
        <h1 className="font-semibold text-4xl pb-8">
          About <span className="text-sky-500">Me</span>
        </h1>
        <Image
          src={"/profile.jpeg"}
          alt="profile"
          width={200}
          height={200}
          className="w-52 rounded-full outline-sky-700 outline"
        />
        <h1 className="font-semibold text-2xl">Frontend Developer!</h1>
        <p>saya adalah ahli programmer,menjadi Backend Developer terhandal</p>
        <Link href={"/"} className="btn btn-info text-slate-800">
          Read More
        </Link>
      </div>

      <div></div>
    </>
  );
}
