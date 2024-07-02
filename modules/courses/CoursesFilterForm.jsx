"use client"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Slider} from "@nextui-org/slider";
import {usePathname, useRouter} from "next/navigation";

const CoursesFilterForm = ({dict}) => {
    const router = useRouter()
    const pathname = usePathname()
    const formSchema = z.object({
        searchKey: z.string().min(2, {
            message: dict.validation.usernameMinLength,
        }),
        duration: z.string(),
        courseType: z.string(),
        averagePrice: z.string(),
        ratings: z.array(z.number()),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            searchKey: "",
            duration: "",
            courseType: "",
            averagePrice: "",
            ratings:[1,50]
        },
    });

    function onSubmit(values) {
        const {searchKey, duration, courseType, averagePrice, ratings} = values;
        const query = {};

        if (searchKey) {
            query.searchKey = searchKey;
        }

        if (duration) {
            query.duration = duration;
        }

        if (courseType) {
            query.courseType = courseType;
        }

        if (averagePrice) {
            query.averagePrice = averagePrice;
        }

        if (ratings && ratings.length > 0) {
            query.ratings = ratings.join(',');
        }
        const queryString = new URLSearchParams(query).toString();
        router.push(pathname + "?" + queryString);
    }

    const durationOptions = dict.durationOptions;
    const courseTypeOptions = dict.courseTypeOptions;
    const averagePriceOptions = dict.averagePriceOptions;

    return (
        <div className={"container py-3 px-5 rounded bg-white md:absolute w-full md:top-0 md:end-0 md:-translate-y-[54px] md:shadow-xl"}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-3 flex-col md:flex-row">
                    <FormField
                        control={form.control}
                        name="searchKey"
                        render={({field}) => (
                            <FormItem className={"w-full md:w-3/12"}>
                                <FormLabel>
                                    {dict.labels.searchKey}
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder={dict.placeholders.search} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className={"flex flex-col items-center gap-4 justify-between w-full md:grid md:grid-cols-9 md:w-9/12"}>
                        <FormField
                            control={form.control}
                            name="duration"
                            render={({field}) => (
                                <FormItem className={"w-full md:col-span-2"}>
                                    <FormLabel>
                                        {dict.labels.duration}
                                    </FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder={dict.placeholders.duration}/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {durationOptions.map((option) => (
                                                <SelectItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="courseType"
                            render={({field}) => (
                                <FormItem className={"w-full md:col-span-2"}>
                                    <FormLabel>
                                        {dict.labels.courseType}
                                    </FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder={dict.placeholders.courseType}/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {courseTypeOptions.map((option) => (
                                                <SelectItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="averagePrice"
                            render={({field}) => (
                                <FormItem className={"w-full md:col-span-2"}>
                                    <FormLabel>
                                        {dict.labels.averagePrice}
                                    </FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder={dict.placeholders.averagePrice}/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {averagePriceOptions.map((option) => (
                                                <SelectItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ratings"
                            render={({field}) => (
                                <FormItem className={"w-full md:col-span-2"}>
                                    <Slider
                                        label={dict.labels.ratings}
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
                                </FormItem>
                            )}
                        />
                        <Button className={"w-full md:col-span-1"} type="submit">{dict.buttons.submit}</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default CoursesFilterForm;
