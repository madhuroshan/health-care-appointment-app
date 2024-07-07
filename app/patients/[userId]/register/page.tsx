import { HeartPulseIcon } from "lucide-react";
import Image from "next/image";
import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";

const RegisterPage = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[850px] flex-1 flex-col py-10">
          <div className="flex justify-center items-center gap-2 mb-12 w-fit">
            <HeartPulseIcon className="w-6 h-6 text-green-500 font-bold" />
            <h1 className="text-2xl font-bold">
              care<span className="text-green-500">pulse</span>
            </h1>
          </div>

          <RegisterForm user={user} />
          <p className="copyright py-10">&copy; 2024 CarePulse</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default RegisterPage;
