/**
 * MediLife Care design reminder: Clinical Horizon — preserve a single, consistent care pathway and an obvious route out of every page.
 */
import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteLayout from "./components/SiteLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function Router() {
  return <SiteLayout><Switch><Route path="/" component={Home}/><Route path="/about" component={About}/><Route path="/services" component={Services}/><Route path="/doctors" component={Doctors}/><Route path="/appointment" component={Appointment}/><Route path="/contact" component={Contact}/><Route component={NotFound}/></Switch></SiteLayout>;
}

export default function App() { return <ErrorBoundary><TooltipProvider><Toaster/><Router/></TooltipProvider></ErrorBoundary>; }
