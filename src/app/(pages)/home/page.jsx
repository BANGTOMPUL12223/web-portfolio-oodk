import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

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
      <div className="flex justify-around items-center py-4 fixed w-screen">
        <h1 className="font-semibold text-xl">
          <Link href={"/"}>OODK</Link>
        </h1>

        <ul className="flex gap-6 items-center">
          {linkItems.map((doc) => (
            <li key={doc.name} className="hover:text-sky-500 transition">
              <Link href={doc.href}>{doc.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-screen w-screen flex items-center justify-around">
        <div className="max-w-2xl flex flex-col gap-1">
          <h1 className="font-semibold text-5xl">Hai Saya OODK</h1>
          <h3 className="text-sky-500 font-semibold text-2xl">
            Frontend Developer
          </h3>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
            debitis. Modi ipsa quidem fuga ipsam tempora dignissimos suscipit
            cum ratione aperiam quam, eum est quasi! Maxime, porro!
          </p>
          <div className="flex gap-4 items-center">
            <Link
              href={"/"}
              className="bg-sky-500 px-8 py-2 rounded-lg text-slate-800 font-bold hover:bg-transparent transition hover:text-sky-500 border-2 border-sky-500"
            >
              Hire Me
            </Link>
            <Link
              href={"#contact"}
              className="bg-transparent px-8 py-2 rounded-lg text-sky-500 font-bold hover:bg-sky-500 transition hover:text-slate-800 border-2 border-sky-500"
            >
              Let&apos;s Talk
            </Link>
          </div>
          <div className="flex items-center gap-3 mt-24">
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

        <div className="overflow-hidden rounded-b-full rounded-s-full">
          <Image
            src={"/profile.jpeg"}
            alt="profile"
            width={200}
            height={200}
            className="w-80"
          />
        </div>
      </div>

      <div></div>
    </>
  );
}
