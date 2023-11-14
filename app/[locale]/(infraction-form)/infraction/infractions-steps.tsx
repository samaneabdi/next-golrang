'use client'
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from 'next/navigation'

const InfractionSteps = () =>{
    const t = useTranslations('Index');
    const pathname = usePathname();    
    
    return(
        <section className="sm:flex sm:pt-16 mb-6 justify-center text-base">
            <Link href='/announcing' >
                <div className="step-processed flex mt-4 sm:mt-0 items-center justify-between sm:w-auto w-4/5 mx-auto">
                    <span className="step-processed steps material-symbols-outlined relative sm:ml-4 p-1">
                        Check
                    </span>
                    <p className="sm:ml-4">{t("announcing-step")}</p>
                    <hr className="w-24 h-0.5 sm:ml-4 border-0 rounded"/>
                </div>
            </Link>
            <Link href='/infraction' >
                <div className="step-processing flex mt-4 sm:mt-0 items-center justify-between sm:w-auto w-4/5 mx-auto">
                    <span className="step-processing steps material-symbols-outlined sm:ml-4 relative p-1">Circle</span>
                    <p className="sm:ml-4">{t("infraction-step")}</p>
                    <hr className="w-24 h-0.5 sm:ml-4 border-0 rounded"/>
                </div>
            </Link>
            <Link href="/tracking">
                <div className="step-tobe-process flex mt-4 sm:mt-0 items-center justify-between sm:w-auto w-4/5 mx-auto">
                    <span className="step-tobe-process steps material-symbols-outlined relative sm:ml-4 p-1">Circle</span>
                    <p className="sm:ml-4">{t("tracking-step")}</p>
                    <hr className="w-24 h-0.5 border-0 rounded"/>
                </div>
            </Link>
        </section>

    )
}
export default InfractionSteps;