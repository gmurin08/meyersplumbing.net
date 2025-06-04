import Link from 'next/link';
import globals from 'globals.json'

export default function TermsConditionsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-[url('/images/hero/wrench-bg.webp')] bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Please read these terms carefully before using our services or website.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Last Updated:</strong> June 4, 2025
              </p>
              <p className="text-gray-700">
                By using our website or services, you agree to be bound by these Terms and Conditions. Please read them carefully.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing our website, contacting us for services, or entering into a service agreement with {globals.business_name}, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Descriptions</h3>
            <p className="text-gray-700 mb-4">
              {globals.business_name} provides residential and commercial plumbing services including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
              <li>Emergency plumbing repairs</li>
              <li>Water heater installation and repair</li>
              <li>Drain cleaning and maintenance</li>
              <li>Leak detection and repair</li>
              <li>Pipe installation and replacement</li>
              <li>Bathroom and kitchen plumbing</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Estimates</h3>
            <p className="text-gray-700 mb-6">
              All estimates are provided in good faith based on the information available at the time. Final costs may vary depending on actual conditions encountered during service. We will inform you of any significant changes before proceeding with additional work.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Scheduling and Availability</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Service appointments are scheduled based on availability and may be subject to change due to emergency calls</li>
              <li>We will make reasonable efforts to provide advance notice of any schedule changes</li>
              <li>Customers are expected to be available during scheduled appointment windows</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Payment Methods</h3>
            <p className="text-gray-700 mb-4">
              We accept cash, check, and major credit cards. Payment is due upon completion of services unless other arrangements have been made in writing.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Emergency Services</h3>
            <p className="text-gray-700 mb-4">
              Emergency service calls may require payment at the time of service. Additional charges may apply for after-hours, weekend, and holiday service calls.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Late Payments</h3>
            <p className="text-gray-700 mb-6">
              Accounts not paid within 30 days may be subject to a late fee of 1.5% per month or the maximum allowed by law, whichever is less.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Warranties and Guarantees</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Workmanship Warranty</h3>
            <p className="text-gray-700 mb-4">
              We guarantee our workmanship for one (1) year from the date of service completion. This warranty covers defects in our installation or repair work but does not cover:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
              <li>Normal wear and tear</li>
              <li>Damage caused by misuse or negligence</li>
              <li>Issues arising from work performed by others</li>
              <li>Problems caused by environmental factors beyond our control</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Parts and Materials</h3>
            <p className="text-gray-700 mb-6">
              Parts and materials are covered by manufacturer warranties. We will assist with warranty claims but are not responsible for manufacturer defects or warranty limitations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Liability and Insurance</h2>
            <p className="text-gray-700 mb-4">
              {globals.business_name} is fully licensed and insured. Our liability is limited to the cost of the services provided. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Damage to personal property not directly related to our work</li>
              <li>Pre-existing conditions or hidden defects not disclosed by the customer</li>
              <li>Damage caused by customer negligence or failure to follow our recommendations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Customer Responsibilities</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Access and Safety</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
              <li>Provide safe and reasonable access to work areas</li>
              <li>Remove or protect personal items in work areas</li>
              <li>Disclose known issues or previous repairs that may affect our work</li>
              <li>Ensure pets are secured during service visits</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Property Conditions</h3>
            <p className="text-gray-700 mb-6">
              Customers are responsible for informing us of any hazardous materials, unusual property conditions, or access limitations that may affect service delivery or safety.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cancellation and Rescheduling</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Cancellations must be made at least 2 hours before the scheduled appointment</li>
              <li>Same-day cancellations may be subject to a service call fee</li>
              <li>We reserve the right to reschedule appointments due to emergencies or unforeseen circumstances</li>
              <li>Repeated cancellations may result in requirement of advance payment</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Website Use</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Acceptable Use</h3>
            <p className="text-gray-700 mb-4">
              You may use our website for lawful purposes only. You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
              <li>Use the site in any way that violates applicable laws or regulations</li>
              <li>Transmit any harmful, threatening, or objectionable content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated systems to access or collect information from our site</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Intellectual Property</h3>
            <p className="text-gray-700 mb-6">
              All content on our website, including text, images, logos, and designs, is the property of {globals.business_name} and is protected by copyright and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Dispute Resolution</h2>
            <p className="text-gray-700 mb-6">
              Any disputes arising from our services or these terms will be resolved through good faith negotiation. If resolution cannot be reached, disputes will be handled according to the laws of {globals.business_state}, and any legal proceedings will take place in the appropriate courts of {globals.business_county} County, {globals.business_state}.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on our website with the updated date. Continued use of our services after changes indicates acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              Questions about these Terms and Conditions should be directed to:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>{globals.business_name}</strong></p>
              <p className="text-gray-700 mb-2">{globals.business_address}, {globals.business_city}, {globals.business_state} {globals.business_zip}</p>
              <p className="text-gray-700 mb-2">Phone: <a href={`tel:${globals.business_phone}`} className="text-blue-600 hover:text-blue-800">{globals.business_phone}</a></p>
              <p className="text-gray-700">Email: <a href={`mailto:${globals.business_email}`} className="text-blue-600 hover:text-blue-800">{globals.business_email}</a></p>
            </div>

          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}