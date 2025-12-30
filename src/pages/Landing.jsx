import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Home, CheckCircle2, Users, Building2, Banknote, MapPin, ArrowRight, LayoutDashboard, IndianRupee, Clock, TrendingUp, Instagram, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Landing = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [activeForm, setActiveForm] = useState('homebuyer');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openForm = (formType = 'homebuyer') => {
    setActiveForm(formType);
    setIsFormOpen(true);
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center space-x-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_interior-budget/artifacts/hm8ktuhf_IMG_20250901_022709.png" 
                alt="RightSpace Logo" 
                className="h-10 sm:h-12"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('buyers')} className="text-gray-700 hover:text-[#F59E42] font-medium transition-colors">For Homebuyers</button>
              <button onClick={() => scrollToSection('builders')} className="text-gray-700 hover:text-[#F59E42] font-medium transition-colors">For Builders</button>
              <button onClick={() => scrollToSection('finance')} className="text-gray-700 hover:text-[#F59E42] font-medium transition-colors">For Finance</button>
              <Button onClick={() => openForm('homebuyer')} className="bg-[#F59E42] hover:bg-[#E08A2E] text-white">
                Get Started
              </Button>
            </nav>
            <div className="md:hidden">
              <Button size="sm" onClick={() => openForm('homebuyer')} className="bg-[#F59E42] hover:bg-[#E08A2E] text-white">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-br from-[#0B3D5C] via-[#0D4A6F] to-[#0B3D5C]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1666282167632-c613fbeb163c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwwfHx8fDE3NjcwMjg3NTd8MA&ixlib=rb-4.1.0&q=85)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Bought a Home. <br className="hidden sm:block" />
              <span className="text-[#F59E42]">Now Stuck on Interiors?</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-4 leading-relaxed">
              Most home loans don't cover interiors. RightSpace helps you understand what it will <span className="font-semibold text-white">actually cost</span> to furnish your home—before possession, before regret.
            </p>
            <p className="text-lg text-gray-300 mb-10">
              Layout-based planning and standardized furnishing packages designed at the booking stage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={() => openForm('homebuyer')} 
                size="lg" 
                className="bg-[#F59E42] hover:bg-[#E08A2E] text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <IndianRupee className="mr-2 h-5 w-5" />
                Check My Interior Cost
              </Button>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Button 
                  onClick={() => scrollToSection('builders')} 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white hover:text-[#0B3D5C] transition-all duration-300 w-full sm:w-auto"
                >
                  I'm a Builder
                </Button>
                <Button 
                  onClick={() => scrollToSection('finance')} 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white hover:bg-white hover:text-[#0B3D5C] transition-all duration-300 w-full sm:w-auto"
                >
                  I'm a Finance Partner
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900">
              The Interior Cost Shock <br className="hidden sm:block" />
              <span className="text-[#F59E42]">No One Warns You About</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mt-12 sm:mt-16 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">Savings drained in booking & registration</h3>
                      <p className="text-gray-600">Your entire savings went into down payment, leaving nothing for interiors</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <Banknote className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">Home loans don't fund interiors</h3>
                      <p className="text-gray-600">Banks only finance the property, not furniture and fittings</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <Clock className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">Furnishing gets delayed 6–18 months</h3>
                      <p className="text-gray-600">Living with bare essentials because you can't afford proper furniture</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <Home className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-1">Poor, rushed, expensive decisions</h3>
                      <p className="text-gray-600">Last-minute furniture shopping leads to overspending and regret</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-[#FFF5ED] border-l-4 border-[#F59E42] rounded-r-xl">
                  <p className="text-lg font-semibold text-gray-900">
                    This is where most first-time buyers get stuck.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1762810951632-68c9f197cf33?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxlbXB0eSUyMHVuZnVybmlzaGVkJTIwcm9vbXxlbnwwfHx8fDE3NjcwMjg3NjR8MA&ixlib=rb-4.1.0&q=85"
                  alt="Empty unfurnished room"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-gray-900">
              RightSpace Fixes This <br className="hidden sm:block" />
              <span className="text-[#F59E42]">at the Booking Stage</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
              <Card className="border-2 hover:border-[#F59E42] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 bg-[#F59E42] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6">
                    <LayoutDashboard className="h-8 w-8 text-[#F59E42]" />
                  </div>
                  <div className="text-4xl font-bold text-[#F59E42] mb-2">01</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Layout-Based Planning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Furniture planned on your actual flat layout, not guesswork. Know exactly what fits where.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-[#F59E42] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 bg-[#F59E42] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6">
                    <IndianRupee className="h-8 w-8 text-[#F59E42]" />
                  </div>
                  <div className="text-4xl font-bold text-[#F59E42] mb-2">02</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Upfront Cost Clarity</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Know realistic furnishing costs before possession. No surprises, no financial stress.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-[#F59E42] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-16 h-16 bg-[#F59E42] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-[#F59E42]" />
                  </div>
                  <div className="text-4xl font-bold text-[#F59E42] mb-2">03</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Standard Packages</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Convert the plan into ready-to-execute furnishing packages. Move in faster.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <img 
                src="https://images.pexels.com/photos/5922204/pexels-photo-5922204.jpeg"
                alt="Interior planning process"
                className="rounded-2xl shadow-2xl w-full max-w-3xl mx-auto h-[300px] sm:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Homebuyer Section */}
      <section id="buyers" className="py-16 sm:py-24 bg-gradient-to-br from-[#FFF5ED] to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F59E42] rounded-2xl mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">For Homebuyers</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-[#F59E42] flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">Avoid last-minute interior panic</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-[#F59E42] flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">Stop overusing credit cards or personal loans</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-[#F59E42] flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">Furnish your home practically, not emotionally</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-[#F59E42] flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">Move in faster with essentials done right</p>
                  </div>
                </div>
                <Card className="bg-white border-2 border-[#F59E42] shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">What You Get</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-[#F59E42] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Free layout-based furnishing plan</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-[#F59E42] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Clear cost estimate for essential furniture</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-[#F59E42] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">No obligation to purchase</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-[#F59E42] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Designed for real Indian homes</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <div className="mt-8">
                  <Button 
                    onClick={() => openForm('homebuyer')} 
                    size="lg" 
                    className="w-full bg-[#F59E42] hover:bg-[#E08A2E] text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <IndianRupee className="mr-2 h-5 w-5" />
                    Get My Free Layout & Cost Estimate
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Takes less than 2 minutes. No spam. No sales pressure.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1603072845032-7b5bd641a82a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwwfHx8fDE3NjcwMjg3NTd8MA&ixlib=rb-4.1.0&q=85"
                  alt="Furnished home interior"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Builder Section */}
      <section id="builders" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0B3D5C] rounded-2xl mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">For Builders & Developers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                RightSpace helps builders solve buyer hesitation caused by interior cost uncertainty.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="border-2 hover:border-[#0B3D5C] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#0B3D5C] bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-[#0B3D5C]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Higher booking confidence</h3>
                  <p className="text-gray-600">
                    Help buyers understand total costs upfront, reducing booking anxiety
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-[#0B3D5C] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#0B3D5C] bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-[#0B3D5C]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Fewer "we'll decide later" objections</h3>
                  <p className="text-gray-600">
                    Clear cost breakdown eliminates the biggest purchase barrier
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-[#0B3D5C] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#0B3D5C] bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                    <Home className="h-6 w-6 text-[#0B3D5C]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Value-added service at booking</h3>
                  <p className="text-gray-600">
                    Stand out by offering interior planning as a booking benefit
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 hover:border-[#0B3D5C] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#0B3D5C] bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-[#0B3D5C]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Zero execution or inventory risk</h3>
                  <p className="text-gray-600">
                    We handle everything - you just add value to your customers
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button 
                onClick={() => openForm('builder')} 
                size="lg" 
                className="bg-[#0B3D5C] hover:bg-[#0A3449] text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Building2 className="mr-2 h-5 w-5" />
                Partner With RightSpace
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Finance Section */}
      <section id="finance" className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0B3D5C] rounded-2xl mb-4">
                <Banknote className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">For Finance & NBFC Partners</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                RightSpace creates structured, predictable furnishing demand aligned with possession timelines.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-white border-2 hover:border-[#F59E42] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#F59E42] bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-[#F59E42]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Qualified first-time buyer funnel</h3>
                  <p className="text-gray-600">
                    Pre-vetted customers with clear furnishing needs
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-2 hover:border-[#F59E42] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#F59E42] bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                    <IndianRupee className="h-6 w-6 text-[#F59E42]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Standardized ticket sizes</h3>
                  <p className="text-gray-600">
                    Predictable loan amounts based on package pricing
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-2 hover:border-[#F59E42] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#F59E42] bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-[#F59E42]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Lower risk through package pricing</h3>
                  <p className="text-gray-600">
                    Transparent, structured costs reduce default risk
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white border-2 hover:border-[#F59E42] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-[#F59E42] bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-[#F59E42]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Builder-aligned delivery visibility</h3>
                  <p className="text-gray-600">
                    Loan disbursement tied to possession timelines
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 p-6 bg-blue-50 border-l-4 border-[#0B3D5C] rounded-r-xl">
              <p className="text-gray-700 font-medium">
                <span className="font-bold text-[#0B3D5C]">Note:</span> Financing integration planned in a later phase.
              </p>
            </div>
            <div className="mt-12 text-center">
              <Button 
                onClick={() => openForm('finance')} 
                size="lg" 
                className="bg-[#0B3D5C] hover:bg-[#0A3449] text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Banknote className="mr-2 h-5 w-5" />
                Explore Partnership
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F59E42] rounded-2xl mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                Currently Piloting in <span className="text-[#F59E42]">Pune</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 bg-[#FFF5ED] rounded-xl text-center hover:bg-[#FFE8D1] transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-[#F59E42] mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">Wakad</p>
                  </div>
                  <div className="p-4 bg-[#FFF5ED] rounded-xl text-center hover:bg-[#FFE8D1] transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-[#F59E42] mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">Hinjewadi</p>
                  </div>
                  <div className="p-4 bg-[#FFF5ED] rounded-xl text-center hover:bg-[#FFE8D1] transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-[#F59E42] mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">Tathawade</p>
                  </div>
                  <div className="p-4 bg-[#FFF5ED] rounded-xl text-center hover:bg-[#FFE8D1] transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-[#F59E42] mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">Kharadi</p>
                  </div>
                  <div className="p-4 bg-[#FFF5ED] rounded-xl text-center hover:bg-[#FFE8D1] transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-[#F59E42] mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">Ravet</p>
                  </div>
                  <div className="p-4 bg-[#FFF5ED] rounded-xl text-center hover:bg-[#FFE8D1] transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-[#F59E42] mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">Wagholi</p>
                  </div>
                  <div className="p-4 bg-[#FFF5ED] rounded-xl text-center hover:bg-[#FFE8D1] transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-[#F59E42] mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">Chakan</p>
                  </div>
                  <div className="p-4 bg-[#FFF5ED] rounded-xl text-center hover:bg-[#FFE8D1] transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-[#F59E42] mx-auto mb-2" />
                    <p className="font-semibold text-gray-900">Talegaon</p>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1705954797147-652784bc2484?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxwdW5lJTIwcmVzaWRlbnRpYWwlMjBidWlsZGluZ3N8ZW58MHx8fHwxNzY3MDI4Nzc3fDA&ixlib=rb-4.1.0&q=85"
                  alt="Pune residential area"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#0B3D5C] to-[#0D4A6F] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12">Why RightSpace Works</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
                <CheckCircle2 className="h-12 w-12 text-[#F59E42] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Designed for first-time buyers</h3>
                <p className="text-gray-200">
                  We understand the financial stress of your first home purchase
                </p>
              </div>
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
                <IndianRupee className="h-12 w-12 text-[#F59E42] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Solves a real cash-flow problem</h3>
                <p className="text-gray-200">
                  Plan and budget before you're stuck with empty rooms
                </p>
              </div>
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
                <Clock className="h-12 w-12 text-[#F59E42] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Acts before possession, not after</h3>
                <p className="text-gray-200">
                  Get clarity at booking stage, not when it's too late
                </p>
              </div>
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
                <Users className="h-12 w-12 text-[#F59E42] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Builder-friendly, buyer-first</h3>
                <p className="text-gray-200">
                  We work with developers while keeping your interests first
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B3D5C] text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="text-center md:text-left">
                <img 
                  src="https://customer-assets.emergentagent.com/job_interior-budget/artifacts/hm8ktuhf_IMG_20250901_022709.png" 
                  alt="RightSpace Logo" 
                  className="h-12 mx-auto md:mx-0 mb-4"
                />
                <p className="text-sm text-gray-300 max-w-md">
                  <strong>Disclaimer:</strong> RightSpace is a layout planning and furnishing solutions platform. We do not sell real estate.
                </p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-lg font-semibold mb-3">Contact Us</p>
                <a href="mailto:hello@rightspace.in" className="text-gray-300 hover:text-[#F59E42] transition-colors flex items-center justify-center md:justify-end mb-2">
                  <span>hello@rightspace.in</span>
                </a>
                <a href="tel:+917774995657" className="text-gray-300 hover:text-[#F59E42] transition-colors flex items-center justify-center md:justify-end mb-3">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+91 7774995657</span>
                </a>
                <p className="text-gray-300 mb-4">Pune, Maharashtra</p>
                
                {/* Social Media Icons */}
                <div className="flex items-center justify-center md:justify-end space-x-4">
                  <a 
                    href="https://www.instagram.com/rightspacepune" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-[#F59E42] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://wa.me/917774995657" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-[#25D366] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
              <p>© 2025 RightSpace. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              {activeForm === 'homebuyer' && 'Get Your Free Layout & Cost Estimate'}
              {activeForm === 'builder' && 'Builder Partnership Inquiry'}
              {activeForm === 'finance' && 'Finance Partnership Inquiry'}
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              {activeForm === 'homebuyer' && 'Fill out this form and we\'ll send you a detailed layout-based furnishing plan with cost estimates.'}
              {activeForm === 'builder' && 'Let\'s discuss how RightSpace can add value to your projects and help close more bookings.'}
              {activeForm === 'finance' && 'Explore partnership opportunities to serve first-time homebuyers with structured furnishing finance.'}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <div className="bg-[#FFF5ED] border-l-4 border-[#F59E42] p-4 rounded-r-lg mb-6">
              <p className="text-sm text-gray-700">
                <strong className="text-[#F59E42]">Google Form Integration</strong><br />
                This is a placeholder. Your Google Form will be embedded here.
              </p>
            </div>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center p-8">
                <Home className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 font-medium mb-2">Google Form Placeholder</p>
                <p className="text-sm text-gray-400">Replace this with your embedded Google Form iframe</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Landing;