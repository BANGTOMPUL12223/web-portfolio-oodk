import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const sosmedList = [
  { href: "https://www.facebook.com/", icon: <FaFacebookF size={"1.2em"} /> },
  { href: "http://twitter.com/", icon: <FaTwitter size={"1.2em"} /> },
  { href: "https://id.linkedin.com/", icon: <FaLinkedinIn size={"1.2em"} /> },
];

export default function Main() {
  return (
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
          <Link href={"#contact"} className="btn btn-info">
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
  );
}
