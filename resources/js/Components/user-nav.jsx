import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { Link, usePage } from "@inertiajs/react";
import {
    BadgeCheck,
    Bell,
    ChevronsUpDown,
    CreditCard,
    LogOut,
    Sparkles,
    UserRoundPen,
} from "lucide-react";
export function UserNav() {
    const user = usePage().props.auth.user;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                >
                    <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage
                            src="https://github.com/shadcn.pnga"
                            alt="user"
                        />
                        <AvatarFallback className="rounded-lg">
                            {user.name
                                .match(/(\b\S)?/g)
                                .join("")
                                .match(/(^\S|\S$)?/g)
                                .join("")
                                .toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {user.name}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {user.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <Link href={route("profile.edit")} className="w-full">
                        <DropdownMenuItem>
                            {" "}
                            <UserRoundPen />
                            Profile
                        </DropdownMenuItem>
                    </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <Link
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="w-full"
                >
                    <DropdownMenuItem>
                        <LogOut />
                        Log Out
                    </DropdownMenuItem>
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
