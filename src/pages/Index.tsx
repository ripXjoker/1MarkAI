
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, User, Settings, Bell } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="marketing-gradient text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
            MP
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Marketing Pro</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manage your marketing activities, track leads, and grow your business with AI-powered tools
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="marketing-card">
            <CardContent className="p-6 text-center">
              <User className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Lead Management</h3>
              <p className="text-gray-600">Track and manage leads efficiently</p>
            </CardContent>
          </Card>
          
          <Card className="marketing-card">
            <CardContent className="p-6 text-center">
              <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI Content Creation</h3>
              <p className="text-gray-600">Generate smart marketing content</p>
            </CardContent>
          </Card>
          
          <Card className="marketing-card">
            <CardContent className="p-6 text-center">
              <Bell className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Campaign Analytics</h3>
              <p className="text-gray-600">Monitor performance and optimize</p>
            </CardContent>
          </Card>
        </div>

        {/* Features List */}
        <Card className="marketing-card mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8">Everything you need to succeed</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {[
                  "Lead tracking and management",
                  "AI-powered content creation",
                  "Social media scheduling",
                  "SEO keyword research"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "Google Business Profile management",
                  "Vendor marketplace",
                  "Analytics and reporting",
                  "Multi-platform publishing"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="marketing-gradient text-white px-8 py-3 text-lg"
            onClick={() => navigate('/dashboard')}
          >
            Get Started
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • Start managing your marketing today
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
