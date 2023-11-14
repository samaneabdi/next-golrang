import Header from "@/components/header";
import InfractionSteps from "./infraction/infractions-steps";

const Layout = ( {children} :{children: React.ReactNode} ) =>{
    return(
        <div className="w-5/6 mx-auto mt-8">
            <Header />
            <InfractionSteps />
            <div>
                 {children}
            </div>
        </div>
    )
}
export default Layout;