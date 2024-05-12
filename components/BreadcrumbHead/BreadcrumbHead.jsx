'use client'
import Link from 'next/link'
import {Fragment} from "react";
import {usePathname} from 'next/navigation'
import {
    Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {IoMdHome} from "react-icons/io";

const BreadcrumbHead = () => {
    const pathname = usePathname();

    // Split the pathname into segments and capitalize the first letter of each segment
    const segments = pathname.split('/').filter(Boolean).map((segment, index) => {
        if (index === 0) {
            return segment.toLowerCase(); // Keep the first segment in lowercase
        } else {
            return segment.charAt(0).toUpperCase() + segment.slice(1); // Capitalize the rest of the segments
        }
    });

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <Link className={"text-[#646E9F]"} href={"/"}>
                        <IoMdHome size={25}/>
                    </Link>
                </BreadcrumbItem>
                {segments.map((segment, index) => (
                    <Fragment key={index}>
                        <BreadcrumbSeparator className={"[&>svg]:size-6"}/>
                        <BreadcrumbItem className={"last:text-white lowercase text-lg last:underline"}>
                            <Link href={`/${segments.slice(0, index + 1).join('/')}`}>
                                {segment.replaceAll('-', ' ')}
                            </Link>
                        </BreadcrumbItem>
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}

export default BreadcrumbHead;
