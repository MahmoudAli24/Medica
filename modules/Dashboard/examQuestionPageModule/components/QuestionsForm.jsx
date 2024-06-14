"use client";
import { useState, useEffect } from "react";
import { submitExamResult } from "@/app/actions/coursesExamsAction";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TypographyH3 } from "@/components/typography/TypographyH3";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const QuestionsForm = ({ examQuestion }) => {
    const { toast } = useToast();
    const [answers, setAnswers] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [unansweredQuestions, setUnansweredQuestions] = useState([]);

    const handleAnswerChange = (questionNumber, answer) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionNumber]: answer,
        }));
    };

    useEffect(() => {
        console.log("answers", answers);
    }, [answers]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        // Validate if all questions are answered
        const newUnansweredQuestions = examQuestion.sections.flatMap(section =>
            section.questions.filter(question => !answers[question.questionNumber])
        );

        if (newUnansweredQuestions.length > 0) {
            setUnansweredQuestions(newUnansweredQuestions.map(q => q.questionNumber));
            toast({
                variant: "warning",
                title: "Incomplete Submission",
                description: "Please answer all questions before submitting.",
            });
            setIsLoading(false);
            return;
        }

        setUnansweredQuestions([]);

        try {
            await submitExamResult(answers);
            toast({
                title: "Success",
                description: "Your answers have been submitted.",
            });
        } catch (error) {
            console.error("Error submitting answers:", error);
            setError(error);
            toast({
                variant: "destructive",
                title: "Submission Failed",
                description: "There was an error submitting your answers. Please try again.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Accordion type="single" defaultValue={'item-1'} collapsible>
                {examQuestion.sections.map((section, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger arrow={<span className="font-bold text-2xl text-[--secondary-color]">-</span>}>
                            {section.sectionTitle}
                        </AccordionTrigger>
                        <AccordionContent className="space-y-6">
                            {section.questions.map((question, qIndex) => (
                                <div key={qIndex}>
                                    <TypographyH3 className={`mb-6 ${unansweredQuestions.includes(question.questionNumber) ? 'text-red-600' : ''}`}>
                                        <span className="inline-flex w-[50px] h-[50px] bg-[#2A79E2] rounded text-white items-center justify-center font-semibold me-5">
                                            {question.questionNumber}
                                        </span>
                                        {question.questionText}
                                    </TypographyH3>
                                    <RadioGroup
                                        className="sm:ms-16 space-y-3"
                                        onValueChange={(value) => handleAnswerChange(question.questionNumber, value)}
                                    >
                                        {question.answers.map((answer, aIndex) => (
                                            <div key={aIndex} className="flex items-center space-x-2">
                                                <RadioGroupItem value={answer} id={`question-${qIndex}-answer-${aIndex}`} />
                                                <Label htmlFor={`question-${qIndex}-answer-${aIndex}`}>{answer}</Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
            {error && <p className="text-red-600 mt-4">An error occurred: {error.message}</p>}
            <Button type="submit" disabled={isLoading} className="mt-3 bg-[--main-color]" size="lg">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} Submit
            </Button>
        </form>
    );
};

export default QuestionsForm;
