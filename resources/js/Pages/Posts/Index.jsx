import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { MoreHorizontal, Trash2, Edit, Copy, Star } from "lucide-react";

import { debounce } from "lodash";
import { useCallback, useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function Index({ posts, filters }) {
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [postToDelete, setPostToDelete] = useState(null);

    const debouncedSearch = useCallback(
        debounce((value) => {
            router.get(
                route("posts.index"),
                { search: value },
                { preserveState: true }
            );
        }, 300), // 300ms debounce delay
        []
    );

    const handleSearch = (e) => {
        const value = e.target.value;
        debouncedSearch(value);
    };

    const handleDeleteClick = (postId) => {
        setPostToDelete(postId);
        setIsDeleteDialogOpen(true);
    };

    const handleDeleteConfirm = () => {
        if (postToDelete) {
            router.delete(route("posts.destroy", postToDelete), {
                onSuccess: () => {
                    setIsDeleteDialogOpen(false);
                    setPostToDelete(null);
                },
            });
        }
    };

    const handleDeleteCancel = () => {
        setIsDeleteDialogOpen(false);
        setPostToDelete(null);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Posts" />

            <div className="flex-1 space-y-4 p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight">Posts</h2>
                    <div className="flex items-center space-x-2">
                        <Button>Add Post</Button>
                    </div>
                </div>

                {/* Search, Filter, and Order Controls */}
                <div className="flex items-center space-x-2">
                    <Input
                        placeholder="Search posts..."
                        defaultValue={filters.search}
                        onChange={handleSearch}
                        className="max-w-sm"
                    />
                </div>

                <div className="space-y-7">
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Published At</TableHead>
                                    <TableHead className="text-right">
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {posts.data?.length ? (
                                    posts.data.map((post) => (
                                        <TableRow key={post.id}>
                                            <TableCell>{post.id}</TableCell>
                                            <TableCell>{post.title}</TableCell>
                                            <TableCell>
                                                {new Date(
                                                    post.created_at
                                                ).toLocaleDateString()}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost">
                                                            <MoreHorizontal />
                                                            <span className="sr-only">
                                                                Open menu
                                                            </span>
                                                        </Button>   
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="w-[160px]">
                                                        <DropdownMenuItem>
                                                            <Edit className="mr-2 h-4 w-4" />
                                                            Edit
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Copy className="mr-2 h-4 w-4" />
                                                            Make a copy
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Star className="mr-2 h-4 w-4" />
                                                            Favorite
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem
                                                            onClick={() => handleDeleteClick(post.id)}
                                                            className="focus:text-red-600"
                                                        >
                                                            <Trash2 className="mr-2 h-4 w-4" />
                                                            Delete
                                                            <DropdownMenuShortcut>
                                                                ⌘⌫
                                                            </DropdownMenuShortcut>
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan="100%" className="h-24 text-center">
                                            No results.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>

                    <Pagination className="mt-6">
                        <PaginationContent>
                            {posts.data?.length
                                ? posts.links.map((link, index) =>
                                      link.url ? (
                                          <PaginationItem key={index}>
                                              {link.label.includes("Previous") ? (
                                                  <PaginationPrevious href={link.url} />
                                              ) : link.label.includes("Next") ? (
                                                  <PaginationNext href={link.url} />
                                              ) : (
                                                  <PaginationLink href={link.url} isActive={link.active}>
                                                      <span dangerouslySetInnerHTML={{ __html: link.label }} />
                                                  </PaginationLink>
                                              )}
                                          </PaginationItem>
                                      ) : (
                                          <PaginationItem key={index}>
                                              <span
                                                  className="cursor-not-allowed text-gray-400"
                                                  dangerouslySetInnerHTML={{ __html: link.label }}
                                              />
                                          </PaginationItem>
                                      )
                                  )
                                : null}
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>

            {/* Delete Confirmation Dialog */}
            <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the post.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={handleDeleteCancel}>
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDeleteConfirm}
                            className="bg-red-600 hover:bg-red-700"
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </AuthenticatedLayout>
    );
}