import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

const DynamicAccordion = ({items , className}) => {
    return(
        <Accordion type="single" collapsible>
            {items.map((item, index) => (
                <AccordionItem className={className} key={index} value={item.value}>
                    <AccordionTrigger arrow={item.iconTrigger}>
                        <div className={"text-[--main-color] flex items-center gap-2"}>
                            <span>{item.icon}</span>
                            <p>{item.title}</p>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}

export default DynamicAccordion