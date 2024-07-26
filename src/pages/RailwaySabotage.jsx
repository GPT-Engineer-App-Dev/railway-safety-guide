import { AlertTriangle, Bell, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RailwaySabotage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Preventing Railway Network Sabotage</h1>
        <p className="text-xl text-muted-foreground">Ensuring the Safety and Security of Our Railways</p>
      </header>

      <main>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <p className="mb-4">
                Railway network security is paramount for the safety of passengers, the efficiency of transportation, and the overall economic stability of regions relying on rail infrastructure. As our railway systems become more advanced and interconnected, the need for robust security measures against potential sabotage has never been more critical.
              </p>
            </div>
            <div className="flex-1">
              <img src="/placeholder.svg" alt="Railway security" className="mx-auto object-cover w-full h-[200px] rounded-lg shadow-md" />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What is Railway Sabotage?</h2>
          <p className="mb-4">
            Railway sabotage refers to deliberate actions taken to damage, disrupt, or destroy railway infrastructure, equipment, or operations. These acts can range from minor vandalism to severe damage that poses significant safety risks and operational challenges.
          </p>
          <h3 className="text-xl font-semibold mb-2">Examples of Sabotage Incidents:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Tampering with track signals or switches</li>
            <li>Placing obstructions on railway tracks</li>
            <li>Damaging communication systems</li>
            <li>Cyber attacks on railway control systems</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Consequences of Sabotage</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Safety Risks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Potential for serious accidents and derailments</li>
                  <li>Risk of injury or loss of life for passengers and staff</li>
                  <li>Damage to surrounding environment and infrastructure</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  Economic Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Disruption to passenger and freight services</li>
                  <li>Costly repairs and replacements of damaged equipment</li>
                  <li>Loss of revenue and potential long-term economic consequences</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Prevention Measures</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-500" />
                  For Railway Operators
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Implement robust physical security measures</li>
                  <li>Enhance cybersecurity for digital systems</li>
                  <li>Conduct regular security audits and risk assessments</li>
                  <li>Provide comprehensive security training for staff</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-500" />
                  For the Public
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Stay vigilant and report suspicious activities</li>
                  <li>Respect railway property and safety barriers</li>
                  <li>Follow all posted safety guidelines and instructions</li>
                  <li>Participate in public awareness campaigns</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Reporting Suspicious Activities</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-purple-500" />
                How to Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                If you witness any suspicious activity around railway infrastructure, it's crucial to report it immediately. Your vigilance can help prevent potential sabotage and ensure the safety of the railway network.
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Call the emergency hotline: <strong>1-800-555-RAIL</strong></li>
                <li>Use the railway's mobile app to report concerns</li>
                <li>Inform the nearest railway staff or security personnel</li>
              </ul>
              <p>
                Remember, it's always better to report a concern, even if it turns out to be nothing. Your action could prevent a serious incident.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="text-center text-sm text-muted-foreground">
        <p className="mb-2">For more information, visit our <a href="#" className="underline">Railway Safety Resources</a> page.</p>
        <p>Contact: info@railwaysecurity.com | Emergency: 1-800-555-RAIL</p>
      </footer>
    </div>
  );
};

export default RailwaySabotage;