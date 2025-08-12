import { useEffect } from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" bg-gradient-to-r from-blue-600 to-indigo-800 mx-auto px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="bg-white max-w-4xl mx-auto mt-15 shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-800 p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-blue-100">Last updated: [Insert Date]</p>
        </div>

        {/* Content */}
        <div className="p-8 max-w-4xl prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <p className="mb-4">
              The Privacy Policy governs your use of our website www.twincles.com and explains, in general, what Personal Information (as defined below) and other information is collected on the websites, how the information is used and with whom we may share such information. Twincles Tele Solutions is referred to as "Company" in this Privacy Policy.
            </p>
            <p className="mb-4">
              By visiting the website, and by using the services available on the websites, you agree to the terms of this Privacy Policy as they may be amended from time to time. As we update and expand our services, this Privacy Policy may change so check back to this page from time to time.
            </p>
            <p>
              Twincles Tele Solutions is intended for users who are located in India & other countries also. This Privacy Policy shall be interpreted under the laws of India.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Privacy</h2>
            <p className="mb-4">
              Your privacy is important to us. In order to make your visits to our websites and use of the services available through our websites as worthwhile as possible, we may ask you for Personal Information and we may collect certain information from your computer each time you visit the websites. "Personal Information" includes, for example, your name; home and/or business address; email address; telephone, wireless and/or fax number; short message service or text message address or other wireless device address; instant messaging address; credit card and other payment information; demographic information, educational and scholastic information and/or other information that may identify you as an individual or allow online or offline contact with you as an individual.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limited License</h2>
            <p>
              You may access and view the content on the Site on your computer or other internet compatible device, and make copies of the content on the Site for your personal and non-commercial use only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Right to Opt In and Opt Out</h2>
            <p className="mb-4">
              You may have the right and opportunity on the website to opt in or opt out in providing certain Personal Information. For example, at the time you are requested to provide Personal Information on the websites, we may provide you with the opportunity to select or not select filling certain fields which are made mandatory and no mandatory options. You also may be able to make these requests by adjusting your marketing preferences in your website account, if such an account is available on the website you are visiting. You will also be able to opt out of Company promotional emails by clicking on an opt-out link within the email you receive.
            </p>
            <p>
              Please understand that if you opt out of receiving promotional correspondence from us, we may still contact you in connection with your relationship, activities, transactions and communications with us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What Information is collected on the websites?</h2>
            <p className="mb-4">
              We collect personal information from users of our websites, for example, through such users' activities, transactions and completion of online forums on our websites. Such information may be collected, for example, when users create profiles, register or subscribe for accounts or features on our Websites, enter into online transactions, complete surveys, provide college reviews, respond to polls, etc.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-3">Website Usage Information</h3>

            <h4 className="text-lg font-medium text-gray-700 mt-4 mb-2">Cookies</h4>
            <p className="mb-4">
              We may use "cookies" to keep, and sometimes track information about you. Cookies are small data files that are sent to your browser or related software from a Web server and stored on your computer's hard drive. Cookies track where you travel on our Websites and what you look at and purchase. They may store your username and/or password. A cookie may enable us to relate your use of our Websites to other information about you, including your Personal Information. All of these purposes serve to improve and personalize your experience on our Websites.
            </p>

            <h4 className="text-lg font-medium text-gray-700 mt-4 mb-2">Clear GIFs</h4>
            <p className="mb-4">
              We may use "clear GIFs" or similar technologies, in the websites and/or in our communications with you to enable us to know whether you have visited a Web page or received a message. A clear GIF is typically a one-pixel, transparent image (although it can be a visible image as well), located on a Web page or in an email or other type of message, which is retrieved from a remote site on the Internet enabling the verification of an individual's viewing or receipt of a Web page or message. A clear GIF may enable us to relate your viewing or receipt of a Web page or message to other information about you, including your Personal Information.
            </p>

            <h4 className="text-lg font-medium text-gray-700 mt-4 mb-2">IP Address and Clickstream Data</h4>
            <p>
              Our servers automatically collect data about your server's Internet address when you visit us. This information is known as an IP Address, and is a number that's automatically assigned to your computer by your Internet service provider. When you request pages from our websites, our servers may log your IP Address and sometimes your domain name. Our servers may also record the referring page that linked you to us. We use this information for internal system administration, to help diagnose problems with our server, and to administer our websites. Such information may also be used to gather broad demographic information, such as country of origin and Internet Service Provider. We may also link this information with your Personal Information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How is Personal Information Used?</h2>
            <p className="mb-4">
              We will use the Personal Information you provide to our website, to respond to your requests and to provide you with our services and features. We may also use your Personal Information to maintain our internal record keeping. We may match information collected from you through different means, including both Personal Information and website Usage Information, and use such information along with information obtained from other sources, including third parties.
            </p>
            <p>
              In addition, we may send you notices, about products, services, companies and events, sponsored by us and others, that we think might interest you. You may opt out of receiving such correspondence by following the instructions in the Right to opt in and opt Out section.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Offers</h2>
            <p>
              We may provide visitors an opportunity to receive offers from other entities, which includes promotions of institutions of higher education and promotional partners, who have services, products and offers that we think might be of interest to you. Unless you elect not to receive such offers by following the instructions in the Right to opt in and opt Out section above, we may provide your Personal Information to these entities so that they may send you these offers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Service Providers</h2>
            <p>
              We may use third-party partners to help operate or promote our website and deliver our products and services, and may share your information with our affiliates, service providers and other third parties that provide products or services for or through the website for ours.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Legally Compelled Disclosures</h2>
            <p>
              We may disclose user information to government authorities, and to other third parties when compelled to do so by government authorities. We also may disclose user information when we have reason to believe that someone is causing injury to or interference with our rights or property, other users of the websites, or anyone else that could be harmed by such activities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Business Transfers</h2>
            <p>
              In the event that we, or substantially all of our assets, are acquired by one or more third parties as a result of an acquisition, merger, sale, reorganization, consolidation or liquidation, Personal Information may be one of the transferred assets.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Ad Servers</h2>
            <p>
              We may use third-party advertising companies to serve ads when you visit our websites. These companies may use information about you and your visits to our and other websites in order to provide advertisements about goods and services of interest to you. These companies also may employ cookies and clear GIFs to measure advertising effectiveness.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security</h2>
            <p className="mb-4">
              We endeavor to protect the security and integrity of all sensitive Personal Information provided to us via our websites. However, due to the inherent nature of the Internet as an open global communications vehicle, we cannot guarantee that information, during transmission through the Internet or while stored on our system or otherwise in our care, will be absolutely safe from intrusion by others, such as hackers.
            </p>
            <p className="mb-4">
              If you contact us by email or a "contact us" or similar feature on our websites, you should be aware that your transmission might not be secure. A third party could view information you send by these methods in transit.
            </p>
            <p>
              We believe that the security of your Personal Information in our possession or control may have been compromised, we may seek to notify you of that development.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Consent to Processing</h2>
            <p className="mb-4">
              By providing Personal Information to our websites, you understand and consent to the collection, maintenance, processing and transfer of such information in and to different countries and territories.
            </p>
            <p>
              We reserve the right to change or update this Privacy Policy, or any other of our policies or practices, at any time, and will notify users of our websites by posting such changed or updated Privacy Policy on this page. Any changes or updates will be effective immediately ON WEBSITES as a scrolling.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;