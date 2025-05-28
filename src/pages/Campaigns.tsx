
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  TrendingUp,
  Eye,
  MousePointer,
  Phone,
  Star,
  Plus,
  BarChart3
} from "lucide-react";
import BottomNavigation from "@/components/BottomNavigation";

const Campaigns = () => {
  const navigate = useNavigate();

  const gbpMetrics = {
    views: 1248,
    clicks: 89,
    calls: 23,
    rating: 4.7,
    totalReviews: 156
  };

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
          <h1 className="text-xl font-semibold">Campaigns</h1>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
            <TrendingUp className="w-6 h-6 text-blue-200 mb-2" />
            <p className="text-2xl font-bold text-white">8</p>
            <p className="text-blue-100 text-sm">Active Campaigns</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
            <BarChart3 className="w-6 h-6 text-green-200 mb-2" />
            <p className="text-2xl font-bold text-white">12.5K</p>
            <p className="text-blue-100 text-sm">Total Reach</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
            <Star className="w-6 h-6 text-yellow-200 mb-2" />
            <p className="text-2xl font-bold text-white">4.7</p>
            <p className="text-blue-100 text-sm">Avg Rating</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <Tabs defaultValue="local" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="local">Local</TabsTrigger>
            <TabsTrigger value="social">Social & SEO</TabsTrigger>
          </TabsList>

          <TabsContent value="local" className="space-y-6">
            {/* Google Business Profile Dashboard */}
            <Card className="marketing-card">
              <CardHeader>
                <CardTitle className="text-lg">Google Business Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Eye className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-600">{gbpMetrics.views.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Views</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <MousePointer className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-600">{gbpMetrics.clicks}</p>
                    <p className="text-sm text-gray-600">Clicks</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Phone className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-orange-600">{gbpMetrics.calls}</p>
                    <p className="text-sm text-gray-600">Calls</p>
                  </div>
                </div>

                {/* Rating Display */}
                <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                  <div>
                    <p className="text-lg font-semibold">Average Rating</p>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`w-5 h-5 ${
                              star <= Math.floor(gbpMetrics.rating) 
                                ? 'fill-yellow-400 text-yellow-400' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-lg font-bold">{gbpMetrics.rating}</span>
                    </div>
                    <p className="text-sm text-gray-600">{gbpMetrics.totalReviews} total reviews</p>
                  </div>
                </div>

                {/* Business Description */}
                <div className="space-y-3">
                  <h3 className="font-semibold">Business Description</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A modern café in the heart of Hyderabad serving freshly brewed coffee, 
                    artisanal pastries, and light meals. Perfect spot for business meetings, 
                    study sessions, or casual hangouts with friends.
                  </p>
                  <Button variant="outline" size="sm">
                    Generate/Improve Description
                  </Button>
                </div>

                {/* Connection Status */}
                <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                  <p className="text-gray-600 mb-3">Connect your Google Business Profile for real-time insights</p>
                  <Button className="marketing-gradient text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Connect Google Business Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="social" className="space-y-6">
            {/* Social Media Posts */}
            <Card className="marketing-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg">Recent Posts</CardTitle>
                <Button 
                  size="sm" 
                  className="marketing-gradient text-white"
                  onClick={() => navigate('/content/social')}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create Post
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg"></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-600">
                          "Start your morning right with our freshly brewed coffee! ☕️ 
                          Perfect blend to fuel your productive day ahead. #MorningCoffee #FreshBrew"
                        </p>
                        <div className="flex items-center gap-4 mt-3">
                          <Badge variant="secondary" className="text-xs">Instagram</Badge>
                          <Badge variant="secondary" className="text-xs">Facebook</Badge>
                          <span className="text-xs text-gray-500">Posted 2 hours ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SEO Overview */}
            <Card className="marketing-card">
              <CardHeader>
                <CardTitle className="text-lg">SEO Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Website Authority Score</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                      <div className="w-14 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium">72/100</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="font-medium">SEO Suggestions</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Optimize page titles for target keywords</li>
                    <li>• Improve loading speed (currently 3.2s)</li>
                    <li>• Add meta descriptions to 5 pages</li>
                  </ul>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate('/content')}
                >
                  Generate Keywords - 1 Credit
                </Button>
              </CardContent>
            </Card>

            {/* Keyword Research */}
            <Card className="marketing-card">
              <CardHeader>
                <CardTitle className="text-lg">Top Keyword Research</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { keyword: "hyderabad cafe", volume: "1.8K", intent: "Commercial", cost: 1 },
                    { keyword: "coffee shop near me", volume: "3.2K", intent: "Local", cost: 1 },
                    { keyword: "best coffee hyderabad", volume: "950", intent: "Commercial", cost: 1 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{item.keyword}</p>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span>{item.volume} volume</span>
                          <span>{item.intent} intent</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        {item.cost} Credit
                      </Button>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-4 marketing-gradient text-white">
                  Add Keywords to Track
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <BottomNavigation currentPage="campaigns" />
    </div>
  );
};

export default Campaigns;
