import { Head, Link, router, useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Separator } from "@/Components/ui/separator";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import InputError from "@/Components/InputError";

export default function PostForm() {
    const { toast } = useToast();
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            title: "",
            content: "",
        });

    const submit = (e) => {
        e.preventDefault();

        post(route("posts.store"));
    };
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.target);
    //     const url = post
    //         ? route("posts.update", post.id)
    //         : route("posts.store");

    //     router.post(url, formData, {
    //         onSuccess: () => {
    //             toast({
    //                 title: "Success",
    //                 description: post
    //                     ? "Your post has been updated."
    //                     : "Your post has been created.",
    //                 duration: 3000,
    //             });
    //         },
    //         onError: (errors) => {
    //             toast({
    //                 title: "Error",
    //                 description: "There was an error submitting the form.",
    //                 variant: "destructive",
    //                 duration: 3000,
    //             });
    //         },
    //     });
    // };

    return (
        <AuthenticatedLayout>
            <div className="flex-1 space-y-4 p-6">
                <Head title={post ? "Edit Post" : "Create Post"} />

                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight">
                        {post ? "Edit Post" : "Create Post"}
                    </h2>
                </div>
                <Card>
                    {/* <CardHeader>
                        <CardTitle>Profile Information</CardTitle>
                        <CardDescription>
                            Update your account's profile information and email
                            address.
                        </CardDescription>
                    </CardHeader> */}
                    {/* <Separator/> */}
                    <form onSubmit={submit} className="mt-6 space-y-6">
                        <CardContent>
                            <div className="space-y-2">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    placeholder="Enter the post title"
                                />{" "}
                                <InputError
                                    message={errors.title}
                                    className="mt-2"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="content">Content</Label>
                                <Textarea
                                    id="content"
                                    name="content"
                                    placeholder="Enter the post content"
                                    rows={12}
                                />{" "}
                                <InputError
                                    message={errors.content}
                                    className="mt-2"
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit">Save</Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
