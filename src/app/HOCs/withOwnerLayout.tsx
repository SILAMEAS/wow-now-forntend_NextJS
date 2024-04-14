import OwnerLayout from "@/app/owner/layout/LayoutOwner";

const withOwnerLayout = (WrappedComponent: any) => {
    // eslint-disable-next-line react/display-name
    return (props: any) => (
        <OwnerLayout>
            <WrappedComponent {...props} />
        </OwnerLayout>
    );
};

export default withOwnerLayout;
