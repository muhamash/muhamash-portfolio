/* eslint-disable react/no-unescaped-entities */
import SectionScrollLayout from '@/components/layouts/SectionScrollLayout';
import Footer from '@/components/pages/home/footer/Footer';
import { Clock, Eye, Info, Lock, ShieldCheck } from 'lucide-react';

export default async function PrivacyPage() {
    return (
        <>
            <SectionScrollLayout className="min-h-screen flex flex-col">
                <div className="flex-1 pt-24">
                    {/* <Privacy /> */ }
                
                    <div className="space-y-16">
                        <div className="text-white max-w-none">
                            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                                <span className="bg-primary/10 p-2 rounded-full mr-3">
                                    <Info className="text-primary h-5 w-5" />
                                </span>
                                Introduction
                            </h2>
                            <p className="font-nunito mb-4">
                                This Privacy Policy describes how your personal information is collected, used, and shared when you visit this portfolio website. We respect your privacy and are committed to protecting your personal data.
                            </p>
                            <p className="font-nunito">
                                By using this website, you consent to the data practices described in this policy.
                            </p>
                        </div>
            
                        <div className="text-white max-w-none">
                            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                                <span className="bg-primary/10 p-2 rounded-full mr-3">
                                    <Eye className="text-primary h-5 w-5" />
                                </span>
                                Information We Collect
                            </h2>
                            <p className="font-nunito mb-4">
                                When you visit this website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
                            </p>
                            <p className="font-nunito mb-4">
                                Additionally, as you browse the site, we collect information about the individual web pages that you view, what websites or search terms referred you to this site, and information about how you interact with the site. We refer to this automatically-collected information as "Device Information."
                            </p>
                            <h3 className="text-xl font-medium mt-6 mb-3">We collect Device Information using the following technologies:</h3>
                            <ul className="list-disc pl-5 space-y-2 font-nunito">
                                <li>&quot;Cookies&ldquo; are data files that are placed on your device and often include an anonymous unique identifier.</li>
                                <li>"Log files&ldquo; track actions occurring on the site, and collect data including your IP address, browser type, referring/exit pages, and date/time stamps.</li>
                                <li>"Web beacons," "tags,&quot; and "pixels&rdquo; are electronic files used to record information about how you browse the site.</li>
                            </ul>
                        </div>
            
                        <div className="text-white max-w-none">
                            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                                <span className="bg-primary/10 p-2 rounded-full mr-3">
                                    <Lock className="text-primary h-5 w-5" />
                                </span>
                                How We Use Your Information
                            </h2>
                            <p className="font-nunito mb-4">
                                We use the Device Information that we collect to help us screen for potential risk and fraud, and more generally to improve and optimize our site (for example, by generating analytics about how our visitors browse and interact with the site).
                            </p>
                        </div>
            
                        <div className="text-white max-w-none">
                            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                                <span className="bg-primary/10 p-2 rounded-full mr-3">
                                    <ShieldCheck className="text-primary h-5 w-5" />
                                </span>
                                Sharing Your Information
                            </h2>
                            <p className="font-nunito mb-4">
                                We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Google Analytics to help us understand how visitors use the site -- you can read more about how Google uses your Personal Information here: <a href="https://www.google.com/intl/en/policies/privacy/" className="text-primary hover:underline">https://www.google.com/intl/en/policies/privacy/</a>.
                            </p>
                            <p className="font-nunito mb-4">
                                You can also opt-out of Google Analytics here: <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline">https://tools.google.com/dlpage/gaoptout</a>.
                            </p>
                            <p className="font-nunito">
                                Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
                            </p>
                        </div>
            
                        <div className="text-white max-w-none">
                            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                                <span className="bg-primary/10 p-2 rounded-full mr-3">
                                    <Clock className="text-primary h-5 w-5" />
                                </span>
                                Data Retention
                            </h2>
                            <p className="font-nunito mb-4">
                                When you visit the site, we will maintain your Device Information for our records unless and until you ask us to delete this information.
                            </p>
                        </div>
            
                        <div className="text-white max-w-none">
                            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                                <span className="bg-primary/10 p-2 rounded-full mr-3">
                                    <Info className="text-primary h-5 w-5" />
                                </span>
                                Changes
                            </h2>
                            <p className="font-nunito mb-4">
                                We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
                            </p>
                        </div>
            
                        <div className="text-white max-w-none">
                            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                                <span className="bg-primary/10 p-2 rounded-full mr-3">
                                    <Info className="text-primary h-5 w-5" />
                                </span>
                                Contact Us
                            </h2>
                            <p className="font-nunito mb-4">
                                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <span className="text-primary">muhammad-ashraful@outlook.com</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </SectionScrollLayout>
            <Footer/>
        </>
    );
}
