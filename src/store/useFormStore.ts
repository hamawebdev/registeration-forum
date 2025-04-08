import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

export type FormData = {
  name: string;
  email: string;
  department: string;
  year: string;
};

export type FormErrors = {
  name?: string;
  email?: string;
  department?: string;
  year?: string;
};

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

type FormState = {
  formData: FormData;
  errors: FormErrors;
  status: FormStatus;
  errorMessage: string;
  updateField: <K extends keyof FormData>(field: K, value: FormData[K]) => void;
  validateForm: () => boolean;
  resetForm: () => void;
  submitForm: () => Promise<void>;
  setStatus: (status: FormStatus) => void;
  setErrorMessage: (message: string) => void;
};

const defaultFormData: FormData = {
  name: '',
  email: '',
  department: '',
  year: ''
};

export const useFormStore = create<FormState>()(
  persist(
    (set, get) => ({
      formData: { ...defaultFormData },
      errors: {},
      status: 'idle',
      errorMessage: '',
      
      updateField: (field, value) => {
        set((state) => ({
          formData: {
            ...state.formData,
            [field]: value,
          },
          // Clear error for this field when user updates it
          errors: {
            ...state.errors,
            [field]: undefined,
          }
        }));
      },
      
      validateForm: () => {
        const { formData } = get();
        const errors: FormErrors = {};
        
        // Validate name
        if (!formData.name.trim()) {
          errors.name = 'Name is required';
        }
        
        // Validate email
        if (!formData.email.trim()) {
          errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          errors.email = 'Please enter a valid email address';
        }
        
        // Validate department
        if (!formData.department.trim()) {
          errors.department = 'Department is required';
        }
        
        // Validate year
        if (!formData.year.trim()) {
          errors.year = 'Year is required';
        }
        
        // Update errors state
        set({ errors });
        
        // Return true if no errors, false otherwise
        return Object.keys(errors).length === 0;
      },
      
      resetForm: () => {
        set({
          formData: { ...defaultFormData },
          errors: {},
          status: 'idle',
          errorMessage: '',
        });
      },
      
      submitForm: async () => {
        const isValid = get().validateForm();
        
        if (!isValid) {
          return;
        }
        
        set({ status: 'submitting' });
        
        try {
          const formData = get().formData;
          
          // Prepare the data in the format expected by the Django backend
          const requestData = {
            name: formData.name,
            email: formData.email,
            department: formData.department,
            year: formData.year
          };
          
          // Send the request to /api/register
          const response = await axios.post('/api/register', requestData, {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
          });
          
          // Set success status
          set({ status: 'success' });
        } catch (error) {
          console.error('API Error:', error);
          let errorMessage = '';
          
          if (axios.isAxiosError(error)) {
            if (error.response) {
              const responseData = error.response.data;
              
              // Show only the curse message if it exists
              errorMessage = responseData?.curse || 'An unexpected error occurred';
            } else {
              errorMessage = 'Unable to connect to the server';
            }
          } else {
            errorMessage = 'An unexpected error occurred';
          }
          
          set({
            status: 'error',
            errorMessage: errorMessage
          });
        }
      },
      
      setStatus: (status) => set({ status }),
      setErrorMessage: (message) => set({ errorMessage: message }),
    }),
    {
      name: 'registration-form',
    }
  )
);
