
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  FileText,
  Image,
  Video,
  Mail,
  Edit,
  Megaphone,
  FileMinusIcon,
  Lightbulb
} from "lucide-react";

const CreateContent = () => {
  const navigate = useNavigate();

  const contentTypes = [
    {
      icon: FileText,
      title: "AI Social Post",
      description: "Generate social media smart captions",
      credits: "2.0",
      path: "/content/social",
      color: "bg-blue-500"
    },
    {
      icon: Image,
      title: "AI Image",
      description: "Generate smart images",
      credits: "5.0",
      path: "/content/image",
      color: "bg-purple-500"
    },
    {
      icon: Video,
      title: "AI Video",
      description: "Deliver boost on brand",
      credits: "10.0",
      path: "/content/video",
      color: "bg-red-500"
    },
    {
      icon: Mail,
      title: "AI Email Draft",
      description: "Ideas engage faster",
      credits: "3.0",
      path: "/content/email",
      color: "bg-green-500"
    },
    {
      icon: Edit,
      title: "AI Blog Post",
      description: "Tweets and blog intelligyn",
      credits: "5.0",
      path: "/content/blog",
      color: "bg-orange-500"
    },
    {
      icon: Megaphone,
      title: "AI Ad Copy",
      description: "Petition de social poster",
      credits: "3.0",
      path: "/content/ad",
      color: "bg-pink-500"
    },
    {
      icon: FileMinusIcon,
      title: "Summarize Text",
      description: "Shorten diff st",
      credits: "1.0",
      path: "/content/summarize",
      color: "bg-teal-500"
    },
    {
      icon: Lightbulb,
      title: "Title Idea",
      description: "Share shrt att",
      credits: "2.0",
      path: "/content/titles",
      color: "bg-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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
          <h1 className="text-xl font-semibold">Create Content</h1>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Available Credits</p>
              <p className="text-2xl font-bold text-white">1,085</p>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-white/20"
              onClick={() => navigate('/settings')}
            >
              Buy Credits
            </Button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          {contentTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <Card 
                key={index} 
                className="marketing-card cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate(type.path)}
              >
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{type.title}</h3>
                  <p className="text-xs text-gray-600 mb-3">{type.description}</p>
                  <div className="text-xs text-blue-600 font-medium">
                    {type.credits} Credits
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Content */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Recent Content</h2>
          <div className="space-y-3">
            {[
              { type: "Social Post", title: "Morning Coffee Promotion", date: "2 hours ago" },
              { type: "Image", title: "Cafe Interior Design", date: "1 day ago" },
              { type: "Blog Post", title: "Benefits of Fresh Coffee", date: "3 days ago" }
            ].map((item, index) => (
              <Card key={index} className="marketing-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.type} • {item.date}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContent;
