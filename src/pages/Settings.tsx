
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  ArrowLeft,
  User,
  CreditCard,
  Bell,
  FileText,
  LogOut,
  ChevronRight,
  Shield,
  Globe,
  Moon,
  Trash,
  Plus
} from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";

const Settings = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState({
    newLeads: true,
    postSuccessful: true,
    campaignUpdates: false,
    marketplaceMessages: true,
    offersUpdates: true
  });

  const creditPackages = [
    { credits: 500, price: "₹500", popular: false },
    { credits: 1100, price: "₹1000", popular: true },
    { credits: 2500, price: "₹2000", popular: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="marketing-gradient text-white p-6 rounded-b-3xl">
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/20"
            onClick={() => navigate('/dashboard')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold">Settings</h1>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16 border-2 border-white/20">
            <AvatarFallback className="bg-white/20 text-white text-lg">JD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">Jane Doe</h2>
            <p className="text-blue-100">jane.doe@example.com</p>
            <p className="text-blue-100 text-sm">1,085 Credits Available</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Account Settings */}
        <Card className="marketing-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <User className="w-5 h-5" />
              Account
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Profile</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <span>Change Password</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <span>Linked Social Accounts</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        {/* Billing */}
        <Card className="marketing-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Billing
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Current Credit Balance</p>
                <p className="text-2xl font-bold text-blue-600">1,085 Credits</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <p className="font-medium">Buy Credits</p>
              {creditPackages.map((pkg, index) => (
                <div key={index} className={`relative p-4 border-2 rounded-lg ${
                  pkg.popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}>
                  {pkg.popular && (
                    <span className="absolute -top-2 left-4 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                      Popular
                    </span>
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{pkg.credits} Credits</p>
                      <p className="text-gray-600">{pkg.price}</p>
                    </div>
                    <Button size="sm" className="marketing-gradient text-white">
                      <Plus className="w-4 h-4 mr-1" />
                      Buy
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-2 border-t">
              <div className="flex items-center justify-between">
                <span>Transaction History</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="marketing-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { key: 'newLeads', label: 'New Leads' },
              { key: 'postSuccessful', label: 'Post Successful' },
              { key: 'campaignUpdates', label: 'Campaign Updates' },
              { key: 'marketplaceMessages', label: 'Marketplace Messages' },
              { key: 'offersUpdates', label: 'Offers & Updates' }
            ].map((item) => (
              <div key={item.key} className="flex items-center justify-between">
                <span>{item.label}</span>
                <Switch
                  checked={notifications[item.key as keyof typeof notifications]}
                  onCheckedChange={(checked) => 
                    setNotifications(prev => ({ ...prev, [item.key]: checked }))
                  }
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card className="marketing-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Language Preference</span>
              <span className="text-gray-500">English</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Appearance</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Light</span>
                <Switch />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Clear Cache</span>
              <Button variant="outline" size="sm">
                <Trash className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Legal */}
        <Card className="marketing-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Legal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span>Privacy Policy</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        {/* Submit Project */}
        <Button 
          className="w-full marketing-gradient text-white py-3"
          onClick={() => navigate('/marketplace/post')}
        >
          Submit Project
        </Button>

        {/* Logout */}
        <Button 
          variant="outline" 
          className="w-full py-3 text-red-600 border-red-200 hover:bg-red-50"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </Button>
      </div>

      <BottomNavigation currentPage="settings" />
    </div>
  );
};

export default Settings;
