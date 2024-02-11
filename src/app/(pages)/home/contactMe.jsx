"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactMe() {
  const [buttonSubmit, setButtonSubmit] = useState();
  const { register, handleSubmit } = useForm();

  async function onSubmit(e) {
    try {
      setButtonSubmit(true);
      alert(`terimakasih\npesan anda berhasil terkirim...`);
      console.log(e);
      setButtonSubmit(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
      setButtonSubmit(false);
      alert(`server error`);
      window.location.reload();
    }
  }

  return (
    <div className="px-4 py-10" id="contact">
      <h1 className="font-semibold text-4xl pb-10 text-center">
        Contact <span className="text-sky-500">Me!</span>
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 max-w-xl m-auto"
      >
        <div className="flex items-center justify-center gap-2">
          <input
            className="input input-bordered input-info w-full"
            placeholder="Full Name"
            type="text"
            required
            {...register("name", { required: true })}
          />
          <input
            className="input input-bordered input-info w-full"
            placeholder="Email Address"
            type="email"
            required
            {...register("email", { required: true })}
          />
        </div>

        <div className="flex items-center justify-center gap-2">
          <input
            className="input input-bordered input-info w-full"
            placeholder="Mobile Number"
            type="number"
            required
            {...register("mobileNumber", { required: true })}
          />
          <input
            className="input input-bordered input-info w-full"
            placeholder="Email Subject"
            type="text"
            required
            {...register("emailSubject", { required: true })}
          />
        </div>

        <textarea
          className="textarea textarea-info"
          placeholder="Bio"
          required
          {...register("message", { required: true })}
        ></textarea>

        <button className={`btn btn-info ${buttonSubmit && "btn-disabled"}`}>
          Submit
        </button>
      </form>
    </div>
  );
}
