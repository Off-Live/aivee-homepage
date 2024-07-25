import * as React from "react";
import Layout from "../components/Layout";

const Terms: React.FC = () => {
  return (
    <Layout>
      <section className="flex justify-center items-center w-full max-md:max-w-full">
        <div className="w-full max-w-[75rem] p-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full text-justify">
                <h3 className="text-4xl font-semibold text-emerald-200 max-md:max-w-full max-md:text-4xl">
                  Terms of Use for Aivee.xyz
                </h3>

                <p className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  Effective Date: Jun 21, 2024
                </p>

                <p className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  Welcome to Aivee.xyz, an AI scheduling sidekick application provided by OFF LIVE PTE. LTD. ("Company," "we," or "us"). By accessing or using our application, you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use our application.
                </p>

                <div className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Acceptance of Terms</strong>
                  <p>
                    By using Aivee.xyz, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy.
                  </p>
                </div>

                <div className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Description of Service</strong>
                  <p>
                    Aivee.xyz is an AI-powered application that analyzes user-provided screenshots to extract relevant information and assists users in managing their schedules by suggesting events to be added to their calendar.
                  </p>
                </div>

                <div className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>User Responsibilities</strong>
                  <p>
                    When using Aivee.xyz, you agree to:
                    <ul>
                      <li>a. Provide accurate and up-to-date information.</li>
                      <li>b. Use the application only for lawful purposes.</li>
                      <li>c. Not use the application to upload or transmit any harmful, infringing, or illegal content.</li>
                      <li>d. Not attempt to disrupt or interfere with the functioning of the application.</li>
                    </ul>
                  </p>
                </div>

                <div className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Intellectual Property Rights</strong>
                  <p>
                    All intellectual property rights related to Aivee.xyz, including trademarks, copyrights, and patents, are owned by the Company. You may not use or reproduce any of our intellectual property without our prior written consent.
                  </p>
                </div>

                <div className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>User-Generated Content</strong>
                  <p>
                    By uploading screenshots to Aivee.xyz, you grant the Company a non-exclusive, worldwide, royalty-free license to use and analyze the content within the application for the sole purpose of extracting relevant information and assisting you in managing your schedule by suggesting events to be added to your calendar. The Company does not claim ownership of your content and will not use it for any other purposes without your explicit consent.
                  </p>
                </div>

                <p className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>User-Generated Content</strong>
                  <p>
                    By using our application, you consent to the collection and use of your data as described in this privacy policy. You can opt-out of data collection at any time by discontinuing the use of our application.
                  </p>
                </p>

                <div className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Disclaimer of Warranties</strong>
                  <p>
                    Aivee.xyz is provided on an "as is" and "as available" basis. We disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
                  </p>
                </div>

                <div className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Limitation of Liability</strong>
                  <p>
                    In no event shall the Company be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of Aivee.xyz.
                  </p>
                </div>

                <div className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Indemnification</strong>
                  <p>
                    You agree to indemnify and hold the Company harmless from any claims, damages, or expenses arising from your use of Aivee.xyz or violation of these Terms.
                  </p>
                </div>

                <div className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Termination</strong>
                  <p>
                    We reserve the right to terminate or suspend your access to Aivee.xyz at any time, for any reason, without prior notice.
                  </p>
                </div>

                <div className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Governing Law and Dispute Resolution</strong>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of Singapore. Any disputes arising under these Terms shall be resolved through arbitration in accordance with the rules of the Singapore International Arbitration Centre (SIAC).
                  </p>
                </div>

                <p className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  By using Aivee.xyz, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;