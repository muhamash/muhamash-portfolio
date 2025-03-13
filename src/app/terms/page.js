import { AlertCircle, CheckCircle } from 'lucide-react';
import dynamic from 'next/dynamic';

const SectionScrollLayout = dynamic( () => import( '@/components/layouts/SectionScrollLayout' ) );
const Footer = dynamic( () => import( "@/components/pages/home/footer/Footer" ) );

export default async function TermsPage() {
    return (
        <>
            <SectionScrollLayout className="flex-1 items-start justify-center py-24 md:px-20 px-10 min-h-screen bg-white text-black">
                <div className="space-y-16 text-black text-center">
                    <div className=" text-black">
                        <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center text-black font-arsenal">
                            <span className="bg-primary/10 p-2 rounded-full mr-3">
                                <CheckCircle className="text-primary h-5 w-5" />
                            </span>
                            Terms of Use
                        </h2>
                        <p className="text-gray-600 text-md mb-4 font-edu font-bold ">
                            Welcome to my portfolio website. By accessing or using this site, you agree to comply with and be bound by the basic terms and conditions.
                        </p>
                    </div>

                    <div className=" ">
                        <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center text-black font-arsenal">
                            <span className="bg-primary/10 p-2 rounded-full mr-3">
                                <AlertCircle className="text-primary h-5 w-5" />
                            </span>
                            Intellectual Property
                        </h2>
                        <p className="text-gray-600 text-md mb-4 font-edu font-bold ">
                           All content, designs, and code on this site are my property unless otherwise stated. Some components and libraries used are open-source or sourced from the internet, and they retain their respective licenses. You may not reproduce, distribute, or use any original materials without my explicit permission.
                        </p>
                    </div>

                    <div className=" ">
                        <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center text-black font-arsenal">
                            <span className="bg-primary/10 p-2 rounded-full mr-3">
                                <AlertCircle className="text-primary h-5 w-5" />
                            </span>
                            Limitation of Liability
                        </h2>
                        <p className="text-gray-600 text-md mb-4 font-edu font-bold ">
                            I am not responsible for any damages or issues arising from the use of this website. The content is provided &ldquo;as is&ldquo; without any warranties of any kind.
                        </p>
                    </div>

                    <div className=" ">
                        <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center text-black font-arsenal">
                            <span className="bg-primary/10 p-2 rounded-full mr-3">
                                <CheckCircle className="text-primary h-5 w-5" />
                            </span>
                            Changes to Terms
                        </h2>
                        <p className="text-gray-600 text-md mb-4 font-edu font-bold ">
                            I, Md Ashraful Alam reserve the right to update these terms at any time. Continued use of the website means you accept any modifications made.
                        </p>
                    </div>

                    <div className=" ">
                        <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center text-black font-arsenal">
                            <span className="bg-primary/10 p-2 rounded-full mr-3">
                                <AlertCircle className="text-primary h-5 w-5" />
                            </span>
                            Contact
                        </h2>
                        <p className="text-gray-600 text-md mb-4 font-edu font-bold ">
                            If you have any questions about these terms, feel free to contact me at <span className="text-violet-600 font-code text-sm">muhammad-ashraful@outlook.com</span>.
                        </p>
                    </div>
                </div>
            </SectionScrollLayout>
            <Footer/>
        </>
    );
}