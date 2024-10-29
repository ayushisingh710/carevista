import { PatientForm } from "@/components/forms/PatientForm";
import PasskeyModal from "@/components/PasskeyModal";
import Image from "next/image";
import Link from "next/link";

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";
  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
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
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-700 xl:text-left">
              © 2024 Care Vista
            </p>
            <Link href="/?admin=true" className="text-green-500 font-bold">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/Doctors.png"
        alt="patient"
        width={1000}
        height={1000}
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
