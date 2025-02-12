// import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useRef, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator"

import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
export default function DeleteUserForm({ className = "" }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Delete Account</CardTitle>
                    <CardDescription>
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted. Before deleting your
                        account, please download any data or information that
                        you wish to retain.
                    </CardDescription>
                </CardHeader>
                <CardFooter className="p-6 ">
                    {/* <Button onClick={confirmUserDeletion}>
                        Delete Account
                    </Button> */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button type="submit">Delete Account</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Are you sure you want to delete your
                                    account?
                                </DialogTitle>
                                <DialogDescription>
                                    Once your account is deleted, all of its
                                    resources and data will be permanently
                                    deleted. Please enter your password to
                                    confirm you would like to permanently delete
                                    your account.
                                </DialogDescription>
                                <div className="mt-6">
                                    <form onSubmit={deleteUser}>
                                        <Label
                                            htmlFor="password"
                                            className="sr-only"
                                        >
                                            Password
                                        </Label>

                                        <Input
                                            id="password"
                                            type="password"
                                            name="password"
                                            ref={passwordInput}
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value
                                                )
                                            }
                                            className="mt-1 block w-full"
                                            placeholder="Password"
                                        />

                                        <InputError
                                            message={errors.password}
                                            className="mt-2"
                                        />
                                        <div className="mt-6 flex justify-end">
                                            <DialogClose asChild>
                                                <Button
                                                    type="button"
                                                    variant="secondary"
                                                >
                                                    Close
                                                </Button>
                                            </DialogClose>
                                            <Button
                                                className="ms-3"
                                                disabled={processing}
                                            >
                                                Delete Account
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </CardFooter>

                <Modal show={confirmingUserDeletion} onClose={closeModal}>
                    <form onSubmit={deleteUser} className="p-6">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                            Are you sure you want to delete your account?
                        </h2>

                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            Once your account is deleted, all of its resources
                            and data will be permanently deleted. Please enter
                            your password to confirm you would like to
                            permanently delete your account.
                        </p>

                        <div className="mt-6">
                            <InputLabel
                                htmlFor="password"
                                value="Password"
                                className="sr-only"
                            />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="mt-1 block w-3/4"
                                isFocused
                                placeholder="Password"
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-6 flex justify-end">
                            <SecondaryButton onClick={closeModal}>
                                Cancel
                            </SecondaryButton>

                            <Button className="ms-3" disabled={processing}>
                                Delete Account
                            </Button>
                        </div>
                    </form>
                </Modal>
            </Card>
        </div>
    );
}
