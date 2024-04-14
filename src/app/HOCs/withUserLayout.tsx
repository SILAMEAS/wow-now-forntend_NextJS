import UserLayout from "@/app/user/layout/UserLayout";

const withUserLayout = (WrappedComponent: any): any => {
    // eslint-disable-next-line react/display-name
    return (props: any) => (
        <UserLayout>
            <WrappedComponent {...props} />
        </UserLayout>
    );
};

export default withUserLayout;
