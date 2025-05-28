
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  Star,
  Trash,
  Edit
} from "lucide-react";

const LeadDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock lead data - in real app, fetch based on ID
  const lead = {
    id: 1,
    name: "Sarah Anderson",
    email: "sarah.anderson@email.com",
    phone: "+1 234-567-8901",
    company: "Tech Solutions Inc",
    position: "Marketing Director",
    status: "New",
    source: "Website Form",
    date: "April 23, 2024",
    location: "New York, NY",
    notes: "Interested in social media marketing services. Budget range: $5,000-$10,000/month",
    interactions: [
      { date: "April 23, 2024", type: "Form Submission", note: "Submitted contact form on website" },
      { date: "April 22, 2024", type: "Email Sent", note: "Welcome email sent automatically" }
    ]
  };

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="marketing-gradient text-white p-6 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-white/20"
              onClick={() => navigate('/leads')}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-semibold">Lead Details</h1>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/20"
          >
            <Edit className="w-5 h-5" />
          </Button>
        </div>

        {/* Lead Info */}
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16 border-2 border-white/20">
            <AvatarFallback className="bg-white/20 text-white text-lg">
              {lead.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{lead.name}</h2>
            <p className="text-blue-100">{lead.position}</p>
            <p className="text-blue-100">{lead.company}</p>
            <Badge className={`mt-2 ${getStatusColor(lead.status)}`}>
              {lead.status}
            </Badge>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Contact Information */}
        <Card className="marketing-card">
          <CardHeader>
            <CardTitle className="text-lg">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium">{lead.email}</p>
                <p className="text-sm text-gray-500">Email</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium">{lead.phone}</p>
                <p className="text-sm text-gray-500">Phone</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium">{lead.location}</p>
                <p className="text-sm text-gray-500">Location</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-500" />
              <div>
                <p className="font-medium">{lead.date}</p>
                <p className="text-sm text-gray-500">Added on</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="marketing-card">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button className="marketing-gradient text-white">
                <Phone className="w-4 h-4 mr-2" />
                Call
              </Button>
              <Button variant="outline">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notes */}
        <Card className="marketing-card">
          <CardHeader>
            <CardTitle className="text-lg">Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">{lead.notes}</p>
          </CardContent>
        </Card>

        {/* Interaction History */}
        <Card className="marketing-card">
          <CardHeader>
            <CardTitle className="text-lg">Interaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {lead.interactions.map((interaction, index) => (
                <div key={index} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{interaction.type}</p>
                      <p className="text-sm text-gray-500">{interaction.date}</p>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{interaction.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Status Actions */}
        <Card className="marketing-card">
          <CardHeader>
            <CardTitle className="text-lg">Lead Status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full marketing-gradient text-white">
              <Star className="w-4 h-4 mr-2" />
              Mark as Qualified
            </Button>
            <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50">
              <Trash className="w-4 h-4 mr-2" />
              Delete Lead
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeadDetail;
