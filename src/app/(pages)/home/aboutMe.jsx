import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
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
  );
}
