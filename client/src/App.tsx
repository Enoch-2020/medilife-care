/** Northline Build Co. design reminder: Forge & Form — every page shares a route-oriented structural shell, clear navigation, and direct project pathways. */
import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteLayout from "./components/SiteLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";

function Router(){return <SiteLayout><Switch><Route path="/" component={Home}/><Route path="/about" component={About}/><Route path="/services" component={Services}/><Route path="/projects" component={Projects}/><Route path="/contact" component={Contact}/><Route path="/quote" component={Quote}/><Route component={NotFound}/></Switch></SiteLayout>}
export default function App(){return <ErrorBoundary><TooltipProvider><Toaster/><Router/></TooltipProvider></ErrorBoundary>}
