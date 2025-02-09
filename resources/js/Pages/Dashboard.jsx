import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

import { AppSidebar } from "@/components/app-sidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

import { CardsActivityGoal } from "@/components/cards/activity-goal";
import { CardsCalendar } from "@/components/cards/calendar";
import { CardsChat } from "@/components/cards/chat";
import { CardsCookieSettings } from "@/components/cards/cookie-settings";
import { CardsCreateAccount } from "@/components/cards/create-account";
import { CardsMetric } from "@/components/cards/metric";
import { CardsPaymentMethod } from "@/components/cards/payment-method";
import { CardsReportIssue } from "@/components/cards/report-issue";
import { CardsShare } from "@/components/cards/share";
import { CardsStats } from "@/components/cards/stats";
import { CardsTeamMembers } from "@/components/cards/team-members";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Overview } from "@/Components/OverView";
import { RecentSales } from "@/Components/RecentSales";

export default function Dashboard() {   
    return (
        <AuthenticatedLayout>
            <div className="flex-1 space-y-4 p-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Dashboard
                    </h2>
                    <div className="flex items-center space-x-2">
                        {/* <CalendarDateRangePicker /> */}
                        {/* <Button>Download</Button> */}
                    </div>
                </div>
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="analytics" disabled>
                            Analytics
                        </TabsTrigger>
                        <TabsTrigger value="reports" disabled>
                            Reports
                        </TabsTrigger>
                        <TabsTrigger value="notifications" disabled>
                            Notifications
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Total Revenue
                                    </CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        $45,231.89
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        +20.1% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Subscriptions
                                    </CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        +2350
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        +180.1% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Sales
                                    </CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <rect
                                            width="20"
                                            height="14"
                                            x="2"
                                            y="5"
                                            rx="2"
                                        />
                                        <path d="M2 10h20" />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        +12,234
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        +19% from last month
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Active Now
                                    </CardTitle>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="h-4 w-4 text-muted-foreground"
                                    >
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">
                                        +573
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        +201 since last hour
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <Card className="col-span-4">
                                <CardHeader>
                                    <CardTitle>Overview</CardTitle>
                                </CardHeader>
                                <CardContent className="pl-2">
                                    <Overview />
                                </CardContent>
                            </Card>
                            <Card className="col-span-3">
                                <CardHeader>
                                    <CardTitle>Recent Sales</CardTitle>
                                    <CardDescription>
                                        You made 265 sales this month.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <RecentSales />
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
                <div className="md:grids-col-2 grid md:gap-4 lg:grid-cols-10 xl:grid-cols-11 xl:gap-4">
                    <div className="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">
                        <CardsStats />
                        <div className="grid gap-1 sm:grid-cols-[260px_1fr] md:hidden">
                            <CardsCalendar />
                            <div className="pt-3 sm:pl-2 sm:pt-0 xl:pl-4">
                                <CardsActivityGoal />
                            </div>
                            <div className="pt-3 sm:col-span-2 xl:pt-4">
                                <CardsMetric />
                            </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                            <div className="space-y-4 xl:space-y-4">
                                <CardsTeamMembers />
                                <CardsCookieSettings />
                                <CardsPaymentMethod />
                            </div>
                            <div className="space-y-4 xl:space-y-4">
                                <CardsChat />
                                <CardsCreateAccount />
                                <div className="hidden xl:block">
                                    <CardsReportIssue />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 lg:col-span-6 xl:col-span-5 xl:space-y-4">
                        <div className="hidden gap-1 sm:grid-cols-[260px_1fr] md:grid">
                            <CardsCalendar />
                            <div className="pt-3 sm:pl-2 sm:pt-0 xl:pl-3">
                                <CardsActivityGoal />
                            </div>
                            <div className="pt-3 sm:col-span-2 xl:pt-3">
                                <CardsMetric />
                            </div>
                        </div>
                        <div className="hidden md:block">
                            {/* <CardsDataTable /> */}
                        </div>
                        <CardsShare />
                        <div className="xl:hidden">
                            <CardsReportIssue />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
