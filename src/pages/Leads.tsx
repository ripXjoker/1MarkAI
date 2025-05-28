
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  ArrowLeft,
  Search,
  Plus,
  Filter,
  Users
} from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";

const Leads = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const leads = [
    {
      id: 1,
      name: "Sarah Anderson",
      email: "sarah.anderson@email.com",
      phone: "+1 234-567-8901",
      company: "Tech Solutions Inc",
      status: "New",
      source: "Website Form",
      date: "April 23, 2024"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@company.com",
      phone: "+1 234-567-8902",
      company: "Digital Marketing Co",
      status: "Contacted",
      source: "LinkedIn",
      date: "April 22, 2024"
    },
    {
      id: 3,
      name: "Emma Patel",
      email: "emma.patel@startup.com",
      phone: "+1 234-567-8903",
      company: "StartupXYZ",
      status: "New",
      source: "Referral",
      date: "April 20, 2024"
    },
    {
      id: 4,
      name: "David Brown",
      email: "david.brown@business.com",
      phone: "+1 234-567-8904",
      company: "Brown Enterprises",
      status: "Qualified",
      source: "Website Form",
      date: "April 19, 2024"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-800';
      case 'Contacted':
        return 'bg-yellow-100 text-yellow-800';
      case 'Qualified':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredLeads = leads.filter(lead =>
    lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lead.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="marketing-gradient text-white p-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/20"
              onClick={() => navigate('/dashboard')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-semibold">Leads</h1>
          </div>
          <Button 
            size="icon" 
            className="bg-white/20 hover:bg-white/30 text-white border-0"
            onClick={() => navigate('/leads/add')}
          >
            <Plus className="w-5 h-5" />
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search leads..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-100"
          />
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Filter and Sort */}
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            Sort by Date
          </Button>
          <Button variant="outline" size="sm">
            Status
          </Button>
        </div>

        {/* Leads List */}
        {filteredLeads.length > 0 ? (
          <div className="space-y-4">
            {filteredLeads.map((lead) => (
              <Card 
                key={lead.id} 
                className="marketing-card cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate(`/leads/${lead.id}`)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback>
                          {lead.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{lead.name}</h3>
                        <p className="text-sm text-gray-600">{lead.email}</p>
                        <p className="text-sm text-gray-600">{lead.phone}</p>
                        <p className="text-xs text-gray-500 mt-1">{lead.company}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                        {lead.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-2">{lead.date}</p>
                      <p className="text-xs text-gray-400">{lead.source}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="marketing-card">
            <CardContent className="p-8 text-center">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No leads yet</h3>
              <p className="text-gray-500 mb-6">Start by adding your first lead</p>
              <Button 
                className="marketing-gradient text-white"
                onClick={() => navigate('/leads/add')}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Lead
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      <BottomNavigation currentPage="leads" />
    </div>
  );
};

export default Leads;
