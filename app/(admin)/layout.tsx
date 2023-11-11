import Sidebar from "@/components/sidebar";

const AdminLayout = ( {children} :{children: React.ReactNode} ) =>{
    return(
    <>
        <div className="py-6">
            <Sidebar />
            {children}
        </div>

    </>
    )
}
export default AdminLayout;