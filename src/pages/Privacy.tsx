import * as React from "react";

const Privacy: React.FC = () => {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center">
      <div className="flex relative flex-col items-center px-16 pt-10 w-full max-md:px-5 max-md:max-w-full">
        <header className="flex flex-col w-full max-w-[1440px] max-md:max-w-full">
          <div className="flex gap-2.5 justify-between pl-10 text-2xl max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
            <h3 className="max-sm:invisible font-medium text-white"><a href="/">Home</a></h3>
          </div>
          <section className="justify-center self-center mt-20 max-w-full w-[1291px] max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full text-justify">
                  <h3 className="text-4xl font-semibold text-emerald-200 max-md:max-w-full max-md:text-4xl">
                  Privacy Policy for Aivee.xyz
                  </h3>

                  <p className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  Effective Date: Jun 21, 2024
                  </p>

                  <p className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  At OFF LIVE PTE. LTD., we are committed to protecting your privacy and ensuring the security of your personal information. This privacy policy explains how we collect, use, and store your data when you use our AI scheduling sidekick application.
                  </p>

                  <p className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                    <strong>Data Collection</strong>
                    <ol>
                        <li>1. Screenshots: When you upload screenshots to our application, we collect and analyze them using artificial intelligence to create events in your calendar. These screenshots may contain personal information.</li>
                        <li>2. Contact Information: When you sign in to our application using your Google account, we collect your contact information for Google API, including your name and email address.</li>
                    </ol>
                  </p>

                  <p className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Data Use</strong>
                    <p>
                    We use the collected data solely for the purpose of providing and improving our service. The screenshots are analyzed by our AI algorithms to extract relevant information and create events in your calendar. We do not use your data for any other purposes or share it with third parties without your explicit consent.
                    </p>
                  </p>

                  <p className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Data Security</strong>
                    <p>
                    We take the security of your data seriously. All collected data is encrypted and stored securely on our servers. Access to your data is strictly limited to authorized personnel who need it to provide and maintain our service.
                    </p>
                  </p>

                  <p className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Data Retention</strong>
                    <p>
                    We retain your data only 90 days to provide our service and comply with legal obligations. You can request the deletion of your data at any time by contacting us at <a href="privacy@aivee.xyz" className="text-inherit">privacy@aivee.xyz</a>.
                    </p>
                  </p>

                  <p className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>User Control</strong>
                    <p>
                    You have the right to access, edit, or delete your personal information at any time. You can manage your data directly within the application or by contacting us at <a href="privacy@aivee.xyz" className="text-inherit">privacy@aivee.xyz</a>.
                    </p>
                  </p>

                  <p className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Consent and Opt-Out</strong>
                    <p>
                    By using our application, you consent to the collection and use of your data as described in this privacy policy. You can opt-out of data collection at any time by discontinuing the use of our application.
                    </p>
                  </p>

                  <p className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Updates to Privacy Policy</strong>
                    <p>
                    We may update this privacy policy from time to time. We will notify you of any significant changes via email or through the application.
                    </p>
                  </p>

                  <p className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Contact Us</strong>
                    <p>
                    If you have any questions or concerns about our privacy policy or the handling of your data, please contact us at <a href="privacy@aivee.xyz" className="text-inherit">privacy@aivee.xyz</a>.
                    </p>
                  </p>

                  <p className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  By using our application, you acknowledge that you have read, understood, and agree to the terms of this privacy policy.
                  </p>
                  
                </div>
              </div>
            </div>
          </section>
        </header>
      </div>
      
      <footer className="flex relative justify-center items-center px-16 py-10 mt-20 w-full text-emerald-200 backdrop-blur-[80px] bg-zinc-950 bg-opacity-20 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1436px] max-md:flex-wrap max-md:max-w-full max-md:flex-col max-md:content-center">
          <address className="flex not-italic text-xl max-md:text-base">
            Contact:{" "}
            <a href="mailto:hello@aivee.xyz" className="text-inherit">
              hello@aivee.xyz
            </a>
          </address>
          <div className="flex flex-col justify-center text-xl max-md:text-base max-md:text-center">
            <a href="/privacy-policy" className="text-inherit">Privacy Policy</a>
            <a href="/terms-of-use" className="mt-2 text-inherit">Terms of use</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;