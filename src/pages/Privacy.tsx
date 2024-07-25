import * as React from "react";
import Layout from "../components/Layout";

const Privacy: React.FC = () => {
  return (
    <Layout>
      <section className="flex justify-center items-center w-full max-md:max-w-full">
        <div className="w-full max-w-[75rem] p-10">
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

                <div className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Data Collection and Use</strong>
                  <p>We collect and use the following types of data:</p>
                  <ol>
                    <li>
                      a&#41; Screenshots: When you send screenshots to our app, we collect and analyze them using artificial intelligence to create events in your calendar. These screenshots may contain personal information.
                    </li>
                    <li>
                      b&#41; Calendar Information: We access and modify your Google Calendar data to create, edit, and manage events based on the information extracted from your screenshots.
                    </li>
                    <li>
                      c&#41; Contact Information: We access your Google Contacts to allow you to add and provide search function within the app to manage invitees to events. This includes names, email addresses, and other contact details.
                    </li>
                    <li>
                      d&#41; User Profile Information: When you sign in with your Google account, we collect your name, email address, and profile information to personalize your experience.
                    </li>
                  </ol>
                </div>

                <div className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Google User Data</strong>
                  <p>Aivee accesses and uses Google user data in the following ways:</p>
                  <ol>
                    <li>
                      a&#41; Contacts:
                      <ol>
                        <li>
                          &#x2022; We can see and download contact info automatically saved in your "Other contacts"
                        </li>
                        <li>
                          &#x2022; We can see and download your contacts
                        </li>
                      </ol>
                      <p>
                        These permissions allow us to access your contacts for adding and providing a search function within the app to manage invitees to events.
                      </p>
                    </li>
                    <li>
                      b&#41; Calendar:
                      <ol>
                        <li>
                          &#x2022; We can see, edit, share, and permanently delete all the calendars you can access using Google Calendar
                        </li>
                      </ol>
                      <p>
                        This allows us to create, edit, and manage events in your Google Calendar based on the information extracted from your screenshots.
                      </p>
                    </li>
                    <li>
                      c&#41; User Information:
                      <ol>
                        <li>
                          &#x2022; We can associate you with your personal info on Google
                        </li>
                        <li>
                          &#x2022; We can see your personal info, including any personal info you've made publicly available
                        </li>
                        <li>
                          &#x2022; We can see your primary Google Account email address
                        </li>
                      </ol>
                      <p>
                        These permissions allow us to access your basic profile information and email address to personalize your experience in the app.
                      </p>
                      <p>
                        We use this data solely for the purpose of providing and improving our service. We do not use your data for any other purposes or share it with third parties without your explicit consent.
                      </p>
                    </li>
                  </ol>
                </div>

                <div className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Data Storage and Security</strong>
                  <p>
                    All collected data is encrypted and stored securely on our servers. Access to your data is strictly limited to authorized personnel who need it to provide and maintain our service.
                  </p>
                </div>

                <div className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Data Sharing</strong>
                  <p>
                    We do not share your personal information with third parties except as necessary to provide our service or as required by law.
                  </p>
                </div>

                <div className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Data Retention</strong>
                  <p>
                    We retain your data for 90 days to provide our service and comply with legal obligations. You can request the deletion of your data at any time by contacting us at <a href="privacy@aivee.xyz" className="text-emerald-200">privacy@aivee.xyz</a>.
                  </p>
                </div>

                <div className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>User Rights and Control</strong>
                  <p>
                    You have the right to access, edit, or delete your personal information at any time. You can manage your data directly within the application or by contacting us at <a href="privacy@aivee.xyz" className="text-emerald-200">privacy@aivee.xyz</a>.
                  </p>
                </div>

                <div className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Push Notifications</strong>
                  <p>
                    We send push notifications for event confirmations and other app-related communications. You can manage notification settings in your device settings.
                  </p>
                </div>

                <div className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Consent and Opt-Out</strong>
                  <p>
                    By using our application, you consent to the collection and use of your data as described in this privacy policy. You can opt-out of data collection at any time by discontinuing the use of our application.
                  </p>
                </div>

                <div className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Updates to Privacy Policy</strong>
                  <p>
                    We may update this privacy policy from time to time. We will notify you of any significant changes via email or through the application.
                  </p>
                </div>

                <div className="mt-5 text-base font-medium max-md:max-w-full max-md:text-base">
                  <strong>Contact Us</strong>
                  <p>
                    If you have any questions or concerns about our privacy policy or the handling of your data, please contact us at <a href="privacy@aivee.xyz" className="text-emerald-200">privacy@aivee.xyz</a>.
                  </p>
                  <p className="mt-2">
                    By using our application, you acknowledge that you have read, understood, and agree to the terms of this privacy policy.
                  </p>
                  <p className="mt-2">
                    This privacy policy is available at <a href="/privacy-policy" className="text-emerald-200">www.aivee.xyz/privacy-policy</a> and is linked on our homepage and Google OAuth consent screen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;