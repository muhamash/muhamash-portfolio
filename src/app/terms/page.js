/* eslint-disable react/no-unescaped-entities */

import SectionScrollLayout from '@/components/layouts/SectionScrollLayout';
import Footer from '@/components/pages/home/footer/Footer';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default async function TermsPage() {
    return (
        <>
            <SectionScrollLayout className="flex-1 pt-24 min-h-screen bg-white text-black">
                <div className="space-y-16 text-black">
                    <div className=" text-black">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center text-black">
                            <span className="bg-primary/10 p-2 rounded-full mr-3">
                                <CheckCircle className="text-primary h-5 w-5" />
                            </span>
                            Terms of Use
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            Welcome to my portfolio website. By accessing or using this site, you agree to comply with and be bound by the following terms and conditions.
                        </p>
                    </div>

                    <div className=" ">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center">
                            <span className="bg-primary/10 p-2 rounded-full mr-3">
                                <AlertCircle className="text-primary h-5 w-5" />
                            </span>
                            Intellectual Property
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            All content, designs, and code on this site are my property unless otherwise stated. You may not reproduce, distribute, or use any materials without my explicit permission.
                        </p>
                    </div>

                    <div className=" ">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center">
                            <span className="bg-primary/10 p-2 rounded-full mr-3">
                                <AlertCircle className="text-primary h-5 w-5" />
                            </span>
                            Limitation of Liability
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            I am not responsible for any damages or issues arising from the use of this website. The content is provided "as is" without any warranties of any kind.
                        </p>
                    </div>

                    <div className=" ">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center">
                            <span className="bg-primary/10 p-2 rounded-full mr-3">
                                <CheckCircle className="text-primary h-5 w-5" />
                            </span>
                            Changes to Terms
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            I reserve the right to update these terms at any time. Continued use of the website means you accept any modifications made.
                        </p>
                    </div>

                    <div className=" ">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center">
                            <span className="bg-primary/10 p-2 rounded-full mr-3">
                                <AlertCircle className="text-primary h-5 w-5" />
                            </span>
                            Contact
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            If you have any questions about these terms, feel free to contact me at <span className="text-primary">muhammad-ashraful@outlook.com</span>.
                        </p>
                    </div>
                </div>
            </SectionScrollLayout>
            <Footer/>
        </>
    );
}