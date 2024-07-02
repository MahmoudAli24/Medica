"use client"
import {zodResolver} from "@hookform/resolvers/zod"
import { useFormState } from 'react-dom'
import {useForm} from "react-hook-form"
import {z} from "zod"
import {
    Form, FormControl, FormField, FormItem, FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {CiLock, CiMail, CiUser} from "react-icons/ci";
import {LiaPhoneSolid} from "react-icons/lia";
import {signUpAction} from "@/app/[lang]/actions/authActions";

const formSchema = z.object({
    email: z.string().email().min(2, {
        message: "Email must be at least 2 characters",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters",
    }),
    confirmPassword: z.string().min(6, {
        message: "Password must be at least 6 characters",
    }),
    name: z.string().min(2, {
        message: "Name must be at least 2 characters",
    }),
    phoneNumber: z.string().min(11, {
        message: "Phone number must be at least 11 characters",
    }).max(11, {
        message: "Phone number must be at least 11 characters",
    })
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

const initialState = ""

const SignUpForm = () => {
    const [state, formAction] = useFormState(signUpAction, initialState)
    const form = useForm({
        resolver: zodResolver(formSchema), defaultValues: {
            email: "", password: "", rememberMe: false, name: "", phoneNumber: "", confirmPassword:""
        },
    });

    const onSubmit = async (formData) => {
        await formAction(formData)
    };

    return (<Form {...form}>
        <form action={onSubmit} className="space-y-4 border-t pt-4 border-white/20">
            <FormField
                control={form.control}
                name="name"
                render={({field}) => (<FormItem>
                    <FormControl>
                        <div className="flex items-center relative text-white">
                                    <span className="absolute top-50 start-[1.2rem]">
                                        <CiUser size={24}/>
                                    </span>
                            <Input placeholder="Write Your Name" type="text"
                                   className={"ps-14 bg-white/10 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-none placeholder:text-white/70 autofill:!bg-transparent"} {...field} />
                        </div>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}
            />
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
                name="phoneNumber"
                render={({field}) => (<FormItem>
                    <FormControl>
                        <div className="flex items-center relative text-white">
                                    <span className="absolute top-50 start-[1.2rem]">
                                        <LiaPhoneSolid size={24}/>
                                    </span>
                            <Input placeholder="Write Your Phone Number" type="text"
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
                name="confirmPassword"
                render={({field}) => (<FormItem>
                    <FormControl>
                        <div className="flex items-center relative text-white">
                                    <span className="absolute top-50 start-[1.2rem]">
                                        <CiLock size={24}/>
                                    </span>
                            <Input type="password" placeholder="Confirm Password"
                                   className={"ps-14 bg-white/10 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 border-none placeholder:text-white/70"} {...field} />
                        </div>
                    </FormControl>
                    <FormMessage/>
                </FormItem>)}
            />
            <button
                    className={"w-full py-2 md:py-4 border-2 rounded border-[--secondary-color] text-[24px] font-bold uppercase bg-[--secondary-color] text-[--main-color] transition"}>Register
            </button>
        </form>
    </Form>)
}

export default SignUpForm