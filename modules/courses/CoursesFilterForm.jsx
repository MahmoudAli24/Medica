"use client"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Slider} from "@nextui-org/slider";


const CoursesFilter = () => {
    const formSchema = z.object({
        searchKey: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }), duration: z.string(), courseType: z.string(), averagePrice: z.string(),ratings:z.array(z.number()),
    });

    const form = useForm({
        resolver: zodResolver(formSchema), defaultValues: {
            searchKey: "", duration: "0-2", courseType: "design", averagePrice: "0-50",ratings:[1,50]
        },
    });

    function onSubmit(values) {
        console.log(values);
    }

    const durationOptions = [{label: "0 - 2 hours", value: "0-2"}, {
        label: "2 - 4 hours", value: "2-4"
    }, {label: "4 - 6 hours", value: "4-6"}, {label: "6 - 8 hours", value: "6-8"},];

    const courseTypeOptions = [{label: "Web Development", value: "web-development"}, {
        label: "Data Science", value: "data-science"
    }, {label: "Design", value: "design"}, {label: "Business", value: "business"},];

    const averagePriceOptions = [{label: "Less than $50", value: "0-50"}, {
        label: "$50 - $100", value: "50-100"
    }, {label: "$100 - $200", value: "100-200"}, {label: "More than $200", value: "200-"},];

    return (<div className={"py-3 px-5 rounded bg-white absolute w-full top-0 end-0 -translate-y-[54px]"}>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-3 flex-col md:flex-row">
                <FormField
                    control={form.control}
                    name="searchKey"
                    title="Duration"
                    render={({field}) => (<>

                        <FormItem className={"w-3/12"}>
                            <FormLabel>
                                Duration
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="Search" {...field} />
                            </FormControl>
                        </FormItem>
                    </>)}
                />
                <div className={"grid grid-cols-9 w-9/12 items-center gap-4"}>
                    <FormField
                        control={form.control}
                        name="duration"
                        render={({field}) => (<FormItem className={"col-span-2"}>
                            <FormLabel>
                                Duration
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select duration"/>
                                </SelectTrigger>
                                <SelectContent>
                                    {durationOptions.map((option) => (<SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>))}
                                </SelectContent>
                            </Select>
                            <FormMessage/>
                        </FormItem>)}
                    />
                    <FormField
                        control={form.control}
                        name="courseType"
                        render={({field}) => (<FormItem className={"col-span-2"}>
                            <FormLabel>
                                Duration
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select course type"/>
                                </SelectTrigger>
                                <SelectContent>
                                    {courseTypeOptions.map((option) => (<SelectItem key={option.value} value={option.value}>
                                        {option.label}
                                    </SelectItem>))}
                                </SelectContent>
                            </Select>
                            <FormMessage/>
                        </FormItem>)}
                    />
                    <FormField
                        control={form.control}
                        name="averagePrice"
                        render={({field}) => (<FormItem className={"col-span-2"}>
                            <FormLabel>
                                Duration
                            </FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select average price range"/>
                                </SelectTrigger>
                                <SelectContent>
                                    {averagePriceOptions.map((option) => (
                                        <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                        </SelectItem>))}
                                </SelectContent>
                            </Select>
                            <FormMessage/>
                        </FormItem>)}
                    />
                    <FormField
                        control={form.control}
                        name="ratings"
                        render={({field}) => (<FormItem className={"col-span-2"}>
                            <Slider
                                label="Ratings"
                                step={1}
                                showTooltip={true}
                                minValue={1}
                                maxValue={51}
                                onChange={field.onChange} defaultValue={field.value}
                                className="max-w-md"
                                classNames={{
                                    filler:"bg-[--main-color] h-1",
                                    track:"items-center",
                                    thumb:"bg-[--secondary-color] after:bg-transparent w-4 h-4",
                                }}
                            />
                            <FormMessage/>
                        </FormItem>)}
                    />
                    <Button className={"col-span-1"} type="submit">Submit</Button>
                </div>
            </form>
        </Form>

    </div>)
}

export default CoursesFilter;