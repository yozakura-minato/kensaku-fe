"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AuthHeader } from "@/components/custom/auth";
import { useState } from "react"
import { toast } from "sonner"
import { ERROR_MESSAGES } from "@/lib/message"
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  /* ====== STATES ====== */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* ====== HANDLERS ====== */
  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value.trim());
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value.trim());
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/");
    console.clear();
    console.log("Email: " + email);
    console.log("Password: " + password);
    toast.success(ERROR_MESSAGES["SIGN_IN.SUCCESS"]);
  }

  /* ====== RENDER ====== */
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md space-y-8">

        <AuthHeader />

        <Card className="border-border/40">

          {/* Form header */}
          <CardHeader className="space-y-1 justify-center text-center">
            <CardTitle className="text-3xl">Sign in</CardTitle>
            <CardDescription>Enter details below to access to your account</CardDescription>
          </CardHeader>

          {/* Form body */}
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" required
                  onChange={handleEmailChange} />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/auth/reset-password"
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" required
                  onChange={handlePasswordChange} />
              </div>
            </CardContent>

            {/* Form footer */}
            <CardFooter className="flex flex-col gap-4 pt-6">
              <Button className="w-full">Sign in</Button>
              <div className="text-center text-sm text-muted-foreground">
                {"Don't have an account? "}
                <Link href="/auth/sign-up" className="text-foreground hover:underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
