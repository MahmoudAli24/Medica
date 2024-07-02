"use client"
import {Skeleton} from "@/components/ui/skeleton";

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <section className={"col-span-12 md:col-span-11 mt-14 w-full h-dvh"}>
            <div className="space-y-6">
                <div className="flex flex-col space-y-3">
                    <Skeleton className="h-8 w-1/2"/> {/* Title */}
                    <Skeleton className="h-4 w-1/4"/> {/* Subtitle */}
                </div>

                <div className="space-y-4">
                    <Skeleton className="h-6 w-1/4"/> {/* Section title */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                    </div>
                </div>

                <Skeleton className="h-6 w-1/4"/> {/* Show More */}

                <div className="space-y-4">
                    <Skeleton className="h-6 w-1/4"/> {/* Section title */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                    </div>
                </div>

                <div className="space-y-4">
                    <Skeleton className="h-6 w-1/4"/> {/* Section title */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                    </div>
                </div>
                <div className="space-y-4">
                    <Skeleton className="h-6 w-1/4"/> {/* Section title */}
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                        <Skeleton className="h-4 w-3/4"/> {/* List item */}
                    </div>
                </div>
            </div>
        </section>
    )
}