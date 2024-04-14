import {PropsWithChildren} from "react";

const AdminLayout = ({children}: PropsWithChildren) => {
    return (
        <div>
            {/* Admin layout components */}
            <header>Admin Header</header>
            <main>{children}</main>
            <footer>Admin Footer</footer>
        </div>
    );
};

export default AdminLayout;
