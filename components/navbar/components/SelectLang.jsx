"use client";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { BsGlobe } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getCookie, setCookie } from 'cookies-next';

const SelectLang = () => {
    const pathname = usePathname();
    const router = useRouter();
    const [selectedLang, setSelectedLang] = useState('en');

    useEffect(() => {
        // Read language from cookie
        const cookieLang = getCookie('NEXT_LOCALE');
        if (cookieLang) {
            setSelectedLang(cookieLang);
        } else {
            // Extract the language part from the pathname
            const lang = pathname.split('/')[1]; // Assuming the language is the first part of the URL
            if (lang === 'en' || lang === 'ar') {
                setSelectedLang(lang);
                setCookie('NEXT_LOCALE', lang);
            } else {
                setSelectedLang('en'); // Default to English if the language is not found
                setCookie('NEXT_LOCALE', 'en');
            }
        }
    }, [pathname]);

    const handleLangChange = (lang) => {
        setSelectedLang(lang);
        setCookie('NEXT_LOCALE', lang);
        // Change the URL to reflect the selected language
        const newPathname = `/${lang}${pathname.substring(3)}`; // Assuming language is 2 characters long
        router.push(newPathname);
    };

    return (
        <DropdownMenu modal={true}>
            <DropdownMenuTrigger className={"bg-transparent border-none"} asChild>
                <Button variant="outline">
                    <BsGlobe size={25} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Select Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={selectedLang} onValueChange={handleLangChange}>
                    <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="ar">عربى</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default SelectLang;
