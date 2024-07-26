import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, FileText, Info, Shield } from "lucide-react";

const RailwaySabotagePrevention = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Preventing Railway Network Sabotage</h1>
        <p className="text-xl text-muted-foreground">Ensuring the Safety and Security of Our Railways</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <p className="mb-4">
              Railway network security is paramount for the safety of passengers, the efficiency of transportation, and the overall economic stability of regions relying on rail infrastructure. As our railway systems become more advanced and interconnected, the need for robust security measures against potential sabotage has never been more critical.
            </p>
            <p>
              This page aims to provide comprehensive information on railway sabotage prevention, helping both industry professionals and the general public understand the risks and contribute to the security of our railway networks.
            </p>
          </div>
          <div className="flex-1">
            <img src="/placeholder.svg" alt="Railway security" className="mx-auto object-cover w-full h-[300px] rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is Railway Sabotage?</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-6 w-6 text-blue-500" />
              Definition and Examples
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Railway sabotage refers to deliberate actions taken to damage, disrupt, or compromise railway infrastructure, equipment, or operations. These actions can range from physical attacks on tracks or signals to cyber-attacks on control systems.
            </p>
            <h3 className="font-semibold mb-2">Examples of sabotage incidents include:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tampering with track components or signaling equipment</li>
              <li>Placing obstructions on railway tracks</li>
              <li>Cyber-attacks on railway management systems</li>
              <li>Vandalism of railway property or vehicles</li>
              <li>Interference with communication systems</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Consequences of Sabotage</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-red-500" />
              Potential Impacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The consequences of railway sabotage can be severe and far-reaching, affecting not only the immediate safety of passengers and staff but also having broader economic and social impacts.
            </p>
            <h3 className="font-semibold mb-2">Potential consequences include:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Risk to human life and safety</li>
              <li>Significant economic losses due to service disruptions</li>
              <li>Damage to critical infrastructure</li>
              <li>Environmental hazards in case of derailments</li>
              <li>Loss of public confidence in railway transportation</li>
              <li>Increased security costs and insurance premiums</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Prevention Measures</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-green-500" />
              Safeguarding Our Railways
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Preventing railway sabotage requires a multi-faceted approach involving technology, human vigilance, and robust security protocols.
            </p>
            <h3 className="font-semibold mb-2">Key prevention measures include:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enhanced physical security measures (e.g., fencing, surveillance cameras)</li>
              <li>Regular security patrols along railway lines</li>
              <li>Implementation of advanced intrusion detection systems</li>
              <li>Cybersecurity measures to protect digital infrastructure</li>
              <li>Employee training on security awareness and emergency procedures</li>
              <li>Public awareness campaigns to encourage vigilance</li>
              <li>Collaboration with law enforcement and security agencies</li>
              <li>Regular risk assessments and security audits</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Reporting Suspicious Activities</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-purple-500" />
              How to Report
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Public vigilance plays a crucial role in preventing railway sabotage. If you observe any suspicious activities around railway infrastructure, it's important to report them immediately.
            </p>
            <h3 className="font-semibold mb-2">Reporting guidelines:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Do not confront suspicious individuals directly</li>
              <li>Note details such as descriptions of individuals, vehicles, or activities</li>
              <li>Contact railway security or local law enforcement immediately</li>
              <li>Use official reporting channels provided by railway companies</li>
            </ul>
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold mb-2">Emergency Contact Information:</p>
              <p>Railway Security Hotline: 1-800-123-4567</p>
              <p>Local Emergency Services: 911</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center mt-12">
        <h2 className="text-xl font-semibold mb-4">Additional Resources</h2>
        <div className="flex justify-center space-x-4 mb-8">
          <Button variant="outline">Railway Safety Guidelines</Button>
          <Button variant="outline">Security Best Practices</Button>
          <Button variant="outline">Emergency Procedures</Button>
        </div>
        <p className="text-muted-foreground">
          For more information, contact us at: info@railwaysecurity.com
        </p>
      </footer>
    </div>
  );
};

export default RailwaySabotagePrevention;