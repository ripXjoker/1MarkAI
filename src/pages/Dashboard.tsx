
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  User, 
  Settings, 
  Bell, 
  Home, 
  Users, 
  BarChart3, 
  Briefcase,
  HelpCircle,
  FileText,
  LogOut,
  Plus,
  TrendingUp,
  Star
} from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("dashboard");

  const stats = [
    { label: "Total Leads", value: "127", change: "+12%", color: "text-blue-600" },
    { label: "Active Campaigns", value: "8", change: "+3", color: "text-green-600" },
    { label: "Credits", value: "1,085", change: "Available", color: "text-purple-600" },
    { label: "This Month", value: "₹45K", change: "+23%", color: "text-orange-600" }
  ];

  const recentLeads = [
    { name: "Sarah Anderson", email: "sarah@example.com", status: "New", time: "2h ago" },
    { name: "Michael Chen", email: "michael@company.com", status: "Contacted", time: "5h ago" },
    { name: "Emma Patel", email: "emma@startup.com", status: "New", time: "1d ago" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="marketing-gradient text-white p-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12 border-2 border-white/20">
              <AvatarFallback className="bg-white/20 text-white">JD</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">Jane Doe</h2>
              <p className="text-blue-100">jane.doe@example.com</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/20"
              onClick={() => navigate('/settings')}
            >
              <Bell className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/20"
              onClick={() => navigate('/settings')}
            >
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-100 text-xs">{stat.change}</p>
                  <TrendingUp className="w-4 h-4 text-green-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Quick Actions */}
        <Card className="marketing-card">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button 
                className="h-20 flex-col gap-2"
                variant="outline"
                onClick={() => navigate('/leads/add')}
              >
                <Plus className="w-6 h-6" />
                Add Lead
              </Button>
              <Button 
                className="h-20 flex-col gap-2"
                variant="outline"
                onClick={() => navigate('/content')}
              >
                <FileText className="w-6 h-6" />
                Create Content
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Leads */}
        <Card className="marketing-card">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Recent Leads</CardTitle>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/leads')}
            >
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLeads.map((lead, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>{lead.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{lead.name}</p>
                      <p className="text-sm text-gray-500">{lead.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      lead.status === 'New' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {lead.status}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">{lead.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Performance Overview */}
        <Card className="marketing-card">
          <CardHeader>
            <CardTitle className="text-lg">This Week's Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Lead Conversion</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="w-16 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">78%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Content Engagement</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="w-14 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">65%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Campaign Performance</span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-gray-200 rounded-full">
                    <div className="w-18 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium">82%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <BottomNavigation currentPage="dashboard" />
    </div>
  );
};

export default Dashboard;
