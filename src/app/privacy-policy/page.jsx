import Link from 'next/link';
import globals from 'globals.json'

export default function PrivacyPolicyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-[url('/images/hero/wrench-bg.webp')] bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Last Updated:</strong> June 4, 2025
              </p>
              <p className="text-gray-700">
                This Privacy Policy explains how M. Meyers Plumbing collects, uses, and protects your information when you visit our website or use our services.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              When you contact us or request services, we may collect the following personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
              <li>Name and contact information (phone number, email address, mailing address)</li>
              <li>Service address and property details</li>
              <li>Service history and preferences</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Communication records for customer service purposes</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Website Usage Information</h3>
            <p className="text-gray-700 mb-4">
              We automatically collect certain information when you visit our website:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
              <li>IP address and browser information</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website information</li>
              <li>Device information and screen resolution</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
              <li>Provide and improve our plumbing services</li>
              <li>Communicate with you about appointments, estimates, and service updates</li>
              <li>Process payments and maintain service records</li>
              <li>Send service reminders and maintenance recommendations</li>
              <li>Improve our website and customer experience</li>
              <li>Comply with legal obligations and protect our business interests</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
              <li><strong>Service Providers:</strong> With trusted partners who assist us in operating our business (payment processors, scheduling software, etc.)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of our business</li>
              <li><strong>Emergency Situations:</strong> To protect the safety of our employees, customers, or the public</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
              <li>Secure data transmission using SSL encryption</li>
              <li>Regular security assessments and updates</li>
              <li>Limited access to personal information on a need-to-know basis</li>
              <li>Secure storage of physical and digital records</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 mb-6">
              Our website may use cookies and similar technologies to improve your browsing experience. You can control cookie settings through your browser preferences. Some features of our website may not function properly if cookies are disabled.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
              <li>Request access to the personal information we have about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information (subject to legal and business requirements)</li>
              <li>Opt out of marketing communications</li>
              <li>Request information about how your data is processed</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date. Your continued use of our services after any changes indicates your acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
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