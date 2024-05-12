"use client"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Slider} from "@nextui-org/slider";
import {usePathname, useRouter, useSearchParams} from "next/navigation";


const CoursesFilterForm = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const formSchema = z.object({
        searchKey: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }), duration: z.string(), courseType: z.string(), averagePrice: z.string(),ratings:z.array(z.number()),
    });

    const form = useForm({
        resolver: zodResolver(formSchema), defaultValues: {
            searchKey: "", duration: "", courseType: "", averagePrice: "",ratings:[1,50]
        },
    });

    function onSubmit(values) {
        const {searchKey, duration, courseType, averagePrice, ratings} = values;
        const query = {};

        // Add searchKey if it has a value
        if (searchKey) {
            query.searchKey = searchKey;
        }

        // Add duration if it has a value
        if (duration) {
            query.duration = duration;
        }

        // Add courseType if it has a value
        if (courseType) {
            query.courseType = courseType;
        }

        // Add averagePrice if it has a value
        if (averagePrice) {
            query.averagePrice = averagePrice;
        }

        // Add ratings if it has a value
        if (ratings && ratings.length > 0) {
            query.ratings = ratings.join(',');
        }
        const queryString = new URLSearchParams(query).toString();
        router.push(pathname + "?" + queryString);
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

    return (<div className={"container py-3 px-5 rounded bg-white md:absolute w-full md:top-0 md:end-0 md:-translate-y-[54px] md:shadow-xl"}>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-3 flex-col md:flex-row">
                <FormField
                    control={form.control}
                    name="searchKey"
                    title="Search Key"
                    render={({field}) => (<>
                        <FormItem className={"w-full md:w-3/12"}>
                            <FormLabel>
                                Search Key
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="Search" {...field} />
                            </FormControl>
                        </FormItem>
                    </>)}
                />
                <div className={"flex flex-col items-center gap-4 justify-between w-full md:grid md:grid-cols-9 md:w-9/12"}>
                    <FormField
                        control={form.control}
                        name="duration"
                        render={({field}) => (<FormItem className={"w-full md:col-span-2"}>
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
                        render={({field}) => (<FormItem className={"w-full md:col-span-2"}>
                            <FormLabel>
                                Course Type
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
                        render={({field}) => (<FormItem className={"w-full md:col-span-2"}>
                            <FormLabel>
                                Average Price
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
                        render={({field}) => (<FormItem className={"w-full md:col-span-2"}>
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
                    <Button className={"w-full md:col-span-1"} type="submit">Submit</Button>
                </div>
            </form>
        </Form>

    </div>)
}

export default CoursesFilterForm;