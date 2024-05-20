"use client"
import { useState } from "react";
import HeadingSection from "@/components/headingSection/HeadingSection";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const CourseLearn = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <section className={"pt-10 pb-8 container"}>
            <HeadingSection>What You will learn?</HeadingSection>
            <div className={"mt-6 lg:w-3/5 mx-auto"}>
                <Card className={"shadow-inner"}>
                    <CardContent className={"h-1/2 overflow-hidden"}>
                        <Accordion type="single" collapsible className="w-full">
                            <Collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger arrow={<IconTrigger/>} className={"font-bold text-lg"}>Section I</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger arrow={<IconTrigger/>} className={"font-bold text-lg"}>Section II</AccordionTrigger>
                                    <AccordionContent>
                                        Yes. It adheres to the WAI-ARIA design pattern.
                                    </AccordionContent>
                                </AccordionItem>
                                <CollapsibleContent className={`transition-all ${isExpanded ? "data-[state=open]:animate-slide-down" : "data-[state=closed]:animate-slide-up"}`}>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger arrow={<IconTrigger/>} className={"font-bold text-lg"}>Section III</AccordionTrigger>
                                        <AccordionContent>
                                            Yes. It adheres to the WAI-ARIA design pattern.
                                        </AccordionContent>
                                    </AccordionItem>
                                </CollapsibleContent>
                                <CollapsibleTrigger className={"text-center text-[--main-color] w-full"} onClick={toggleExpand}>
                                    {isExpanded ? "Show Less" : "Show More"}
                                </CollapsibleTrigger>
                            </Collapsible>
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

const IconTrigger=()=>{
    return(
        <span className={"font-bold text-[--secondary-color] text-xl"}>-</span>
    )
}

export default CourseLearn;
