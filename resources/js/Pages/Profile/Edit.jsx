import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
        // header={
        //     <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
        //         Profile
        //     </h2>
        // }
        >
            <Head title="Profile" />

            <div className="space-y-6">
                <UpdateProfileInformationForm
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                    className="max-w-xl"
                />

                <UpdatePasswordForm className="max-w-xl" />

                <DeleteUserForm className="max-w-xl" />
            </div>
        </AuthenticatedLayout>
    );
}
