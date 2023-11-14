import { useTranslations } from "next-intl";

const Step3 = ( )=>{
    const t = useTranslations('Index');
    return(
        <div>{t("tracking-step")}</div>
    )
}

export default Step3;