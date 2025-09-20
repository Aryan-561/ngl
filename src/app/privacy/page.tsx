import React from 'react';
import { Card } from '@/components/retroui/Card';
import { Text } from '@/components/retroui/Text';
import SEOHead from '@/components/SEOHead';

function PrivacyPage() {
  return (
    <>
      <SEOHead 
        title="Privacy Policy - AnonBox"
        description="Learn how AnonBox protects your privacy and keeps your anonymous feedback secure."
      />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <Text as="h1" className="text-black mb-4">
              Privacy & Terms
            </Text>
            <Text as="p" className="text-gray-600 max-w-2xl mx-auto">
              AnonBox is built on trust. Here&apos;s how we protect your privacy and maintain a safe environment for professional feedback.
            </Text>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Privacy Card */}
            <Card className="border-black shadow-[4px_4px_0px_black] bg-white">
              <Card.Header>
                <Card.Title className="text-black border-b-2 border-black pb-2">
                  🔒 Privacy First
                </Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="space-y-3 text-gray-700">
                  <Text as="p">• Your anonymous messages are completely private</Text>
                  <Text as="p">• We never store personal identifiers with feedback</Text>
                  <Text as="p">• No tracking or data collection for advertising</Text>
                  <Text as="p">• Your workplace feedback stays confidential always</Text>
                </div>
              </Card.Content>
            </Card>

            {/* Terms Card */}
            <Card className="border-black shadow-[4px_4px_0px_black] bg-white">
              <Card.Header>
                <Card.Title className="text-black border-b-2 border-black pb-2">
                  📝 Terms & Basics
                </Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="space-y-3 text-gray-700">
                  <Text as="p">• Use AnonBox for constructive professional feedback only</Text>
                  <Text as="p">• Respect workplace boundaries and colleagues</Text>
                  <Text as="p">• Focus on improvement, not personal attacks</Text>
                  <Text as="p">• Help build better teams through honest communication</Text>
                </div>
              </Card.Content>
            </Card>

            {/* Safety Card */}
            <Card className="border-black shadow-[4px_4px_0px_black] bg-white">
              <Card.Header>
                <Card.Title className="text-black border-b-2 border-black pb-2">
                  🛡️ Zero Tolerance Policy
                </Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="space-y-3 text-gray-700">
                  <Text as="p">• Never try to abuse, harm, or intimidate others</Text>
                  <Text as="p">• No harassment, discrimination, or personal attacks</Text>
                  <Text as="p">• Maintain professional standards in all feedback</Text>
                  <Text as="p">• We monitor for misuse and protect user safety</Text>
                </div>
              </Card.Content>
            </Card>

            {/* Guidelines Card */}
            <Card className="border-black shadow-[4px_4px_0px_black] bg-white">
              <Card.Header>
                <Card.Title className="text-black border-b-2 border-black pb-2">
                  ✨ Best Practices
                </Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="space-y-3 text-gray-700">
                  <Text as="p">• Provide specific, actionable feedback</Text>
                  <Text as="p">• Focus on behaviors, not personal characteristics</Text>
                  <Text as="p">• Suggest improvements rather than just criticism</Text>
                  <Text as="p">• Help create a positive workplace culture</Text>
                </div>
              </Card.Content>
            </Card>

          </div>

          {/* Footer Message */}
          <Card className="border-black shadow-[4px_4px_0px_black] bg-yellow-100">
            <Card.Content className="text-center">
              <Text as="h3" className="text-black mb-4">
                Questions or Concerns?
              </Text>
              <Text as="p" className="text-gray-700 mb-4">
                If you have any questions about our privacy practices or need to report misuse, 
                please contact us at privacy@anonbox.tech
              </Text>
              <Text as="p" className="text-sm text-gray-600">
                Last updated: September 2025
              </Text>
            </Card.Content>
          </Card>

        </div>
      </div>
    </>
  );
}

export default PrivacyPage;