"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form, FormControl, FormField, FormItem, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { CiLock, CiMail } from "react-icons/ci";
import Link from "next/link";

const SignInForm = ({ dict }) => {
    const formSchema = z.object({
        email: z.string().email({ message: dict.validation.EmailInvalid }).min(2, { message: dict.validation.EmailMinLength }),
        password: z.string().min(6, { message: dict.validation.PasswordMinLength }),
        rememberMe: z.boolean(),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
    });

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const req = await fetch("https://rwaq-backend-express-3fcj.vercel.app/auth/login",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            const res = await req.json();
            console.log("res=>", res)
        } catch (e){
            console.log(e);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="flex items-center relative text-white">
                                    <span className="absolute top-50 start-[1.2rem]">
                                        <CiMail size={24} />
                                    </span>
                                    <Input
                                        placeholder={dict.email}
                                        type="email"
                                        className="ps-14 bg-white/10 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-none placeholder:text-white/70 autofill:!bg-transparent"
                                        {...field}
                                    />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="flex items-center relative text-white">
                                    <span className="absolute top-50 start-[1.2rem]">
                                        <CiLock size={24} />
                                    </span>
                                    <Input
                                        type="password"
                                        placeholder={dict.password}
                                        className="ps-14 bg-white/10 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-none placeholder:text-white/70"
                                        {...field}
                                    />
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className="flex justify-between items-center text-white">
                                    <label className="flex items-center">
                                        <Checkbox
                                            onCheckedChange={field.onChange}
                                            checked={field.value}
                                            className="form-checkbox h-4 w-4 text-blue-500"
                                        />
                                        <span className="ml-2 text-white">{dict.rememberMe}</span>
                                    </label>
                                    <Link href="/" className="underline">
                                        {dict.forgotPassword}
                                    </Link>
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <button
                    type="submit"
                    className="w-full py-2 md:py-4 border-2 rounded border-[--secondary-color] text-[--secondary-color] text-[24px] font-bold uppercase hover:bg-[--secondary-color] hover:text-white transition"
                >
                    {dict.enter}
                </button>
            </form>
        </Form>
    );
};

export default SignInForm;
