import { RegisterForm } from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <div className="flex">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={1000}
              height={1000}
              className="mb-12 h-10 w-fit"
            />
            <h1 className="text-3xl font-bold pl-2">Care Vista</h1>
          </div>
          <RegisterForm user={user} />

          <p className="copyright py-12">© 2024 Care Vista</p>
        </div>
      </section>
      <Image
        src="/assets/images/register-img.png"
        alt="patient"
        width={1000}
        height={1000}
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
