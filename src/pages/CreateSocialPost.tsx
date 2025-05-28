
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Sparkles } from "lucide-react";
import { toast } from "sonner";

const CreateSocialPost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    topic: "",
    goal: "",
    audience: "",
    tone: "",
    keywords: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = () => {
    if (!formData.topic || !formData.goal) {
      toast.error("Please fill in required fields");
      return;
    }
    
    toast.success("Content generated successfully!");
    // In a real app, this would navigate to a review/edit screen
    navigate('/content');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="marketing-gradient text-white p-6 rounded-b-3xl">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-white/20"
            onClick={() => navigate('/content')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold">Create Social Post</h1>
        </div>
      </div>

      <div className="p-6">
        <Card className="marketing-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              AI Social Post Generator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="topic">What is this post about? *</Label>
              <Textarea
                id="topic"
                placeholder="e.g., Promoting our new morning coffee blend with special discount"
                value={formData.topic}
                onChange={(e) => handleInputChange('topic', e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="goal">Goal of the post? *</Label>
              <Select onValueChange={(value) => handleInputChange('goal', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engagement">Increase Engagement</SelectItem>
                  <SelectItem value="awareness">Brand Awareness</SelectItem>
                  <SelectItem value="sales">Drive Sales</SelectItem>
                  <SelectItem value="traffic">Website Traffic</SelectItem>
                  <SelectItem value="leads">Generate Leads</SelectItem>
                  <SelectItem value="community">Build Community</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="audience">Target Audience</Label>
              <Select onValueChange={(value) => handleInputChange('audience', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select target audience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="young-professionals">Young Professionals</SelectItem>
                  <SelectItem value="students">Students</SelectItem>
                  <SelectItem value="business-owners">Business Owners</SelectItem>
                  <SelectItem value="coffee-enthusiasts">Coffee Enthusiasts</SelectItem>
                  <SelectItem value="local-community">Local Community</SelectItem>
                  <SelectItem value="general">General Audience</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tone">Tone of Voice</Label>
              <Select onValueChange={(value) => handleInputChange('tone', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select tone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="friendly">Friendly</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                  <SelectItem value="informative">Informative</SelectItem>
                  <SelectItem value="humorous">Humorous</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="keywords">Keywords to include</Label>
              <Input
                id="keywords"
                placeholder="e.g., coffee, fresh, morning, discount (comma separated)"
                value={formData.keywords}
                onChange={(e) => handleInputChange('keywords', e.target.value)}
              />
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-medium">Credits Required</p>
                  <p className="text-sm text-gray-500">This will use 2.0 credits</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Available</p>
                  <p className="font-bold text-blue-600">1,085 Credits</p>
                </div>
              </div>
              
              <Button 
                className="w-full marketing-gradient text-white py-3"
                onClick={handleGenerate}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                GENERATE CONTENT - 2.0
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateSocialPost;
