"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import ButtonBorder from "@/modules/Dashboard/dashboardSettings/components/ButtonBorder";
import {FaSave} from "react-icons/fa";


const FormSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    phoneNumber: z.string().min(10, {
        message: "Phone number must be at least 10 digits.",
    }),
    specialization: z.string().min(2, {
        message: "Specialization must be at least 2 characters.",
    }),
});


const EditPersonalInformation = ({ onCancel, onSave, initialData }) => {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: initialData,
    });

    function onSubmit(data) {
        toast({
            description: "Edited Successfully",
        });
        onSave(data);
    }

    return (
        <div className={"p-3 rounded-lg mt-5 border"}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 items-center md:grid-cols-3 gap-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input className={"bg-[#F5F7F9] border-none"} placeholder="Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input className={"bg-[#F5F7F9] border-none"} placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input className={"bg-[#F5F7F9] border-none"} placeholder="Phone Number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="specialization"
                        render={({ field }) => (
                            <FormItem className={"md:col-span-2"}>
                                <FormLabel>Specialization</FormLabel>
                                <FormControl>
                                    <Input className={"bg-[#F5F7F9] border-none"} placeholder="Specialization" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-end gap-2 md:mt-7">
                        <ButtonBorder type="button" variant="outline" onClick={onCancel}>Cancel Edit</ButtonBorder>
                        <ButtonBorder className={"bg-[--secondary-color] text-white"} type="submit">Save <span><FaSave size={20} className={"ms-2"} /></span></ButtonBorder>
                    </div>
                </form>
            </Form>
        </div>
    );
};

export default EditPersonalInformation;
