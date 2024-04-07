import AdminLayout from "@/app/layout/AdminLayout";

const withAdminLayout = (WrappedComponent: any) => {
    // eslint-disable-next-line react/display-name
    return (props: any) => (
        <AdminLayout>
            <WrappedComponent {...props} />
        </AdminLayout>
    );
};

export default withAdminLayout;
