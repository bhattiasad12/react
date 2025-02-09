import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ModeToggle } from "@/Components/mode-toggle";
import { UserNav } from "@/Components/user-nav";
import { ScrollArea } from "@/Components/ui/scroll-area";

export default function AuthenticatedLayout({ header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    return (
        <SidebarProvider>
            <AppSidebar variant="floating" />
            <ScrollArea className="h-full w-full flex-1 [&>[data-radix-scroll-area-viewport]]:max-h-[calc(100vh-10px)]">
                <SidebarInset className="px-4">
                    {/* Floating Header Section */}
                    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 pt-2">
                        <header className="flex h-16 items-center gap-4 rounded-lg border bg-card p-4 text-card-foreground shadow-sm ">
                            <div className="container mx-auto flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <SidebarTrigger className="-ml-1" />
                                    <Separator
                                        orientation="vertical"
                                        className="mr-2 h-4"
                                    />
                                    <Breadcrumb>
                                        <BreadcrumbList>
                                            <BreadcrumbItem className="hidden md:block">
                                                <BreadcrumbLink href="#">
                                                    {usePage().component}
                                                </BreadcrumbLink>
                                            </BreadcrumbItem>
                                        </BreadcrumbList>
                                    </Breadcrumb>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ModeToggle />
                                    <UserNav />
                                </div>
                            </div>
                        </header>
                    </div>
                    {/* End of Floating Header Section */}

                    {header && (
                        <header>
                            <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8 sm:mx-6">
                                {header}
                            </div>
                        </header>
                    )}
                    <div className="flex flex-1 flex-col gap-6 px-4 pt-4">
                        {children}
                    </div>
                </SidebarInset>
            </ScrollArea>
        </SidebarProvider>
    );
}