import { useTranslations } from "next-intl";

const Announcing = ( )=>{
    const t = useTranslations('Index');
    return(
        <div>{t("announcing-step")}</div>
    )
}

export default Announcing;