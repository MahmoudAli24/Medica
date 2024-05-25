"use client"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {
    Form, FormControl, FormField, FormItem, FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Checkbox} from "@/components/ui/checkbox"
import {CiLock, CiMail} from "react-icons/ci";
import Link from "next/link";

const formSchema = z.object({
    email: z.string().email().min(2, {
        message: "Email must be at least 2 characters",
    }), password: z.string().min(6, {
        message: "Password must be at least 6 characters",
    }), rememberMe: z.boolean(),
});

const SignInForm = () => {
    const form = useForm({
        resolver: zodResolver(formSchema), defaultValues: {
            email: "", password: "", rememberMe: false, // Add a new default value for rememberMe
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
                control={form.control}
                name="email"
                render={({field}) => (<FormItem>
                    <FormControl>
                        <div className="flex items-center relative text-white">
                                    <span className="absolute top-50 start-[1.2rem]">
                                        <CiMail size={24}/>
                                    </span>
                            <Input placeholder="Email" type="email"
                                   className={"ps-14 bg-white/10 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-none placeholder:text-white/70 autofill:!bg-transparent"} {...field} />
                        </div>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}
            />
            <FormField
                control={form.control}
                name="password"
                render={({field}) => (<FormItem>
                    <FormControl>
                        <div className="flex items-center relative text-white">
                                    <span className="absolute top-50 start-[1.2rem]">
                                        <CiLock size={24}/>
                                    </span>
                            <Input type="password" placeholder="Password"
                                   className={"ps-14 bg-white/10 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-none placeholder:text-white/70"} {...field} />
                        </div>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}
            />
            <FormField
                control={form.control}
                name="rememberMe"
                render={({field}) => (<FormItem>
                    <FormControl>
                        <div className="flex justify-between items-center text-white">
                            <label className="flex items-center">

                                <Checkbox
                                    onCheckedChange={(checked) => {
                                        field.onChange(checked);
                                    }}
                                    checked={field.value}
                                    className="form-checkbox h-4 w-4 text-blue-500"
                                />
                                <span className="ml-2 text-white">Remember me</span>
                            </label>
                            <Link href={"/"} className={"underline"}>
                                Forgot your password
                            </Link>
                        </div>
                    </FormControl>
                </FormItem>)}
            />
            <button type="submit"
                    className={"w-full py-4 border-2 rounded border-[--secondary-color] text-[--secondary-color] text-[24px] font-bold uppercase hover:bg-[--secondary-color] hover:text-white transition"}>Enter
            </button>
        </form>
    </Form>);
};

export default SignInForm;
