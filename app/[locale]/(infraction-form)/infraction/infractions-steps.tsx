import { useTranslations } from "next-intl";
import Link from "next/link";

const InfractionSteps = () =>{
    const t = useTranslations('Index');
    
    return(
        <section className="sm:flex sm:mt-14 mb-6 justify-center text-base">
            <Link href='/announcing' >
                <div className="step-processed flex mt-4 sm:mt-0 items-center justify-between sm:w-auto w-4/5 mx-auto">
                    <span className="step-processed steps material-symbols-outlined relative sm:ml-5 ml-2 p-1">
                        Check
                    </span>
                    <p className="leading-10 whitespace-nowrap ml-4 text-base font-medium">{t("announcing-step")}</p>
                    <hr className="sm:w-24 w-20 h-0.5 sm:ml-4 border-0 rounded"/>
                </div>
            </Link>
            <Link href='/infraction' >
                <div className="step-processing flex mt-4 sm:mt-0 items-center justify-between sm:w-auto w-4/5 mx-auto">
                    <span className="step-processing steps material-symbols-outlined sm:ml-5 ml-2 relative p-1">Circle</span>
                    <p className="leading-10 ml-4 text-base font-medium">{t("infraction-step")}</p>
                    <hr className="sm:w-24 w-20 h-0.5 sm:ml-4 border-0 rounded"/>
                </div>
            </Link>
            <Link href="/tracking">
                <div className="step-tobe-process flex mt-4 sm:mt-0 items-center justify-between sm:w-auto w-4/5 mx-auto">
                    <span className="step-tobe-process steps material-symbols-outlined relative sm:ml-5 ml-3 p-1">Circle</span>
                    <p className="leading-10 whitespace-nowrap ml-4 text-base font-medium">{t("tracking-step")}</p>
                    <hr className="sm:w-24 w-20 h-0.5 border-0 rounded"/>
                </div>
            </Link>
        </section>

    )
}
export default InfractionSteps;