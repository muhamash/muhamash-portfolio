import SectionScrollLayout from "@/components/layouts/SectionScrollLayout";
import HypeContainer from "../../animations/bg/hyper/HypeContainer";
import ContactForm from "../form/ContactForm";

const Contact = async() =>
{
  return (
    <SectionScrollLayout
      className="min-h-screen sticky top-0 z-40 w-full bg-black text-white px-4 min-w-screen flex md:flex-row flex-col md:justify-between justify-center gap-10 items-center mx-auto backdrop-blur-sm"
    >

      {/* background */ }
      <div className="-z-50">
        <HypeContainer />
      </div>

      {/* content */ }
      <div className="flex md:flex-row flex-col gap-10 items-center w-full md:justify-between z-50 md:p-10">

        <div className="flex flex-col gap-3 w-full md:w-[500px] h-fit p-3">
          <h2 className="text-violet-300 text-[30px] md:text-[25px] pb-5">Get in touch</h2>
          <p className="text-gray-300 font-mono text-md">Email: muhammad-ashraful@outlook.com</p>
          <p className="text-gray-300 font-mono text-md">Phone: +8801306567164</p>
          <p className="text-slate-200">Let's build something great together! Whether you're looking for expert solutions, need guidance on a project, or just want to explore new possibilities, I'm here to help. Reach out today—let's turn ideas into reality!🚀😊🧑🏻‍💻</p>
        </div>

        <ContactForm />
      </div>

    </SectionScrollLayout>
  );
};

export default Contact;