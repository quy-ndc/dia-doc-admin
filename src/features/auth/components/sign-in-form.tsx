'use client'

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignInForm() {
  
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInFormData) => {
    console.log(data)
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-5">
      <div className="flex flex-col gap-2">
        <Label className="text-sm tracking-widest">Email</Label>
        <Input
          className="tracking-wider"
          placeholder="example@gmail.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <Label className="text-sm tracking-widest">Password</Label>
        <Input
          className="tracking-wider"
          type="password"
          placeholder="************"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <Button
        className="flex flex-row text-sm text-semibold items-center mt-4 capitalize hover:cursor-pointer"
        type="submit"
        variant={"outline"}
      >
        Sign In
        <LogIn size={22} />
      </Button>
    </form>
  );
}
