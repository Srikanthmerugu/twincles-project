import { useEffect } from 'react';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
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
          <h1 className="text-3xl font-bold mb-2">Terms & Conditions</h1>
          <p className="text-blue-100">Last updated: [Insert Date]</p>
        </div>

        {/* Content */}
        <div className="p-8 max-w-4xl prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to Twincles.com</h2>
            <p className="mb-4">
              These Terms and Conditions outline the rules and regulations for the use of the website and services provided by Twincles Tele Solutions Pvt Ltd. By accessing or using Twincles' services, you agree to abide by these Terms and any applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Definitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">"User" or "You"</span> refers to anyone accessing or using the services of Twincles.com.
              </li>
              <li>
                <span className="font-medium">"Services"</span> includes SMS, voice broadcasting, MMS, RCS messaging, APIs, and other communication solutions provided by Twincles.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing the website or using the services, you agree to adhere to these Terms.
            </p>
            <p>
              If you do not agree with any part of the Terms, please discontinue using the services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Eligibility</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be at least 18 years of age to use the services of Twincles.</li>
              <li>Users must have legal authority to enter into contracts, and businesses must comply with relevant laws and regulations.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Account Registration and Security</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To access certain services, users are required to create an account.</li>
              <li>It is your responsibility to keep your account credentials, including your password, secure.</li>
              <li>Inform Twincles promptly if you detect any unauthorized access to your account.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Services Usage</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You agree to use Twincles' services in compliance with all applicable laws and for lawful purposes only.</li>
              <li>Prohibited activities include, but are not limited to, sending unsolicited messages, engaging in fraud, or violating privacy rights.</li>
              <li>Twincles reserves the right to suspend or terminate access to services if misuse occurs.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment and Billing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All payments for services are to be made through the agreed-upon methods.</li>
              <li>Users are responsible for timely payments. Failure to pay for services may result in suspension or termination of access.</li>
              <li>Twincles retains the right to adjust pricing and service terms at any time.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All content, trademarks, logos, and technologies provided by Twincles, including those on Twincles.com, are the exclusive property of Twincles or its licensors.</li>
              <li>Users are prohibited from copying, altering, sharing, or utilizing Twincles' intellectual property without prior written approval.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Protection and Privacy</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Twincles is committed to protecting user privacy and complies with applicable data protection laws.</li>
              <li>Please refer to our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> for information on how personal data is collected, stored, and used.</li>
              <li>Users are responsible for ensuring compliance with data protection laws in their use of the services.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Limitation of Liability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Twincles is not liable for indirect, incidental, or consequential damages resulting from the use or inability to use the services.</li>
              <li>Our maximum liability is limited to the amount you paid for the services in the last 30 days.</li>
              <li>Twincles is not responsible for third-party actions or service interruptions beyond our control.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Indemnification</h2>
            <p className="mb-2">
              You agree to indemnify and hold harmless Twincles, its affiliates, and partners from any claims, damages, or losses arising out of:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your proper or improper use of the services.</li>
              <li>Breach of these Terms or any relevant laws.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Modifications to Terms</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Twincles reserves the right to modify or update these Terms at any time.</li>
              <li>Changes will be posted on this page, and by continuing to use the services, you agree to the revised Terms.</li>
              <li>You are responsible for periodically reviewing these Terms.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Termination</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Twincles may suspend or terminate your access to services if you breach these Terms, engage in illegal activities, or fail to comply with payment obligations.</li>
              <li>You may terminate your account at any time by notifying Twincles in writing.</li>
              <li>Termination of services does not exempt you from any unpaid financial obligations.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Third-Party Services</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Twincles may collaborate with third-party platforms or services.</li>
              <li>We are not responsible for the availability, accuracy, or use of any third-party services and disclaim any liability related to them.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Force Majeure</h2>
            <p>
              Twincles will not be held liable for failure to perform services due to events beyond our control, including natural disasters, strikes, technical failures, or government actions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Governing Law and Dispute Resolution</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>These Terms are subject to and interpreted under the laws of India.</li>
              <li>Any disputes arising from the use of services will be resolved through binding arbitration under the laws of India.</li>
              <li>Jurisdiction for any legal matters will lie with the courts of Hyderabad, India.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="mb-2">
              If you need assistance or clarification on these Terms, please contact us at:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: <a href="mailto:letstalk@twincles.com" className="text-blue-600 hover:underline">letstalk@twincles.com</a></li>
              <li>Address: Twincles Tele Solutions Pvt Ltd, [Hyderabad, JNTU road, Manjeera Trinity]</li>
            </ul>
          </section>

          <section className="mt-12 pt-6 border-t border-gray-200">
            <p className="font-medium">
              By using Twincles.com, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
            </p>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default TermsAndConditions;