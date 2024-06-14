import Link from "next/link";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import classes from "./ExamSection.module.css";

const ExamSection = ({item}) => {
    const firstThreeSections = item.sections.slice(0, 3);
    const remainingSections = item.sections.slice(3);

    return (
        <Card>
            <CardHeader>
                <h2 className="text-2xl md:text-4xl font-bold text-[--main-color]">
                    <Link className={"hover:underline"} href={`/dashboard/exams/${item.id}`}>{item.examTitle}</Link>
                </h2>
            </CardHeader>
            <CardContent>
                <p className="text-[--secondary-color]">Exam:</p>
                <div>
                    <Accordion defaultValue={`${item.sections[0].id}`} type="single">
                        {firstThreeSections.map((section) => (
                            <AccordionItem key={section.id} value={section.id}>
                                <AccordionTrigger className="font-bold uppercase">
                                    {section.title}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul>
                                        {section.items.map((item, itemIndex) => (
                                            <li
                                                key={itemIndex}
                                                className={`${classes.blue} relative ps-8 before:absolute before:left-0 before:top-0 before:w-5 before:h-5 before:bg-no-repeat before:bg-contain before:bg-center`}
                                            >
                                                {itemIndex + 1} {item}
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    {remainingSections.length > 0 && (
                        <Collapsible>
                            <CollapsibleContent
                                className={"transition-opacity data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up"}>
                                <Accordion type="single">
                                    {remainingSections.map((section, index) => (
                                        <AccordionItem key={section.id} value={section.id}>
                                            <AccordionTrigger className="font-bold uppercase">
                                                {section.title}
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <ul>
                                                    {section.items.map((item, itemIndex) => (
                                                        <li
                                                            key={itemIndex}
                                                            className={`${classes.blue} relative ps-8 before:absolute before:left-0 before:top-0 before:w-5 before:h-5 before:bg-no-repeat before:bg-contain before:bg-center`}
                                                        >
                                                            {itemIndex + 1} {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </CollapsibleContent>
                            <CollapsibleTrigger className="text-center w-full mt-3  ">
                                Show More
                            </CollapsibleTrigger>
                        </Collapsible>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default ExamSection;
