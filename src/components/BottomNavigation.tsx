
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Users, 
  BarChart3, 
  Briefcase,
  Settings 
} from "lucide-react";

interface BottomNavigationProps {
  currentPage: string;
}

const BottomNavigation = ({ currentPage }: BottomNavigationProps) => {
  const navigate = useNavigate();

  const navItems = [
    { id: "dashboard", icon: Home, label: "Dashboard", path: "/dashboard" },
    { id: "leads", icon: Users, label: "Leads", path: "/leads" },
    { id: "campaigns", icon: BarChart3, label: "Campaigns", path: "/campaigns" },
    { id: "marketplace", icon: Briefcase, label: "Marketplace", path: "/marketplace" },
    { id: "settings", icon: Settings, label: "Settings", path: "/settings" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 mobile-safe">
      <div className="flex justify-around items-center px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={`flex-col gap-1 h-auto py-2 px-3 ${
                isActive 
                  ? "text-blue-600 bg-blue-50" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => navigate(item.path)}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
