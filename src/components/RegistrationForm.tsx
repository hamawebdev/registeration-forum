import React from 'react';
import { useFormStore } from '../store/useFormStore';
import LoadingSpinner from './LoadingSpinner';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { User, Mail, Book, Award } from "lucide-react";

const RegistrationForm: React.FC = () => {
  const {
    formData,
    errors,
    status,
    errorMessage,
    updateField,
    submitForm
  } = useFormStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm();
  };

  if (status === 'success') {
    return (
      <Card className="w-full max-w-md mx-auto bg-dungeon-gray/90 backdrop-blur-sm border-2 border-neon-blue rounded-lg shadow-[0_0_30px_theme('colors.shadow-purple')] success-appear relative">
        {/* Decorative elements */}
        <div className="absolute -top-3 -left-3 w-6 h-6 border-2 border-neon-blue rounded-full bg-void-black"></div>
        <div className="absolute -top-3 -right-3 w-6 h-6 border-2 border-neon-blue rounded-full bg-void-black"></div>
        <div className="absolute -bottom-3 -left-3 w-6 h-6 border-2 border-neon-blue rounded-full bg-void-black"></div>
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-2 border-neon-blue rounded-full bg-void-black"></div>

        <CardHeader className="text-center border-b-2 border-neon-blue/30">
          <CardTitle className="text-2xl font-agency font-bold flutter-neon-text tracking-wider uppercase">Registration Complete!</CardTitle>
          <CardDescription className="text-light-text">
            Your registration has been successfully submitted.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6 py-8">
          <div className="rounded-full bg-void-black border-2 border-neon-blue p-6 shadow-[0_0_15px_theme('colors.neon-blue')] animate-glow-pulse">
            <User
              size={48}
              className="text-neon-blue"
            />
          </div>
          <p className="text-center text-light-text font-oxanium text-lg">
            Thank you for registering. You will receive a confirmation shortly.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center border-t-2 border-neon-blue/30 pt-6">
          <Button
            variant="outline"
            onClick={() => useFormStore.getState().resetForm()}
            className="border-2 border-neon-blue/50 bg-void-black/70 text-neon-blue hover:bg-neon-blue/10 hover:text-white hover:shadow-[0_0_10px_theme('colors.neon-blue')] transition-all duration-300 font-agency tracking-wide"
          >
            <User className="mr-2 h-4 w-4" />
            REGISTER ANOTHER PERSON
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-appear">
      <Card className="w-full max-w-md mx-auto bg-dungeon-gray/90 backdrop-blur-sm border-2 border-neon-blue rounded-lg shadow-[0_0_30px_theme('colors.shadow-purple')]">
        {/* Decorative elements */}
        <div className="absolute -top-3 -left-3 w-6 h-6 border-2 border-neon-blue rounded-full bg-void-black"></div>
        <div className="absolute -top-3 -right-3 w-6 h-6 border-2 border-neon-blue rounded-full bg-void-black"></div>
        <div className="absolute -bottom-3 -left-3 w-6 h-6 border-2 border-neon-blue rounded-full bg-void-black"></div>
        <div className="absolute -bottom-3 -right-3 w-6 h-6 border-2 border-neon-blue rounded-full bg-void-black"></div>
        <CardHeader className="border-b-2 border-neon-blue/30">
          <div className="flex flex-col items-center justify-center mb-3">
            <div className="size-16 rounded-full bg-void-black border-2 border-neon-blue flex items-center justify-center mb-4 shadow-[0_0_15px_theme('colors.neon-blue')] animate-glow-pulse">
              <User
                className="text-neon-blue h-8 w-8"
              />
            </div>
            <CardTitle className="text-2xl font-agency font-bold flutter-neon-text tracking-wider uppercase">Player Registration</CardTitle>
          </div>
          <CardDescription className="text-blood-red text-center">
            Please fill out the following information to join the game  
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="name" className="text-neon-blue font-agency text-base flex items-center">
              <User className="h-4 w-4 mr-2 text-neon-blue" />
              NAME
            </Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              className={`border-2 ${errors.name ? "border-destructive" : "border-neon-blue/50"} bg-void-black/70 text-light-text focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 placeholder:text-light-text/50`}
            />
            {errors.name && (
              <p className="text-sm text-blood-red flutter-red-glow mt-1 font-oxanium">{errors.name}</p>
            )}
          </div>

          <div className="space-y-3">
            <Label htmlFor="email" className="text-neon-blue font-agency text-base flex items-center">
              <Mail className="h-4 w-4 mr-2 text-neon-blue" />
              EMAIL
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              className={`border-2 ${errors.email ? "border-destructive" : "border-neon-blue/50"} bg-void-black/70 text-light-text focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 placeholder:text-light-text/50`}
            />
            {errors.email && (
              <p className="text-sm text-blood-red flutter-red-glow mt-1 font-oxanium">{errors.email}</p>
            )}
          </div>

          <div className="space-y-3">
            <Label htmlFor="department" className="text-neon-blue font-agency text-base flex items-center">
              <Book className="h-4 w-4 mr-2 text-neon-blue" />
              DEPARTMENT
            </Label>
            <Select
              value={formData.department}
              onValueChange={(value) => updateField('department', value)}
            >
              <SelectTrigger className={`border-2 ${errors.department ? "border-destructive" : "border-neon-blue/50"} bg-void-black/70 text-light-text focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50`}>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="MI">MI</SelectItem>
                <SelectItem value="ST">ST</SelectItem>
                <SelectItem value="Gestion">Gestion</SelectItem>
              </SelectContent>
            </Select>
            {errors.department && (
              <p className="text-sm text-blood-red flutter-red-glow mt-1 font-oxanium">{errors.department}</p>
            )}
          </div>

          <div className="space-y-3">
            <Label htmlFor="year" className="text-neon-blue font-agency text-base flex items-center">
              <Award className="h-4 w-4 mr-2 text-neon-blue" />
              YEAR
            </Label>
            <Select
              value={formData.year}
              onValueChange={(value) => updateField('year', value)}
            >
              <SelectTrigger className={`border-2 ${errors.year ? "border-destructive" : "border-neon-blue/50"} bg-void-black/70 text-light-text focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50`}>
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="L1">L1</SelectItem>
                <SelectItem value="L2">L2</SelectItem>
                <SelectItem value="L3">L3</SelectItem>
                <SelectItem value="M1">M1</SelectItem>
                <SelectItem value="M2">M2</SelectItem>
                <SelectItem value="ENG1">ENG 1</SelectItem>
                <SelectItem value="ENG2">ENG 2</SelectItem>
              </SelectContent>
            </Select>
            {errors.year && (
              <p className="text-sm text-blood-red flutter-red-glow mt-1 font-oxanium">{errors.year}</p>
            )}
          </div>
        </CardContent>
        <CardFooter className="border-t-2 border-neon-blue/30 pt-6">
          <Button
            className="w-full bg-neon-blue text-void-black font-agency font-bold py-3 px-4 rounded-md tracking-wider uppercase hover:shadow-[0_0_15px_theme('colors.neon-blue')] hover:-translate-y-0.5 transition-all duration-300"
            type="submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? <LoadingSpinner /> : 'REGISTER NOW'}
          </Button>
        </CardFooter>
      </Card>

      {status === 'error' && (
        <div className="mt-6 p-4 bg-blood-red/10 text-blood-red rounded-md text-center border-2 border-blood-red/30 shadow-[0_0_15px_theme('colors.blood-red')] font-oxanium">
          <div className="flex items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="font-agency text-lg tracking-wider">ERROR</span>
          </div>
          <p className="flutter-red-glow">{errorMessage || 'An error occurred. Please try again.'}</p>
        </div>
      )}
    </form>
  );
};

export default RegistrationForm;
