
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Send } from "lucide-react";
import { toast } from "sonner";

const PostProject = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    budget: "",
    deadline: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.description || !formData.category) {
      toast.error("Please fill in required fields");
      return;
    }
    
    toast.success("Project posted successfully!");
    navigate('/marketplace');
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
            onClick={() => navigate('/marketplace')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold">Post a Project</h1>
        </div>
      </div>

      <div className="p-6">
        <Card className="marketing-card">
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Project Title *</Label>
              <Input
                id="title"
                placeholder="Enter project title"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Describe your need *</Label>
              <Textarea
                id="description"
                placeholder="Provide detailed description of your project requirements"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Service Category *</Label>
              <Select onValueChange={(value) => handleInputChange('category', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select service category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="seo">SEO & Digital Marketing</SelectItem>
                  <SelectItem value="web-design">Web Design & Development</SelectItem>
                  <SelectItem value="content">Content Creation</SelectItem>
                  <SelectItem value="social-media">Social Media Marketing</SelectItem>
                  <SelectItem value="advertising">Advertising & PPC</SelectItem>
                  <SelectItem value="branding">Branding & Design</SelectItem>
                  <SelectItem value="consulting">Marketing Consulting</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range</Label>
              <Select onValueChange={(value) => handleInputChange('budget', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-5k">Under ₹5,000</SelectItem>
                  <SelectItem value="5k-10k">₹5,000 - ₹10,000</SelectItem>
                  <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                  <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                  <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                  <SelectItem value="above-100k">Above ₹1,00,000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="deadline">Desired Deadline</Label>
              <Input
                id="deadline"
                type="date"
                value={formData.deadline}
                onChange={(e) => handleInputChange('deadline', e.target.value)}
              />
            </div>

            <div className="flex gap-3 pt-6">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => navigate('/marketplace')}
              >
                Cancel
              </Button>
              <Button 
                className="flex-1 marketing-gradient text-white"
                onClick={handleSubmit}
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Project
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostProject;
