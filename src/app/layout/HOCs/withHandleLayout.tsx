import UserLayout from "@/app/layout/UserLayout";
import {EnumData} from "@/Constant/auth/ConstantAuthConfig";

const withHandleLayout = (WrappedComponent: any, role: EnumData) => {
    // eslint-disable-next-line react/display-name
    return (props: any) => (
        <UserLayout>
            <WrappedComponent {...props} />
        </UserLayout>
    );
};

export default withHandleLayout;
