
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  ArrowLeft,
  Search,
  Filter,
  Star,
  Plus,
  Eye,
  MessageSquare
} from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";

const Marketplace = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const vendors = [
    {
      id: 1,
      name: "PromoVision",
      logo: "P",
      rating: 4.5,
      reviews: 128,
      services: ["Advertising", "Marketing"],
      description: "Professional advertising and marketing solutions",
      logoColor: "bg-purple-500"
    },
    {
      id: 2,
      name: "Rank Experts",
      logo: "R",
      rating: 4.8,
      reviews: 89,
      services: ["SEO", "Keyword Research"],
      description: "Expert SEO and keyword optimization services",
      logoColor: "bg-green-500"
    },
    {
      id: 3,
      name: "WebCraft Studio",
      logo: "W",
      rating: 4.3,
      reviews: 156,
      services: ["Web Design", "Development"],
      description: "Custom web design and development solutions",
      logoColor: "bg-blue-500"
    }
  ];

  const myProjects = [
    {
      id: 1,
      title: "Need SEO Audit",
      description: "Looking for comprehensive SEO audit for e-commerce website",
      category: "SEO",
      budget: "₹10,000 - ₹25,000",
      deadline: "2 weeks",
      bids: 8,
      status: "Active"
    }
  ];

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
            <h1 className="text-xl font-semibold">Marketplace</h1>
          </div>
          <Button 
            size="icon" 
            className="bg-white/20 hover:bg-white/30 text-white border-0"
            onClick={() => navigate('/marketplace/post')}
          >
            <Plus className="w-5 h-5" />
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search vendors or projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-blue-100"
          />
        </div>
      </div>

      <div className="p-6">
        <Tabs defaultValue="vendors" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="vendors">Find Vendors</TabsTrigger>
            <TabsTrigger value="projects">My Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="vendors" className="space-y-4">
            {/* Filter Bar */}
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                All Services
              </Button>
              <Button variant="outline" size="sm">
                Rating
              </Button>
            </div>

            {/* Vendors List */}
            <div className="space-y-4">
              {vendors.map((vendor) => (
                <Card key={vendor.id} className="marketing-card">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <Avatar className={`w-12 h-12 ${vendor.logoColor}`}>
                        <AvatarFallback className="text-white font-bold">
                          {vendor.logo}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">{vendor.name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium">{vendor.rating}</span>
                              </div>
                              <span className="text-sm text-gray-500">({vendor.reviews} reviews)</span>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            View Profile
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">{vendor.description}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {vendor.services.map((service, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-4">
            {myProjects.length > 0 ? (
              <div className="space-y-4">
                {myProjects.map((project) => (
                  <Card key={project.id} className="marketing-card">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-gray-900">{project.title}</h3>
                            <Badge 
                              variant={project.status === 'Active' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {project.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span>Budget: {project.budget}</span>
                              <span>Deadline: {project.deadline}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MessageSquare className="w-4 h-4 text-blue-600" />
                              <span className="text-sm text-blue-600 font-medium">
                                {project.bids} active bids
                              </span>
                            </div>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Button 
                  className="w-full marketing-gradient text-white py-3"
                  onClick={() => navigate('/marketplace/post')}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Post New Project
                </Button>
              </div>
            ) : (
              <Card className="marketing-card">
                <CardContent className="p-8 text-center">
                  <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">No projects yet</h3>
                  <p className="text-gray-500 mb-6">Post your first project to find vendors</p>
                  <Button 
                    className="marketing-gradient text-white"
                    onClick={() => navigate('/marketplace/post')}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Post Project
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>

      <BottomNavigation currentPage="marketplace" />
    </div>
  );
};

export default Marketplace;
