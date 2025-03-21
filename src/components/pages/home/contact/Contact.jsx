import dynamic from "next/dynamic";

const SectionScrollLayout = dynamic( () => import( "@/components/layouts/SectionScrollLayout" ) );
const HypeContainer = dynamic( () => import( "../../../animations/bg/hyper/HypeContainer" ) );
const ContactForm = dynamic( () => import( "../form/ContactForm" ) );

const Contact = async() =>
{
  return (
    <div
      className="h-screen top-0 z-50 w-full bg-black text-white px-4 w-screen flex md:flex-row flex-col md:justify-between justify-center gap-10 items-center mx-auto backdrop-blur-sm py-10 mb-5"
    >

      {/* background */ }
      <div className="-z-50">
        <HypeContainer />
      </div>

      {/* content */ }
      <div className="flex md:flex-row flex-col gap-10 items-center w-full md:justify-between z-50 md:p-10 pb-5">

        <div className="flex flex-col gap-3 w-full md:w-[500px] h-fit p-3">
          <h2 className="text-violet-300 text-[40px] md:text-[25px] pb-5 font-arsenal">Get in touch</h2>
          <p className="text-gray-300 font-thin text-md font-outfit">Email: muhammad-ashraful@outlook.com</p>
          <p className="text-gray-300 font-thin text-md font-outfit">Phone: +8801306567164</p>
          <p className="text-slate-200 font-nunito md:text-[22px] text-[18px]">Let's build something great together! Whether you're looking for expert solutions, need guidance on a project, or just want to explore new possibilities, I'm here to help. Reach out today—let's turn ideas into reality!🚀😊🧑🏻‍💻.</p>
        </div>

        <ContactForm />
      </div>

    </div>
  );
};

export default Contact;