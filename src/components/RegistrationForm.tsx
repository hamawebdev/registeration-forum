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
      <Card className="w-full max-w-md mx-auto sl-card shadow-xl success-appear border-sl-purple/30">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold text-sl-purple sl-purple-glow">Registration Complete!</CardTitle>
          <CardDescription className="text-slate-300">
            Your registration has been successfully submitted.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4 py-6">
          <div className="rounded-full bg-sl-purple/10 p-6 animate-glow-pulse">
            <User 
              size={48}
              className="text-sl-purple"
            />
          </div>
          <p className="text-center text-slate-300">
            Thank you for registering. You will receive a confirmation shortly.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button 
            variant="outline" 
            onClick={() => useFormStore.getState().resetForm()}
            className="border-sl-purple/30 text-sl-purple hover:bg-sl-purple/10 hover:text-white transition-all duration-300"
          >
            <User className="mr-2 h-4 w-4" />
            Register Another Person
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-appear">
      <Card className="w-full max-w-md mx-auto sl-card shadow-xl">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <div className="size-10 rounded-full bg-sl-purple/10 flex items-center justify-center mr-3 animate-glow-pulse">
              <User 
                className="text-sl-purple h-5 w-5" 
              />
            </div>
            <CardTitle className="text-2xl font-bold text-white sl-blue-glow">Registration Form</CardTitle>
          </div>
          <CardDescription className="text-slate-300 text-center">
            Please fill out the following information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-slate-300 flex items-center">
              <User className="h-4 w-4 mr-2 text-sl-purple" />
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => updateField('name', e.target.value)}
              className={`sl-input ${errors.name ? "border-destructive" : ""}`}
            />
            {errors.name && (
              <p className="text-sm text-destructive mt-1">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-300 flex items-center">
              <Mail className="h-4 w-4 mr-2 text-sl-purple" />
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              className={`sl-input ${errors.email ? "border-destructive" : ""}`}
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="department" className="text-slate-300 flex items-center">
              <Book className="h-4 w-4 mr-2 text-sl-purple" />
              Department
            </Label>
            <Select 
              value={formData.department} 
              onValueChange={(value) => updateField('department', value)}
            >
              <SelectTrigger className={`sl-input ${errors.department ? "border-destructive" : ""}`}>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent className="bg-sl-darker border-sl-purple/30 text-slate-200">
                <SelectItem value="MI">MI</SelectItem>
                <SelectItem value="ST">ST</SelectItem>
                <SelectItem value="Gestion">Gestion</SelectItem>
              </SelectContent>
            </Select>
            {errors.department && (
              <p className="text-sm text-destructive mt-1">{errors.department}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="year" className="text-slate-300 flex items-center">
              <Award className="h-4 w-4 mr-2 text-sl-purple" />
              Year
            </Label>
            <Select 
              value={formData.year} 
              onValueChange={(value) => updateField('year', value)}
            >
              <SelectTrigger className={`sl-input ${errors.year ? "border-destructive" : ""}`}>
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent className="bg-sl-darker border-sl-purple/30 text-slate-200">
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
              <p className="text-sm text-destructive mt-1">{errors.year}</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full sl-button font-medium tracking-wide" 
            type="submit" 
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? <LoadingSpinner /> : 'Register'}
          </Button>
        </CardFooter>
      </Card>
      
      {status === 'error' && (
        <div className="mt-4 p-4 bg-destructive/10 text-destructive rounded-md text-center border border-destructive/20 shadow-lg">
          {errorMessage || 'An error occurred. Please try again.'}
        </div>
      )}
    </form>
  );
};

export default RegistrationForm;
