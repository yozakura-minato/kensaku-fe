"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { displayNameValidation, emailValidation, passwordValidation, confirmPasswordValidation } from "./validations"

export default function SignUpPage() {

  /* ====== STATES ====== */
  const [displayName, setDisplayName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  type FormErrors = {
    displayNameError: string,
    emailError: string,
    passwordError: string,
    confirmPasswordError: string
  };

  const [formErrors, setFormErrors] = useState<FormErrors>({
    displayNameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: ""
  });

  // Submit handler
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const getErrors: FormErrors = {
      displayNameError: displayNameValidation(displayName),
      emailError: emailValidation(email),
      passwordError: passwordValidation(password),
      confirmPasswordError: confirmPasswordValidation(confirmPassword, password)
    };

    setFormErrors(getErrors);

    if (!getErrors.displayNameError && !getErrors.emailError && !getErrors.passwordError && !getErrors.confirmPasswordError) {
      toast.success("Signed up successfully!");
    }
  }

  /* ====== RENDER ====== */
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md space-y-8">

        {/* Logo */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center space-x-2 font-bold text-xl">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Search className="w-5 h-5 text-primary-foreground" />
            </div>
            <span>KenSaku</span>
          </Link>
        </div>

        <Card className="border-border/40">

          {/* Form header */}
          <CardHeader className="space-y-1 justify-center text-center">
            <CardTitle className="text-3xl">Sign up</CardTitle>
            <CardDescription>Enter your details below to create an account</CardDescription>
          </CardHeader>

          {/* Form fields */}
          <form onSubmit={handleSubmit}>

            <CardContent className="space-y-4">

              <div className="space-y-2">
                <Label htmlFor="display-name">Display Name</Label>
                <Input id="display-name" placeholder="John Doe"
                  onChange={(e) => setDisplayName(e.target.value.trim())}
                />
                {formErrors.displayNameError && (
                  <p className="text-xs text-red-600">{formErrors.displayNameError}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value.trim())}
                />
                {formErrors.emailError && (
                  <p className="text-xs text-red-600">{formErrors.emailError}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password"
                  onChange={(e) => setPassword(e.target.value.trim())}
                />
                {formErrors.passwordError && (
                  <p className="text-xs text-red-600">{formErrors.passwordError}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password"
                  onChange={(e) => setConfirmPassword(e.target.value.trim())}
                />
                {formErrors.confirmPasswordError && (
                  <p className="text-xs text-red-600">{formErrors.confirmPasswordError}</p>
                )}
              </div>

            </CardContent>

            {/* Form actions */}
            <CardFooter className="flex flex-col gap-4 pt-6">
              <Button type="submit" className="w-full">Sign up</Button>
              <div className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/auth/signin" className="text-foreground hover:underline underline-offset-4">
                  Sign in
                </Link>
              </div>

            </CardFooter>

          </form>
        </Card>
      </div>
    </div>
  );
}