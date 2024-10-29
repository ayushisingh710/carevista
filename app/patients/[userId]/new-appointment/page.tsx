import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.action";
import Image from "next/image";
import React from "react";

const NewAppointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[896px] flex-1 justify-between ">
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
          <AppointmentForm
            type="create"
            userId={userId}
            patientId={patient.$id}
          />
          <p className="copyright py-12">© 2024 Care Vista</p>
        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        alt="patient"
        width={1000}
        height={1000}
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default NewAppointment;
