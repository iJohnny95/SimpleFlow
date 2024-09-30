import { useState } from "react";
import { BarChart2, Cpu, LineChart, Zap, Menu, X } from "lucide-react"; 
import Link from "next/link";
import React from "react"; // Import React to get the type definitions

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // Form submit handler function
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwxnE6c-rDCBGCfoOsVdDqIPfRGytyw0fvECc1Vh-YZ-2MVNssvcDaHeLOhUuaeSFnb/exec', {
        method: 'POST',
        body: formData, // Send FormData directly
      });

      // Log the full response for debugging
      console.log('Response:', response);
      console.log('Response status:', response.status);
      console.log('Response status text:', response.statusText);

      if (response.ok) {
        alert('We will be in contact soon.');
      } else {
        const errorText = await response.text(); // Get the error response
        alert(`There was a problem submitting the form: ${errorText}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
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
              Our Solutions
            </Link>
            <Link 
              className="text-sm font-medium text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300" 
              href="#pricing">
              Flexible Pricing
            </Link>
            <Link 
              className="text-sm font-medium text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300" 
              href="#testimonials">
              Success Stories
            </Link>
            <Link 
              className="text-sm font-bold bg-teal-400 hover:bg-teal-500 text-gray-900 px-4 py-2 rounded-lg transition-all duration-300"
              href="#contact-us">
              Get in Touch
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
            Our Solutions
          </Link>
          <Link 
            className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300" 
            href="#pricing" 
            onClick={toggleMenu}>
            Flexible Pricing
          </Link>
          <Link 
            className="text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300" 
            href="#testimonials" 
            onClick={toggleMenu}>
            Success Stories:
          </Link>
          <Link 
            className="text-sm font-bold bg-teal-400 hover:bg-teal-500 text-gray-900 px-4 py-2 rounded-lg transition-all duration-300" 
            href="#contact-us" 
            onClick={toggleMenu}>
            Get in Touch
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
                Simplify, Automate, and Scale Your Business with SimpleFlow
              </h1>
              <p className="mx-auto max-w-[700px] md:text-xl lg:text-2xl mt-6">
                Unlock the power of <strong>automation</strong> and <strong>real-time analytics</strong> to make smarter, faster business decisions. SimpleFlow's <strong>interactive dashboards</strong> put actionable insights at your fingertips, helping you grow your business with confidence.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full justify-center">
              <Link href="#contact-us" className="w-full sm:w-auto">
                <button className="w-full px-6 py-3 rounded-lg bg-teal-400 hover:bg-teal-500 text-gray-900 font-bold text-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  Start Automating Today
                </button>
              </Link>
              <Link href="#services" className="w-full sm:w-auto">
                <button className="w-full px-6 py-3 rounded-lg border border-white hover:bg-white hover:text-gray-900 font-bold text-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  Explore Our Solutions
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
              Unlock Growth with Our Smart Solutions
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-center mb-12">
              We know that managing <strong>repetitive tasks</strong>, processing <strong>large volumes of data</strong>, and making <strong>critical decisions</strong> in real-time can be overwhelming. SimpleFlow’s <strong>intelligent automation tools</strong> remove these burdens so you can focus on <strong>expanding your business</strong>.
            </p>
           
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 pt-8">
              <div className="flex flex-col items-center text-center">
                <Cpu className="h-12 w-12 mb-4 text-indigo-500 dark:text-teal-400 animate-bounce" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Automation</h3>
                <p className="text-gray-700 dark:text-gray-400">Let our tools handle the busy work while you focus on strategy and innovation.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarChart2 className="h-12 w-12 mb-4 text-indigo-500 dark:text-teal-400 animate-spin" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Reporting</h3>
                <p className="text-gray-700 dark:text-gray-400">Create actionable reports that guide data-driven growth in real-time.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <LineChart className="h-12 w-12 mb-4 text-indigo-500 dark:text-teal-400 animate-pulse" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Dashboards</h3>
                <p className="text-gray-700 dark:text-gray-400">Our dashboards turn complex data into clear insights, helping you take immediate action.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-16 md:py-24 bg-indigo-500 dark:bg-gray-800 text-white dark:text-gray-300 transition-colors duration-500">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Transparent and Flexible Pricing
            </h2>
            <p className="text-center mb-8 mx-auto max-w-2xl text-lg">
              At SimpleFlow, we offer <strong>scalable pricing plans</strong> designed to grow with your business. Whether you’re automating a few tasks or transforming your entire workflow, we provide flexible options that fit your needs and budget.
            </p>

            {/* Mobile: Horizontal Scroll */}
            <div className="flex flex-row space-x-4 overflow-x-auto snap-x snap-mandatory sm:hidden pb-4 scroll-smooth">
              {/* Pricing Card - Basic Plan */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg flex-shrink-0 w-72 snap-center transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:text-white group">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-white transition-colors duration-300">
                    Basic Plan
                  </h3>
                  <p className="text-lg mb-4 text-gray-700 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                    Ideal for startups looking to get started with automation. Includes key features to help streamline essential processes.
                  </p>
                  <p className="text-4xl font-bold mb-4 group-hover:text-white transition-colors duration-300">€500+</p>
                  <ul className="text-left mb-6 space-y-2">
                    <li><span className="text-[#2DD4BF] font-bold">✔</span> Basic automation setup</li>
                    <li><span className="text-[#2DD4BF] font-bold">✔</span> Dashboard integration</li>
                    <li><span className="text-[#2DD4BF] font-bold">✔</span> Simple reporting tools</li>
                  </ul>
                </div>
                <Link href="#contact-us">
                  <button className="w-full bg-teal-400 hover:bg-teal-500 text-gray-900 font-bold rounded-lg py-3 transition-all duration-300 shadow-md hover:shadow-lg">
                    Get Started
                  </button>
                </Link>
              </div>

              {/* Pricing Card - Pro Plan */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg flex-shrink-0 w-72 snap-center transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:text-white group">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-white transition-colors duration-300">
                    Pro Plan
                  </h3>
                  <p className="text-lg mb-4 text-gray-700 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                    Perfect for growing businesses that need advanced tools to optimize workflows and gain deeper insights.
                  </p>
                  <p className="text-4xl font-bold mb-4 group-hover:text-white transition-colors duration-300">€1500+</p>
                  <ul className="text-left mb-6 space-y-2">
                    <li><span className="text-[#2DD4BF] font-bold">✔</span> Advanced automation tools</li>
                    <li><span className="text-[#2DD4BF] font-bold">✔</span> Customizable dashboards</li>
                    <li><span className="text-[#2DD4BF] font-bold">✔</span> In-depth analytics and reporting</li>
                  </ul>
                </div>
                <Link href="#contact-us">
                  <button className="w-full bg-teal-400 hover:bg-teal-500 text-gray-900 font-bold rounded-lg py-3 transition-all duration-300 shadow-md hover:shadow-lg">
                    Get Started
                  </button>
                </Link>
              </div>

              {/* Pricing Card - Enterprise Plan */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg flex-shrink-0 w-72 snap-center transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:text-white group">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-white transition-colors duration-300">
                    Enterprise Plan
                  </h3>
                  <p className="text-lg mb-4 text-gray-700 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                    Comprehensive solutions for large-scale operations that require full automation support and dedicated services.
                  </p>
                  <p className="text-4xl font-bold mb-4 group-hover:text-white transition-colors duration-300">€5000+</p>
                  <ul className="text-left mb-6 space-y-2">
                    <li><span className="text-[#2DD4BF] font-bold">✔</span> Full-scale automation services</li>
                    <li><span className="text-[#2DD4BF] font-bold">✔</span> Enterprise-level dashboards</li>
                    <li><span className="text-[#2DD4BF] font-bold">✔</span> 24/7 dedicated support</li>
                  </ul>
                </div>
                <Link href="#contact-us">
                  <button className="w-full bg-teal-400 hover:bg-teal-500 text-gray-900 font-bold rounded-lg py-3 transition-all duration-300 shadow-md hover:shadow-lg">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>

            {/* Desktop: Grid Layout */}
            <div className="hidden sm:grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
              
              {/* Basic Plan */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:text-white group">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-white transition-colors duration-300">
                    Basic Plan
                  </h3>
                  <p className="text-lg mb-4 text-gray-700 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                    Ideal for startups looking to get started with automation. Includes key features to help streamline essential processes.
                  </p>
                  <p className="text-4xl font-bold mb-4 group-hover:text-white transition-colors duration-300">€500+</p>
                  <ul className="text-left mb-6 space-y-2">
                    <li><span className="text-[#2DD4BF] font-bold">✔</span> Basic automation setup</li>
                    <li><span className="text-[#2DD4BF] font-bold">✔</span> Dashboard integration</li>
                    <li><span className="text-[#2DD4BF] font-bold">✔</span> Simple reporting tools</li>
                  </ul>
                </div>
                <Link href="#contact-us">
                  <button className="w-full bg-teal-400 hover:bg-teal-500 text-gray-900 font-bold rounded-lg py-3 transition-all duration-300 shadow-md hover:shadow-lg">
                    Get Started
                  </button>
                </Link>
              </div>

              {/* Pro Plan */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:text-white group">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-white transition-colors duration-300">
                    Pro Plan
                  </h3>
                  <p className="text-lg mb-4 text-gray-700 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                    Perfect for growing businesses that need advanced tools to optimize workflows and gain deeper insights.
                  </p>
                  <p className="text-4xl font-bold mb-4 group-hover:text-white transition-colors duration-300">€1500+</p>
                  <ul className="text-left mb-6 space-y-2">
                    <li><span className="text-[#2DD4BF] font-bold">✔</span> Advanced automation tools</li>
                    <li><span className="text-[#2DD4BF] font-bold">✔</span> Customizable dashboards</li>
                    <li><span className="text-[#2DD4BF] font-bold">✔</span> In-depth analytics and reporting</li>
                  </ul>
                </div>
                <Link href="#contact-us">
                  <button className="w-full bg-teal-400 hover:bg-teal-500 text-gray-900 font-bold rounded-lg py-3 transition-all duration-300 shadow-md hover:shadow-lg">
                    Get Started
                  </button>
                </Link>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl hover:bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 hover:text-white group">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 group-hover:text-white transition-colors duration-300">
                    Enterprise Plan
                  </h3>
                  <p className="text-lg mb-4 text-gray-700 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
                    Comprehensive solutions for large-scale operations that require full automation support and dedicated services.
                  </p>
                  <p className="text-4xl font-bold mb-4 group-hover:text-white transition-colors duration-300">€5000+</p>
                  <ul className="text-left mb-6 space-y-2">
                    <li><span className="text-[#2DD4BF] font-bold">✔</span> Full-scale automation services</li>
                    <li><span className="text-[#2DD4BF] font-bold">✔</span> Enterprise-level dashboards</li>
                    <li><span className="text-[#2DD4BF] font-bold">✔</span> 24/7 dedicated support</li>
                  </ul>
                </div>
                <Link href="#contact-us">
                  <button className="w-full bg-teal-400 hover:bg-teal-500 text-gray-900 font-bold rounded-lg py-3 transition-all duration-300 shadow-md hover:shadow-lg">
                    Get Started
                  </button>
                </Link>
              </div>

            </div>


            {/* Post-Pricing Paragraph */}
            <p className="text-center mt-12 mx-auto max-w-2xl text-lg">
              Every solution is fully <strong>customizable</strong> to meet the unique needs of your business, ensuring you get the most <strong>effective results</strong> and a strong <strong>return on investment</strong>.
            </p>            
          </div>
        </section>



        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl text-center mb-12 text-gray-900 dark:text-white">
              Success Stories from Our Clients
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
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                  &quot;SimpleFlow revolutionized our workflow and boosted our <strong>productivity by 30%</strong>. Their automation tools have saved us countless hours, allowing us to focus on <strong>growth and innovation</strong>.&quot;
                </p>
                <div className="mt-auto">
                  <p className="font-bold text-gray-900 dark:text-white">Jane Doe</p>
                  <p className="text-sm text-teal-500">CEO, TechCorp</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center items-center mb-6">
                  <div className="bg-indigo-500 rounded-full h-16 w-16 flex items-center justify-center shadow-lg">
                    <BarChart2 className="text-white h-8 w-8" />
                  </div>
                </div>
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                  &quot;The insights from SimpleFlow’s dashboards have been <strong>game-changing</strong> for us. We’re now making <strong>data-driven decisions</strong> faster than ever before, and it’s transformed our business.&quot;
                </p>
                <div className="mt-auto">
                  <p className="font-bold text-gray-900 dark:text-white">John Smith</p>
                  <p className="text-sm text-indigo-500">CTO, DataDrive</p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center items-center mb-6">
                  <div className="bg-purple-500 rounded-full h-16 w-16 flex items-center justify-center shadow-lg">
                    <Cpu className="text-white h-8 w-8" />
                  </div>
                </div>
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                  &quot;SimpleFlow's automation tools have not only saved us <strong>time and resources</strong>, but they’ve also improved our overall <strong>operational efficiency</strong>. We can now tackle <strong>strategic initiatives</strong> with ease.&quot;
                </p>
                <div className="mt-auto">
                  <p className="font-bold text-gray-900 dark:text-white">Emily Brown</p>
                  <p className="text-sm text-purple-500">COO, InnovateCo</p>
                </div>
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
                Get in Touch with SimpleFlow
              </h2>
              <p className="mx-auto max-w-[900px] md:text-xl lg:text-2xl leading-relaxed">
                Ready to take the next step toward <strong>automation</strong> and <strong>optimized workflows</strong>? Fill out the form below, and let’s start <strong>unlocking your business’s potential</strong> together. Our team will guide you through the process to ensure you get the most out of our solutions.
              </p>
            </div>

            <div className="mt-12 max-w-4xl mx-auto bg-white dark:bg-gray-900 p-10 rounded-lg shadow-xl">
              <form
                name="contact"
                method="POST"
                className="space-y-8"
                onSubmit={handleSubmit} // Add JS form handling function
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input
                    type="text"
                    name="first-name"
                    placeholder="First Name"
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                    required
                  />
                  <input
                    type="text"
                    name="last-name"
                    placeholder="Last Name"
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (optional)"
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                  />
                  <input
                    type="text"
                    name="company-name"
                    placeholder="Company Name (optional)"
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                  />
                  <input
                    type="text"
                    name="budget"
                    placeholder="Project Budget (optional)"
                    className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Tell us about your business needs and how we can assist you."
                  rows={5}
                  className="px-4 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-300 rounded-lg focus:outline-none w-full"
                  required
                />

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    Get in Touch
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>





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