import UserFooter from "@/components/user-footer";
import UserHeader from "@/components/user-header";

const UserLayout = ( {children} :{children: React.ReactNode} ) =>{
    return(
        <div className="h-screen flex flex-col">
            <UserHeader />
            <div className="grow">
                 {children}
            </div>
            <UserFooter />
        </div>
    )
}
export default UserLayout;