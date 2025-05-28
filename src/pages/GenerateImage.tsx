
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Sparkles, Upload, Image } from "lucide-react";
import { toast } from "sonner";

const GenerateImage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    description: "",
    style: "",
    styleDetail: ""
  });
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = async () => {
    if (!formData.description) {
      toast.error("Please describe the image you want");
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate image generation
    setTimeout(() => {
      setGeneratedImages([
        "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1559496417-e7f25cb247cd?w=400&h=400&fit=crop"
      ]);
      setIsGenerating(false);
      toast.success("Images generated successfully!");
    }, 3000);
  };

  const styleOptions = [
    { value: "photo", label: "Photo", description: "Realistic photography style" },
    { value: "illustration", label: "Illustration", description: "Artistic illustration style" },
    { value: "3d", label: "3D Render", description: "Three-dimensional rendered style" }
  ];

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
          <h1 className="text-xl font-semibold">Generate AI Image</h1>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {!generatedImages.length ? (
          <Card className="marketing-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="w-5 h-5 text-blue-600" />
                AI Image Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="description">Describe the image you want *</Label>
                <Textarea
                  id="description"
                  placeholder="e.g., A cozy coffee shop interior with warm lighting, wooden furniture, and people enjoying coffee"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label>Style</Label>
                <div className="grid grid-cols-3 gap-3">
                  {styleOptions.map((option) => (
                    <Button
                      key={option.value}
                      variant={formData.style === option.value ? "default" : "outline"}
                      className="h-auto p-3 flex-col"
                      onClick={() => handleInputChange('style', option.value)}
                    >
                      <span className="font-medium">{option.label}</span>
                      <span className="text-xs opacity-70">{option.description}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {formData.style && (
                <div className="space-y-2">
                  <Label htmlFor="styleDetail">Style Details</Label>
                  <Select onValueChange={(value) => handleInputChange('styleDetail', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select style variation" />
                    </SelectTrigger>
                    <SelectContent>
                      {formData.style === 'photo' && (
                        <>
                          <SelectItem value="portrait">Portrait</SelectItem>
                          <SelectItem value="landscape">Landscape</SelectItem>
                          <SelectItem value="macro">Macro</SelectItem>
                          <SelectItem value="street">Street Photography</SelectItem>
                        </>
                      )}
                      {formData.style === 'illustration' && (
                        <>
                          <SelectItem value="cartoon">Cartoon</SelectItem>
                          <SelectItem value="watercolor">Watercolor</SelectItem>
                          <SelectItem value="vector">Vector</SelectItem>
                          <SelectItem value="sketch">Sketch</SelectItem>
                        </>
                      )}
                      {formData.style === '3d' && (
                        <>
                          <SelectItem value="realistic">Realistic</SelectItem>
                          <SelectItem value="stylized">Stylized</SelectItem>
                          <SelectItem value="minimalist">Minimalist</SelectItem>
                          <SelectItem value="futuristic">Futuristic</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-medium">Credits Required</p>
                    <p className="text-sm text-gray-500">This will use 5.0 credits</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Available</p>
                    <p className="font-bold text-blue-600">1,085 Credits</p>
                  </div>
                </div>
                
                <Button 
                  className="w-full marketing-gradient text-white py-3 mb-3"
                  onClick={handleGenerate}
                  disabled={isGenerating}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  {isGenerating ? "Generating..." : "Generate Image - 5 Credits"}
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload & Enhance
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="marketing-card">
            <CardHeader>
              <CardTitle>Select Image</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Formal</Badge>
                <Badge variant="secondary">Friendly</Badge>
                <Badge variant="secondary">Modern</Badge>
                <Badge variant="secondary">Cozy</Badge>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {generatedImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-blue-500 transition-colors"
                  >
                    <img 
                      src={image} 
                      alt={`Generated image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={handleGenerate}
                >
                  Generate More
                </Button>
                <Button 
                  className="flex-1 marketing-gradient text-white"
                  onClick={() => {
                    toast.success("Image selected!");
                    navigate('/content');
                  }}
                >
                  Use Selected Image
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {isGenerating && (
          <Card className="marketing-card">
            <CardContent className="p-8 text-center">
              <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">Generating your images...</p>
              <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default GenerateImage;
