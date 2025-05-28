
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Leads from "./pages/Leads";
import AddLead from "./pages/AddLead";
import LeadDetail from "./pages/LeadDetail";
import Marketplace from "./pages/Marketplace";
import PostProject from "./pages/PostProject";
import Campaigns from "./pages/Campaigns";
import CreateContent from "./pages/CreateContent";
import CreateSocialPost from "./pages/CreateSocialPost";
import GenerateImage from "./pages/GenerateImage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/leads/add" element={<AddLead />} />
          <Route path="/leads/:id" element={<LeadDetail />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace/post" element={<PostProject />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/content" element={<CreateContent />} />
          <Route path="/content/social" element={<CreateSocialPost />} />
          <Route path="/content/image" element={<GenerateImage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
