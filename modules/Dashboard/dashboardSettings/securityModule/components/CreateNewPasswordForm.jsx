"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
    "old-password": z.string().min(8, {
        message: "Username must be at least 8 characters.",
    }),
    "new-password": z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    "confirm-new-password": z.string().min(8, {
        message: "Password must be at least 8 characters.",
    })
}).refine((data) => data["new-password"] === data["confirm-new-password"], {
    message: "Passwords don't match",
    path:["confirm-new-password"]
});

const CreateNewPasswordForm = () => {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            "old-password": "",
            "new-password":"",
            "confirm-new-password":""
        },
    })

    async function onSubmit(data) {
        const parseData = await FormSchema.parseAsync(data);
        console.log("Data=>", data)
        console.log("parseData" , parseData);
    }
    return(
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/4 space-y-6">
                    <FormField
                        control={form.control}
                        name="old-password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className={"capitalize text-gray-500"}>old-password</FormLabel>
                                <FormControl>
                                    <Input type={"password"} className={"bg-[#F5F7F9] border-none rounded-none"} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="new-password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className={"capitalize text-gray-500"}>New-password</FormLabel>
                                <FormControl>
                                    <Input type={"password"} className={"bg-[#F5F7F9] border-none rounded-none"} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirm-new-password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className={"capitalize text-gray-500"}>Confirm New Password</FormLabel>
                                <FormControl>
                                    <Input type={"password"} className={"bg-[#F5F7F9] border-none rounded-none"} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default CreateNewPasswordForm