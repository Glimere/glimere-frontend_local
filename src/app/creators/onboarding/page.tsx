"use client"

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { ChevronRight, ChevronLeft, User, Briefcase, Award, CheckCircle, Sparkles, Heart, Star, Upload, MapPin, Calendar, Globe, Palette, Camera, Zap, Users, TrendingUp} from 'lucide-react';

interface OnboardingData {
  apparelType: 'custom' | 'ready-to-wear' | '';
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  dateOfBirth: string;
  profilePicture: string;
  creatorType: string[];
  experienceYears: string;
  portfolioLinks: string;
  specializations: string[];
  technicalSkills: string;
  previousWork: string;
  clientTestimonials: string;
  leadTime: string;
  monthlyCapacity: string;
  pricingStructure: string;
  paymentMethod: string;
  shippingCapability: string[];
  returnPolicy: string;
  brandMission: string;
  authenticFashion: string;
  glimereExcitement: string;
  fashionInterests: string[];
  preferredMaterials: string[];
  whyGlimere: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
    other: string;
  };
}

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [data, setData] = useState<OnboardingData>({
    apparelType: '',
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    dateOfBirth: '',
    profilePicture: '',
    creatorType: [],
    experienceYears: '',
    portfolioLinks: '',
    specializations: [],
    technicalSkills: '',
    previousWork: '',
    clientTestimonials: '',
    leadTime: '',
    monthlyCapacity: '',
    pricingStructure: '',
    paymentMethod: '',
    shippingCapability: [],
    returnPolicy: '',
    brandMission: '',
    authenticFashion: '',
    glimereExcitement: '',
    fashionInterests: [],
    preferredMaterials: [],
    whyGlimere: '',
    socialMedia: {
      facebook: '',
      instagram: '',
      twitter: '',
      linkedin: '',
      other: ''
    }
  });

  const totalSteps = 8;
  const progress = (currentStep / totalSteps) * 100;

  const goToNext = () => {
    if (currentStep < totalSteps) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const goToPrevious = () => {
    if (currentStep > 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const updateData = (field: keyof OnboardingData, value: unknown) => {
    setData(prev => ({ ...prev, [field]: value }));
  };

  const updateSocialMedia = (platform: keyof OnboardingData['socialMedia'], value: string) => {
    setData(prev => ({
      ...prev,
      socialMedia: { ...prev.socialMedia, [platform]: value }
    }));
  };

  const toggleArrayValue = (field: keyof OnboardingData, value: string) => {
    setData(prev => {
      const currentArray = prev[field] as string[];
      const newArray = currentArray.includes(value) 
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      return { ...prev, [field]: newArray };
    });
  };

  const stepTitles = [
    "Welcome to Glimere",
    "Basic Information & Account Setup",
    "Expertise & Portfolio",
    "Business Information",
    "Brand & Fashion Interests",
    "Social Media Presence",
    "Review & Submit",
    "Welcome Aboard!"
  ];

  return (
    <div className="min-h-screen bg-alabaster relative overflow-hidden">
      {/* Decorative floating elements with new color scheme */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-palePink/40 to-beige/40 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-beige/40 to-primary-100/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-primary-100/30 to-palePink/40 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-transparent-white-200 backdrop-blur-xl border-b border-transparent-white-100">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-dark">Step {currentStep} of {totalSteps}</h2>
            <span className="text-sm font-medium bg-gradient-to-r from-primary-100 to-primary-100/80 bg-clip-text text-transparent">{stepTitles[currentStep - 1]}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-2xl mx-auto">
          <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 transform translate-x-10' : 'opacity-100 transform translate-x-0'}`}>
            
            {/* Step 1: Redesigned Welcome & Apparel Type Selection */}
            {currentStep === 1 && (
              <div className="text-center animate-fade-in">
                <div className="mb-12">
                  {/* Hero Section with Fashion Icons */}
                  {/* <div className="relative mb-8">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-primary-100/80 rounded-full flex items-center justify-center animate-scale-in shadow-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-light/20 to-transparent animate-slide-in-right"></div>
                      <Crown className="w-16 h-16 text-light z-10" />
                    </div>
                    
                  
                    <div className="absolute -top-4 -left-8 w-12 h-12 bg-gradient-to-br from-palePink to-beige rounded-full flex items-center justify-center animate-float">
                      <Scissors className="w-6 h-6 text-primary-100" />
                    </div>
                    <div className="absolute top-8 -right-6 w-10 h-10 bg-gradient-to-br from-beige to-secondary-200 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                      <Brush className="w-5 h-5 text-primary-100" />
                    </div>
                    <div className="absolute -bottom-2 left-12 w-14 h-14 bg-gradient-to-br from-secondary-200 to-palePink rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                      <Palette className="w-7 h-7 text-primary-100" />
                    </div>
                  </div> */}
                  
                  {/* <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary-100 via-primary-100/90 to-primary-100/70 bg-clip-text text-transparent">
                    Welcome to Glimere!
                  </h1>
                  <p className="text-xl text-dark/70 mb-4 max-w-xl mx-auto leading-relaxed">
                    Join Africa's premier fashion marketplace where creativity meets authenticity
                  </p>
                  <p className="text-lg text-dark/60 mb-12 max-w-lg mx-auto">
                    Let's start your creative journey and connect you with fashion lovers worldwide
                  </p> */}
                </div>
                
                {/* Enhanced Selection Cards */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-dark mb-8">Choose Your Creator Path</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card 
                      className={`group p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-sm relative overflow-hidden ${
                        data.apparelType === 'custom' 
                          ? 'ring-2 ring-primary-100 bg-gradient-to-br from-palePink/80 to-beige/80 shadow-xl' 
                          : 'bg-transparent-white-200 hover:bg-transparent-white-300'
                      }`}
                      onClick={() => updateData('apparelType', 'custom')}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-100/5 via-transparent to-primary-100/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="text-center relative z-10">
                        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-primary-100/80 rounded-2xl flex items-center justify-center group-hover:animate-pulse">
                          <div className="relative">
                            <Palette className="w-12 h-12 text-light" />
                            <Zap className="w-4 h-4 text-secondary-200 absolute -top-1 -right-1" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-dark group-hover:text-primary-100 transition-colors">Custom Designs</h3>
                        <p className="text-dark/70 leading-relaxed mb-4">Create unique, made-to-order pieces tailored to each customer's vision and style</p>
                        <div className="flex items-center justify-center gap-2 text-sm text-primary-100 font-medium">
                          <Users className="w-4 h-4" />
                          <span>Bespoke Experience</span>
                        </div>
                      </div>
                    </Card>
                    
                    <Card 
                      className={`group p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-sm relative overflow-hidden ${
                        data.apparelType === 'ready-to-wear' 
                          ? 'ring-2 ring-primary-100 bg-gradient-to-br from-beige/80 to-palePink/80 shadow-xl' 
                          : 'bg-transparent-white-200 hover:bg-transparent-white-300'
                      }`}
                      onClick={() => updateData('apparelType', 'ready-to-wear')}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-100/5 via-transparent to-primary-100/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="text-center relative z-10">
                        <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary-100/80 to-primary-100 rounded-2xl flex items-center justify-center group-hover:animate-pulse">
                          <div className="relative">
                            <Award className="w-12 h-12 text-light" />
                            <TrendingUp className="w-4 h-4 text-secondary-200 absolute -top-1 -right-1" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-dark group-hover:text-primary-100 transition-colors">Ready-to-Wear</h3>
                        <p className="text-dark/70 leading-relaxed mb-4">Sell your existing collections and designs to a global audience of fashion enthusiasts</p>
                        <div className="flex items-center justify-center gap-2 text-sm text-primary-100 font-medium">
                          <Globe className="w-4 h-4" />
                          <span>Global Reach</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                  
                  {/* Additional Info Section */}
                  <div className="mt-12 p-6 bg-transparent-white-200 backdrop-blur-sm rounded-2xl border border-transparent-white-100">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <Sparkles className="w-5 h-5 text-primary-100" />
                      <h4 className="text-lg font-semibold text-dark">Why Choose Glimere?</h4>
                      <Sparkles className="w-5 h-5 text-primary-100" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-palePink to-beige rounded-full flex items-center justify-center">
                          <Heart className="w-6 h-6 text-primary-100" />
                        </div>
                        <p className="text-sm font-medium text-dark">Authentic Fashion</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-beige to-secondary-200 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-primary-100" />
                        </div>
                        <p className="text-sm font-medium text-dark">Global Community</p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-secondary-200 to-palePink rounded-full flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-primary-100" />
                        </div>
                        <p className="text-sm font-medium text-dark">Grow Your Brand</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Basic Information & Account Setup */}
            {currentStep === 2 && (
              <div className="animate-fade-in">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-primary-100/80 rounded-2xl flex items-center justify-center shadow-xl">
                    <User className="w-10 h-10 text-light" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary-100 to-primary-100/80 bg-clip-text text-transparent">Basic Information & Account Setup</h2>
                  <p className="text-dark/70">We'll use this information for contracts, payments, and verification</p>
                </div>
                
                <Card className="p-8 bg-transparent-white-200 backdrop-blur-xl border border-transparent-white-100 shadow-2xl">
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName" className="text-sm font-medium flex items-center gap-2 text-dark">
                          <User className="w-4 h-4" />
                          Full Legal Name *
                        </Label>
                        <Input 
                          id="fullName"
                          value={data.fullName}
                          onChange={(e) => updateData('fullName', e.target.value)}
                          className="mt-1 bg-transparent-white-100 border-transparent-white-200"
                          placeholder="John David Smith"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="businessName" className="text-sm font-medium flex items-center gap-2 text-dark">
                          <Briefcase className="w-4 h-4" />
                          Business Name
                        </Label>
                        <Input 
                          id="businessName"
                          value={data.businessName}
                          onChange={(e) => updateData('businessName', e.target.value)}
                          className="mt-1 bg-transparent-white-100 border-transparent-white-200"
                          placeholder="Fabric Fantasies Atelier"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                        <Input 
                          id="email"
                          type="email"
                          value={data.email}
                          onChange={(e) => updateData('email', e.target.value)}
                          className="mt-1 bg-transparent-white-100 border-transparent-white-200"
                          placeholder="johndoe@fabricfantasies.com"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                        <Input 
                          id="phone"
                          value={data.phone}
                          onChange={(e) => updateData('phone', e.target.value)}
                          className="mt-1 bg-transparent-white-100 border-transparent-white-200"
                          placeholder="+234 80XXXXXXXXX"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="address" className="text-sm font-medium flex items-center gap-2 text-dark">
                        <MapPin className="w-4 h-4" />
                        Physical Address *
                      </Label>
                      <Input 
                        id="address"
                        value={data.address}
                        onChange={(e) => updateData('address', e.target.value)}
                        className="mt-1 bg-transparent-white-100 border-transparent-white-200"
                        placeholder="123 Fashion Lane, Lekki, Lagos, Nigeria"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="country" className="text-sm font-medium flex items-center gap-2 text-dark">
                          <Globe className="w-4 h-4" />
                          Country of Operation *
                        </Label>
                        <Select onValueChange={(value) => updateData('country', value)}>
                          <SelectTrigger className="mt-1 bg-transparent-white-100">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nigeria">Nigeria</SelectItem>
                            <SelectItem value="ghana">Ghana</SelectItem>
                            <SelectItem value="kenya">Kenya</SelectItem>
                            <SelectItem value="south-africa">South Africa</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="dateOfBirth" className="text-sm font-medium flex items-center gap-2 text-dark">
                          <Calendar className="w-4 h-4" />
                          Date of Birth *
                        </Label>
                        <Input 
                          id="dateOfBirth"
                          type="date"
                          value={data.dateOfBirth}
                          onChange={(e) => updateData('dateOfBirth', e.target.value)}
                          className="mt-1 bg-transparent-white-100 border-transparent-white-200"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="profilePicture" className="text-sm font-medium flex items-center gap-2 text-dark">
                        <Camera className="w-4 h-4" />
                        Profile Picture/Avatar
                      </Label>
                      <div className="mt-1 p-4 border-2 border-dashed border-primary-100/30 rounded-lg bg-transparent-white-100 text-center">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-primary-100" />
                        <p className="text-sm text-dark/70">Upload high-resolution professional headshot or brand logo</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Step 3: Expertise & Portfolio Verification */}
            {currentStep === 3 && (
              <div className="animate-fade-in">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Expertise & Portfolio</h2>
                  <p className="text-gray-600">Help us understand your skills and showcase your work</p>
                </div>
                
                <Card className="p-8 bg-white/70 backdrop-blur-xl border border-white/20 shadow-2xl">
                  <div className="space-y-6">
                    <div>
                      <Label className="text-sm font-medium">Creator Type *</Label>
                      <div className="grid md:grid-cols-2 gap-3 mt-2">
                        {['Fashion Designer', 'Tailor/Seamstress', '3D Apparel Modeler', 'Pattern Maker', 'Stylist', 'Artisan'].map((type) => (
                          <div 
                            key={type}
                            className={`p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                              data.creatorType.includes(type) 
                                ? 'border-purple-400 bg-purple-50/50' 
                                : 'border-gray-200 hover:border-purple-400/50 bg-white/30'
                            }`}
                            onClick={() => toggleArrayValue('creatorType', type)}
                          >
                            <div className="flex items-center space-x-3">
                              <Checkbox checked={data.creatorType.includes(type)} />
                              <span className="font-medium text-sm">{type}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="experienceYears" className="text-sm font-medium">Years of Experience *</Label>
                        <Select onValueChange={(value) => updateData('experienceYears', value)}>
                          <SelectTrigger className="mt-1 bg-white/50">
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 years</SelectItem>
                            <SelectItem value="2-5">2-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="portfolioLinks" className="text-sm font-medium">Portfolio Links *</Label>
                        <Input 
                          id="portfolioLinks"
                          value={data.portfolioLinks}
                          onChange={(e) => updateData('portfolioLinks', e.target.value)}
                          className="mt-1 bg-white/50"
                          placeholder="Behance, Instagram, website URL"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-sm font-medium">Specializations/Niche *</Label>
                      <div className="grid md:grid-cols-3 gap-3 mt-2">
                        {['Bridal Wear', 'Avant-Garde', 'African Prints', 'Sustainable Fashion', 'Streetwear', 'Children\'s Apparel', 'Plus-Size', 'Leather Goods', 'Bespoke Suits'].map((spec) => (
                          <div 
                            key={spec}
                            className={`p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                              data.specializations.includes(spec) 
                                ? 'border-blue-400 bg-blue-50/50' 
                                : 'border-gray-200 hover:border-blue-400/50 bg-white/30'
                            }`}
                            onClick={() => toggleArrayValue('specializations', spec)}
                          >
                            <div className="flex items-center space-x-2">
                              <Checkbox checked={data.specializations.includes(spec)} />
                              <span className="font-medium text-xs">{spec}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="technicalSkills" className="text-sm font-medium">Technical Skills & Software</Label>
                      <Textarea 
                        id="technicalSkills"
                        value={data.technicalSkills}
                        onChange={(e) => updateData('technicalSkills', e.target.value)}
                        placeholder="e.g., CLO3D, Pattern drafting, Industrial machines, Marvelous Designer..."
                        className="min-h-20 bg-white/50"
                      />
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Step 4: Business Information */}
            {currentStep === 4 && (
              <div className="animate-fade-in">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Briefcase className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">Business Information</h2>
                  <p className="text-gray-600">Tell us about your operational capacity and business model</p>
                </div>
                
                <Card className="p-8 bg-white/70 backdrop-blur-xl border border-white/20 shadow-2xl">
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="leadTime" className="text-sm font-medium">Average Lead Time for Custom Orders *</Label>
                        <Select onValueChange={(value) => updateData('leadTime', value)}>
                          <SelectTrigger className="mt-1 bg-white/50">
                            <SelectValue placeholder="Select lead time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-7">1-7 days</SelectItem>
                            <SelectItem value="7-14">7-14 days</SelectItem>
                            <SelectItem value="2-4">2-4 weeks</SelectItem>
                            <SelectItem value="1-2">1-2 months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="monthlyCapacity" className="text-sm font-medium">Monthly Capacity *</Label>
                        <Input 
                          id="monthlyCapacity"
                          value={data.monthlyCapacity}
                          onChange={(e) => updateData('monthlyCapacity', e.target.value)}
                          className="mt-1 bg-white/50"
                          placeholder="e.g., 10 custom orders per month"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="pricingStructure" className="text-sm font-medium">Pricing Structure *</Label>
                        <Select onValueChange={(value) => updateData('pricingStructure', value)}>
                          <SelectTrigger className="mt-1 bg-white/50">
                            <SelectValue placeholder="Select pricing model" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="per-item">Per-item custom pricing</SelectItem>
                            <SelectItem value="hourly">Hourly rate</SelectItem>
                            <SelectItem value="tiered">Tiered pricing by complexity</SelectItem>
                            <SelectItem value="package">Package deals</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="paymentMethod" className="text-sm font-medium">Preferred Payment Method *</Label>
                        <Select onValueChange={(value) => updateData('paymentMethod', value)}>
                          <SelectTrigger className="mt-1 bg-white/50">
                            <SelectValue placeholder="Select payment method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bank-transfer">Bank Transfer</SelectItem>
                            <SelectItem value="payoneer">Payoneer</SelectItem>
                            <SelectItem value="paypal">PayPal</SelectItem>
                            <SelectItem value="mobile-money">Mobile Money</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-sm font-medium">Shipping & Logistics Capability *</Label>
                      <div className="grid md:grid-cols-2 gap-3 mt-2">
                        {['Handle own shipping', 'Local delivery', 'Nationwide shipping', 'International shipping', 'Prefer Glimere handling'].map((capability) => (
                          <div 
                            key={capability}
                            className={`p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                              data.shippingCapability.includes(capability) 
                                ? 'border-green-400 bg-green-50/50' 
                                : 'border-gray-200 hover:border-green-400/50 bg-white/30'
                            }`}
                            onClick={() => toggleArrayValue('shippingCapability', capability)}
                          >
                            <div className="flex items-center space-x-3">
                              <Checkbox checked={data.shippingCapability.includes(capability)} />
                              <span className="font-medium text-sm">{capability}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="returnPolicy" className="text-sm font-medium">Return/Revision Policy</Label>
                      <Textarea 
                        id="returnPolicy"
                        value={data.returnPolicy}
                        onChange={(e) => updateData('returnPolicy', e.target.value)}
                        placeholder="e.g., One free revision within 7 days of delivery..."
                        className="min-h-20 bg-white/50"
                      />
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Step 5: Brand & Fashion Interests */}
            {currentStep === 5 && (
              <div className="animate-fade-in">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Brand & Fashion Interests</h2>
                  <p className="text-gray-600">Share your vision and passion for authentic fashion</p>
                </div>
                
                <Card className="p-8 bg-white/70 backdrop-blur-xl border border-white/20 shadow-2xl">
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="brandMission" className="text-sm font-medium">Brand Mission/Philosophy *</Label>
                      <Textarea 
                        id="brandMission"
                        value={data.brandMission}
                        onChange={(e) => updateData('brandMission', e.target.value)}
                        placeholder="e.g., To create timeless, ethically sourced African-inspired garments that empower women..."
                        className="min-h-24 bg-white/50"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="authenticFashion" className="text-sm font-medium">What does 'authentic fashion' mean to you? *</Label>
                      <Textarea 
                        id="authenticFashion"
                        value={data.authenticFashion}
                        onChange={(e) => updateData('authenticFashion', e.target.value)}
                        placeholder="Share your perspective on authentic fashion..."
                        className="min-h-24 bg-white/50"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="glimereExcitement" className="text-sm font-medium">What excites you about Glimere? *</Label>
                      <Textarea 
                        id="glimereExcitement"
                        value={data.glimereExcitement}
                        onChange={(e) => updateData('glimereExcitement', e.target.value)}
                        placeholder="Tell us what draws you to our platform..."
                        className="min-h-24 bg-white/50"
                      />
                    </div>
                    
                    <div>
                      <Label className="text-sm font-medium">Fashion Interests/Inspirations</Label>
                      <div className="grid md:grid-cols-3 gap-3 mt-2">
                        {['Contemporary African', 'Historical Costumes', 'Avant-garde Design', 'Sustainable Fashion', 'Traditional Textiles', 'Streetwear Culture', 'Cultural Fusion', 'Minimalist Design'].map((interest) => (
                          <div 
                            key={interest}
                            className={`p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                              data.fashionInterests.includes(interest) 
                                ? 'border-pink-400 bg-pink-50/50' 
                                : 'border-gray-200 hover:border-pink-400/50 bg-white/30'
                            }`}
                            onClick={() => toggleArrayValue('fashionInterests', interest)}
                          >
                            <div className="flex items-center space-x-2">
                              <Checkbox checked={data.fashionInterests.includes(interest)} />
                              <span className="font-medium text-xs">{interest}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label className="text-sm font-medium">Preferred Fabrics/Materials</Label>
                      <div className="grid md:grid-cols-4 gap-3 mt-2">
                        {['Cotton', 'Silk', 'Ankara', 'Adire', 'Linen', 'Leather', 'Recycled Polyester', 'Wool'].map((material) => (
                          <div 
                            key={material}
                            className={`p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                              data.preferredMaterials.includes(material) 
                                ? 'border-purple-400 bg-purple-50/50' 
                                : 'border-gray-200 hover:border-purple-400/50 bg-white/30'
                            }`}
                            onClick={() => toggleArrayValue('preferredMaterials', material)}
                          >
                            <div className="flex items-center space-x-2">
                              <Checkbox checked={data.preferredMaterials.includes(material)} />
                              <span className="font-medium text-xs">{material}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="whyGlimere" className="text-sm font-medium">Why Glimere? *</Label>
                      <Textarea 
                        id="whyGlimere"
                        value={data.whyGlimere}
                        onChange={(e) => updateData('whyGlimere', e.target.value)}
                        placeholder="Why do you want to be a creator on the Glimere platform?"
                        className="min-h-24 bg-white/50"
                      />
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Step 6: Social Media & Online Presence */}
            {currentStep === 6 && (
              <div className="animate-fade-in">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Social Media Presence</h2>
                  <p className="text-gray-600">Share your online presence for verification and brand assessment</p>
                </div>
                
                <Card className="p-8 bg-white/70 backdrop-blur-xl border border-white/20 shadow-2xl">
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="instagram" className="text-sm font-medium">Instagram Profile URL *</Label>
                        <Input 
                          id="instagram"
                          value={data.socialMedia.instagram}
                          onChange={(e) => updateSocialMedia('instagram', e.target.value)}
                          className="mt-1 bg-white/50"
                          placeholder="https://instagram.com/yourbrand"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="facebook" className="text-sm font-medium">Facebook Page URL</Label>
                        <Input 
                          id="facebook"
                          value={data.socialMedia.facebook}
                          onChange={(e) => updateSocialMedia('facebook', e.target.value)}
                          className="mt-1 bg-white/50"
                          placeholder="https://facebook.com/yourbrand"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="twitter" className="text-sm font-medium">Twitter/X Profile URL</Label>
                        <Input 
                          id="twitter"
                          value={data.socialMedia.twitter}
                          onChange={(e) => updateSocialMedia('twitter', e.target.value)}
                          className="mt-1 bg-white/50"
                          placeholder="https://twitter.com/yourbrand"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="linkedin" className="text-sm font-medium">LinkedIn Profile URL</Label>
                        <Input 
                          id="linkedin"
                          value={data.socialMedia.linkedin}
                          onChange={(e) => updateSocialMedia('linkedin', e.target.value)}
                          className="mt-1 bg-white/50"
                          placeholder="https://linkedin.com/in/yourname"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="other" className="text-sm font-medium">Other Social Media (Pinterest, TikTok, YouTube)</Label>
                      <Textarea 
                        id="other"
                        value={data.socialMedia.other}
                        onChange={(e) => updateSocialMedia('other', e.target.value)}
                        placeholder="Add links to Pinterest, TikTok, YouTube, or other platforms..."
                        className="min-h-20 bg-white/50"
                      />
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-2">Social Media Review</h4>
                      <p className="text-sm text-blue-700">
                        Our team will review your social media presence for brand consistency, content quality, 
                        and alignment with Glimere's values. Active engagement and professional content are highly valued.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Step 7: Review & Submit - Enhanced */}
            {currentStep === 7 && (
              <div className="animate-fade-in">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-glimere-primary to-glimere-primary/80 rounded-2xl flex items-center justify-center shadow-xl">
                    <CheckCircle className="w-10 h-10 text-glimere-light" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-glimere-primary to-glimere-primary/80 bg-clip-text text-transparent">Review Your Application</h2>
                  <p className="text-glimere-dark/70">Please review all information before submitting</p>
                </div>
                
                <Card className="p-8 bg-transparent-white-200 backdrop-blur-xl border border-transparent-white-100 shadow-2xl">
                  <div className="space-y-8 max-h-96 overflow-y-auto">
                    
                    {/* Apparel Type */}
                    <div className="border-b border-transparent-white-100 pb-4">
                      <h3 className="font-semibold text-lg mb-3 text-glimere-primary flex items-center gap-2">
                        <Palette className="w-5 h-5" />
                        Apparel Type
                      </h3>
                      <p className="text-glimere-dark/80 capitalize bg-glimere-aesthetic-1/50 px-3 py-2 rounded-lg inline-block">
                        {data.apparelType.replace('-', ' ')}
                      </p>
                    </div>
                    
                    {/* Personal Information */}
                    <div className="border-b border-transparent-white-100 pb-4">
                      <h3 className="font-semibold text-lg mb-3 text-glimere-primary flex items-center gap-2">
                        <User className="w-5 h-5" />
                        Personal Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <p className="text-glimere-dark"><span className="font-medium">Full Name:</span> {data.fullName}</p>
                          <p className="text-glimere-dark"><span className="font-medium">Email:</span> {data.email}</p>
                          <p className="text-glimere-dark"><span className="font-medium">Phone:</span> {data.phone}</p>
                          <p className="text-glimere-dark"><span className="font-medium">Date of Birth:</span> {data.dateOfBirth}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-glimere-dark"><span className="font-medium">Business Name:</span> {data.businessName || 'Not provided'}</p>
                          <p className="text-glimere-dark"><span className="font-medium">Country:</span> {data.country}</p>
                          <p className="text-glimere-dark"><span className="font-medium">Address:</span> {data.address}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Creator Profile */}
                    {data.creatorType.length > 0 && (
                      <div className="border-b border-transparent-white-100 pb-4">
                        <h3 className="font-semibold text-lg mb-3 text-glimere-primary flex items-center gap-2">
                          <Award className="w-5 h-5" />
                          Creator Profile
                        </h3>
                        <div className="space-y-2 text-sm">
                          <p className="text-glimere-dark"><span className="font-medium">Creator Type:</span> 
                            <span className="ml-2">
                              {data.creatorType.map(type => (
                                <span key={type} className="inline-block bg-glimere-aesthetic-2/50 px-2 py-1 rounded-md mr-2 mb-1">{type}</span>
                              ))}
                            </span>
                          </p>
                          <p className="text-glimere-dark"><span className="font-medium">Experience:</span> {data.experienceYears} years</p>
                          <p className="text-glimere-dark"><span className="font-medium">Portfolio Links:</span> {data.portfolioLinks}</p>
                          <p className="text-glimere-dark"><span className="font-medium">Specializations:</span> 
                            <span className="ml-2">
                              {data.specializations.map(spec => (
                                <span key={spec} className="inline-block bg-glimere-aesthetic-1/50 px-2 py-1 rounded-md mr-2 mb-1 text-xs">{spec}</span>
                              ))}
                            </span>
                          </p>
                          {data.technicalSkills && (
                            <p className="text-glimere-dark"><span className="font-medium">Technical Skills:</span> {data.technicalSkills}</p>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* Business Information */}
                    <div className="border-b border-transparent-white-100 pb-4">
                      <h3 className="font-semibold text-lg mb-3 text-glimere-primary flex items-center gap-2">
                        <Briefcase className="w-5 h-5" />
                        Business Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <p className="text-glimere-dark"><span className="font-medium">Lead Time:</span> {data.leadTime}</p>
                          <p className="text-glimere-dark"><span className="font-medium">Monthly Capacity:</span> {data.monthlyCapacity}</p>
                          <p className="text-glimere-dark"><span className="font-medium">Pricing Structure:</span> {data.pricingStructure}</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-glimere-dark"><span className="font-medium">Payment Method:</span> {data.paymentMethod}</p>
                          <p className="text-glimere-dark"><span className="font-medium">Shipping Capability:</span> 
                            <span className="ml-2">
                              {data.shippingCapability.map(capability => (
                                <span key={capability} className="inline-block bg-glimere-aesthetic-2/50 px-2 py-1 rounded-md mr-2 mb-1 text-xs">{capability}</span>
                              ))}
                            </span>
                          </p>
                        </div>
                      </div>
                      {data.returnPolicy && (
                        <p className="text-glimere-dark mt-2"><span className="font-medium">Return Policy:</span> {data.returnPolicy}</p>
                      )}
                    </div>
                    
                    {/* Brand & Fashion Interests */}
                    <div className="border-b border-transparent-white-100 pb-4">
                      <h3 className="font-semibold text-lg mb-3 text-glimere-primary flex items-center gap-2">
                        <Heart className="w-5 h-5" />
                        Brand & Fashion Interests
                      </h3>
                      <div className="space-y-3 text-sm">
                        {data.brandMission && (
                          <div>
                            <p className="text-glimere-dark font-medium mb-1">Brand Mission:</p>
                            <p className="text-glimere-dark/80 bg-glimere-aesthetic-1/30 p-3 rounded-lg">{data.brandMission}</p>
                          </div>
                        )}
                        {data.authenticFashion && (
                          <div>
                            <p className="text-glimere-dark font-medium mb-1">Authentic Fashion Philosophy:</p>
                            <p className="text-glimere-dark/80 bg-glimere-aesthetic-2/30 p-3 rounded-lg">{data.authenticFashion}</p>
                          </div>
                        )}
                        {data.fashionInterests.length > 0 && (
                          <div>
                            <p className="text-glimere-dark font-medium mb-2">Fashion Interests:</p>
                            <div className="flex flex-wrap gap-2">
                              {data.fashionInterests.map(interest => (
                                <span key={interest} className="bg-glimere-aesthetic-1/50 px-2 py-1 rounded-md text-xs">{interest}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        {data.preferredMaterials.length > 0 && (
                          <div>
                            <p className="text-glimere-dark font-medium mb-2">Preferred Materials:</p>
                            <div className="flex flex-wrap gap-2">
                              {data.preferredMaterials.map(material => (
                                <span key={material} className="bg-glimere-aesthetic-2/50 px-2 py-1 rounded-md text-xs">{material}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        {data.whyGlimere && (
                          <div>
                            <p className="text-glimere-dark font-medium mb-1">Why Glimere:</p>
                            <p className="text-glimere-dark/80 bg-glimere-aesthetic-1/30 p-3 rounded-lg">{data.whyGlimere}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Social Media Presence */}
                    <div>
                      <h3 className="font-semibold text-lg mb-3 text-glimere-primary flex items-center gap-2">
                        <Globe className="w-5 h-5" />
                        Social Media Presence
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          {data.socialMedia.instagram && (
                            <p className="text-glimere-dark"><span className="font-medium">Instagram:</span> {data.socialMedia.instagram}</p>
                          )}
                          {data.socialMedia.facebook && (
                            <p className="text-glimere-dark"><span className="font-medium">Facebook:</span> {data.socialMedia.facebook}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          {data.socialMedia.twitter && (
                            <p className="text-glimere-dark"><span className="font-medium">Twitter/X:</span> {data.socialMedia.twitter}</p>
                          )}
                          {data.socialMedia.linkedin && (
                            <p className="text-glimere-dark"><span className="font-medium">LinkedIn:</span> {data.socialMedia.linkedin}</p>
                          )}
                        </div>
                      </div>
                      {data.socialMedia.other && (
                        <p className="text-glimere-dark mt-2"><span className="font-medium">Other Platforms:</span> {data.socialMedia.other}</p>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Step 8: Thank You */}
            {currentStep === 8 && (
              <div className="text-center animate-fade-in">
                <div className="mb-8">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-100 via-primary-100/80 to-primary-100/60 rounded-full flex items-center justify-center animate-scale-in shadow-2xl">
                    <Heart className="w-16 h-16 text-light animate-pulse" />
                  </div>
                  <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-100 via-primary-100/80 to-primary-100/60 bg-clip-text text-transparent">Thank you for joining Glimere!</h1>
                  <p className="text-xl text-dark/70 mb-8 max-w-2xl mx-auto">
                    We have received your application and will review it shortly. We will be in touch soon with further instructions and next steps.
                  </p>
                </div>
                
                <Card className="p-8 mb-8 bg-transparent-white-200 backdrop-blur-xl border border-transparent-white-100 shadow-2xl">
                  <div className="text-center">
                    <Star className="w-16 h-16 mx-auto mb-4 text-primary-100" />
                    <h3 className="text-xl font-semibold mb-4 text-dark">What happens next?</h3>
                    <div className="space-y-3 text-dark/80">
                      <p className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary-100" />
                        Our team will review your application within 24-48 hours
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary-100" />
                        You'll receive an email with your dashboard access
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary-100" />
                        We'll guide you through setting up your first collection
                      </p>
                    </div>
                  </div>
                </Card>
                
                <div className="text-center">
                  <p className="text-dark/70 mb-6">In the meantime, explore what makes Glimere special:</p>
                  <div className="flex justify-center gap-4">
                    <Button variant="outline" className="bg-transparent-white-200 backdrop-blur-sm border-primary-100/30 text-dark hover:bg-transparent-white-300">
                      Learn About Our Platform
                    </Button>
                    <Button className="bg-gradient-to-r from-primary-100 to-primary-100/80 text-light shadow-xl hover:from-primary-100/90 hover:to-primary-100/70">
                      Visit Creator Showcase
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          {currentStep < 8 && (
            <div className="flex justify-between mt-12">
              <Button 
                variant="outline" 
                onClick={goToPrevious}
                disabled={currentStep === 1}
                className="flex items-center space-x-2 bg-transparent-white-200 backdrop-blur-sm border-primary-100/30 text-dark hover:bg-transparent-white-300"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>
              
              <Button 
                onClick={goToNext}
                disabled={
                  (currentStep === 1 && !data.apparelType) ||
                  (currentStep === 2 && (!data.fullName || !data.email || !data.phone))
                }
                className="bg-gradient-to-r from-primary-100 to-primary-100/80 text-light flex items-center space-x-2 shadow-xl hover:from-primary-100/90 hover:to-primary-100/70"
              >
                <span>{currentStep === 7 ? 'Submit Application' : 'Continue'}</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingFlow;
