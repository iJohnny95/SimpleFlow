import { useState } from "react";
import { BarChart2, Cpu, LineChart, Zap, Menu, X } from "lucide-react"; // Removed unused imports: ArrowRight, Database
import Link from "next/link";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-500">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gray-900 shadow-md transition-colors duration-500 px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link className="flex items-center" href="#">
          <Zap className="h-6 w-6 text-teal-400" />
          <span className="ml-2 text-2xl font-bold text-white">SimpleFlow</span>
        </Link>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center">
          <nav className="flex gap-4 sm:gap-6">
            <Link 
              className="text-sm font-medium text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300" 
              href="#services">
              Services
            </Link>
            <Link 
              className="text-sm font-medium text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300" 
              href="#pricing">
              Pricing
            </Link>
            <Link 
              className="text-sm font-medium text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300" 
              href="#testimonials">
              Testimonials
            </Link>
            <Link 
              className="text-sm font-bold bg-teal-400 hover:bg-teal-500 text-gray-900 px-4 py-2 rounded-lg transition-all duration-300"
              href="#contact-us">
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Menu (Slide-in from the Right Below Navbar) */}
      <div
        className={`fixed top-16 right-0 w-64 bg-gray-900 text-white transition-transform transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } duration-300 z-40 sm:hidden`}>
        <nav className="flex flex-col p-4 space-y-4">
          <Link 
            className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300" 
            href="#services" 
            onClick={toggleMenu}>
            Services
          </Link>
          <Link 
            className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300" 
            href="#pricing" 
            onClick={toggleMenu}>
            Pricing
          </Link>
          <Link 
            className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300" 
            href="#testimonials" 
            onClick={toggleMenu}>
            Testimonials
          </Link>
          <Link 
            className="text-sm font-bold bg-teal-400 hover:bg-teal-500 text-gray-900 px-4 py-2 rounded-lg transition-all duration-300" 
            href="#contact-us" 
            onClick={toggleMenu}>
            Contact Us
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 pt-16">
        {/* Features Section */}
        <section id="features" className="w-full py-16 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-pulse">
                  Automate Your Success with SimpleFlow
                </h1>
                <p className="mx-auto max-w-[700px] md:text-xl lg:text-2xl">
                  Experience the power of automation, real-time data analytics, and interactive dashboards designed to grow your business.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="#contact-us">
                  <button className="px-6 py-3 rounded-lg bg-teal-400 hover:bg-teal-500 text-gray-900 font-bold text-lg transition-all duration-300 shadow-md hover:shadow-lg">
                    Contact Us
                  </button>
                </Link>
                <Link href="#services">
                  <button className="px-6 py-3 rounded-lg border border-white hover:bg-white hover:text-gray-900 font-bold text-lg transition-all duration-300 shadow-md hover:shadow-lg">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-16 md:py-24 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900 dark:text-gray-100">
              Our Premium Services
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-center mb-12">
              At SimpleFlow, we understand the challenges that businesses face—managing repetitive tasks, processing vast amounts of data, and making timely decisions. Our smart automation tools take the burden of manual tasks off your shoulders, allowing you to focus on growing your business.
            </p>            
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 pt-8">
              <div className="flex flex-col items-center text-center">
                <Cpu className="h-12 w-12 mb-4 text-indigo-500 dark:text-teal-400 animate-bounce" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Automation</h3>
                <p className="text-gray-700 dark:text-gray-400">Streamline repetitive tasks with our intelligent automation solutions.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarChart2 className="h-12 w-12 mb-4 text-indigo-500 dark:text-teal-400 animate-spin" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Reporting</h3>
                <p className="text-gray-700 dark:text-gray-400">Generate dynamic reports that help you make data-driven decisions.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <LineChart className="h-12 w-12 mb-4 text-indigo-500 dark:text-teal-400 animate-pulse" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Dashboards</h3>
                <p className="text-gray-700 dark:text-gray-400">Visualize your data with fully customizable and interactive dashboards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-16 md:py-24 bg-indigo-500 dark:bg-gray-800 text-white dark:text-gray-300 transition-colors duration-500">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Pricing Plans
            </h2>
            <p className="text-center mb-8 mx-auto max-w-2xl text-lg">
              We offer flexible pricing plans tailored to your business needs. Every project is customized to ensure the best solution for you.
            </p>
            <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
              
              {/* Basic Plan */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:text-white flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Basic Plan</h3>
                  <p className="text-lg mb-4 text-gray-700 dark:text-gray-400">Perfect for startups looking to automate essential business processes.</p>
                  <p className="text-4xl font-bold mb-4">€500+</p>
                  <ul className="text-left mb-6 space-y-2">
                    <li>✔ Basic automation setup</li>
                    <li>✔ Dashboard integration</li>
                    <li>✔ Reporting tools</li>
                  </ul>
                </div>
                <Link href="#get-started">
                  <button className="w-full bg-teal-400 hover:bg-teal-500 text-gray-900 font-bold rounded-lg py-3 transition-all duration-300 shadow-md hover:shadow-lg">
                    Get Started
                  </button>
                </Link>
              </div>

              {/* Pro Plan */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:text-white flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Pro Plan</h3>
                  <p className="text-lg mb-4 text-gray-700 dark:text-gray-400">For businesses that need advanced automation and data-driven insights.</p>
                  <p className="text-4xl font-bold mb-4">€1500+</p>
                  <ul className="text-left mb-6 space-y-2">
                    <li>✔ Advanced automation tools</li>
                    <li>✔ Customizable dashboards</li>
                    <li>✔ In-depth analytics and reporting</li>
                    <li>✔ Ongoing support</li>
                  </ul>
                </div>
                <Link href="#get-started">
                  <button className="w-full bg-teal-400 hover:bg-teal-500 text-gray-900 font-bold rounded-lg py-3 transition-all duration-300 shadow-md hover:shadow-lg">
                    Get Started
                  </button>
                </Link>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:text-white flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Enterprise Plan</h3>
                  <p className="text-lg mb-4 text-gray-700 dark:text-gray-400">Comprehensive automation solutions for large-scale businesses with dedicated support.</p>
                  <p className="text-4xl font-bold mb-4">€5000+</p>
                  <ul className="text-left mb-6 space-y-2">
                    <li>✔ Full-scale automation services</li>
                    <li>✔ Enterprise-level dashboards</li>
                    <li>✔ 24/7 dedicated support</li>
                    <li>✔ Tailored data solutions</li>
                  </ul>
                </div>
                <Link href="#get-started">
                  <button className="w-full bg-teal-400 hover:bg-teal-500 text-gray-900 font-bold rounded-lg py-3 transition-all duration-300 shadow-md hover:shadow-lg">
                    Get Started
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-center mb-12 text-gray-900 dark:text-white">
              What Our Clients Are Saying
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-16 text-gray-600 dark:text-gray-400">
              Hear from our satisfied clients who have experienced incredible transformations in their businesses with SimpleFlow&apos;s innovative solutions.
            </p>

            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 animate-fade-in">
              {/* Testimonial 1 */}
              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center items-center mb-6">
                  <div className="bg-teal-500 rounded-full h-16 w-16 flex items-center justify-center shadow-lg">
                    <Zap className="text-white h-8 w-8" />
                  </div>
                </div>
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
                  &quot;O FluxoSimples revolucionou o nosso fluxo de trabalho. Aumentámos a produtividade em 30% desde que implementámos as suas soluções.&quot;
                </p>
                <p className="font-bold text-gray-900 dark:text-white">Jane Doe</p>
                <p className="text-sm text-teal-500">CEO, TechCorp</p>
              </div>

              {/* Testimonial 2 */}
              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center items-center mb-6">
                  <div className="bg-indigo-500 rounded-full h-16 w-16 flex items-center justify-center shadow-lg">
                    <BarChart2 className="text-white h-8 w-8" />
                  </div>
                </div>
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
                  &quot;The insights we&apos;ve gained from SimpleFlow&apos;s dashboards have been invaluable. It&apos;s changed the way we make decisions.&quot;
                </p>
                <p className="font-bold text-gray-900 dark:text-white">John Smith</p>
                <p className="text-sm text-indigo-500">CTO, DataDrive</p>
              </div>

              {/* Testimonial 3 */}
              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center items-center mb-6">
                  <div className="bg-purple-500 rounded-full h-16 w-16 flex items-center justify-center shadow-lg">
                    <Cpu className="text-white h-8 w-8" />
                  </div>
                </div>
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6">
                  &quot;SimpleFlow&apos;s automation tools have saved us countless hours. Our team can now focus on strategic initiatives.&quot;
                </p>
                <p className="font-bold text-gray-900 dark:text-white">Emily Brown</p>
                <p className="text-sm text-purple-500">COO, InnovateCo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section
          id="contact-us"
          className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-teal-500 to-blue-600 dark:from-gray-900 dark:to-gray-800 text-white dark:text-gray-300 transition-colors duration-500"
        >
          <div className="container mx-auto max-w-5xl px-4 md:px-6">
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Contact Us with SimpleFlow
              </h2>
              <p className="mx-auto max-w-[900px] md:text-xl lg:text-2xl leading-relaxed">
                Ready to automate your business, optimize workflows, and unlock growth potential? Fill out the form below and we’ll guide you through the next steps.
              </p>
            </div>

            <div className="mt-12 max-w-4xl mx-auto bg-white dark:bg-gray-900 p-10 rounded-lg shadow-xl">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Company Name (optional)"
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone (optional)"
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                  />
                  <input
                    type="text"
                    placeholder="Project Budget (optional)"
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                  />
                  <input
                    type="date"
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                  />
                </div>
                <textarea
                  placeholder="Tell us about your business needs and how we can assist you."
                  rows={5}
                  className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                  required
                />
                <div className="text-center">
                  <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    Get in Touch
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Date Picker Styling */}
        <style jsx>{`
          /* Hide the default calendar icon */
          input[type="date"]::-webkit-calendar-picker-indicator {
            background: none;
            color: white;
            opacity: 1;
            display: block;
            font-size: 18px;
          }

          /* Add custom styling for the date input field */
          input[type="date"] {
            position: relative;
            background-color: #2d3748;
            color: white;
            padding-right: 40px;
            width: 100%; /* Ensure full width on mobile */
            padding: 0.75rem; /* Add padding to match other inputs */
            box-sizing: border-box; /* Include padding in the width */
          }

          /* Add custom icon */
          input[type="date"]::before {
            content: '📅';
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            color: white;
            pointer-events: none;
          }

          /* Remove default calendar icon */
          input[type="date"]::-webkit-inner-spin-button,
          input[type="date"]::-webkit-clear-button {
            display: none;
          }
        `}</style>

      </main>

      {/* Footer */}
      <footer className="py-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-400 transition-colors duration-500">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs">© 2024 SimpleFlow. All rights reserved.</p>
          <nav className="mt-4 sm:mt-0 flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4 text-gray-900 dark:text-gray-400" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 text-gray-900 dark:text-gray-400" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
