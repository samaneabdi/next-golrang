import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const t = useTranslations('Index');

    return(
        <header className="flex sm:flex-row flex-wrap justify-between items-center">
            <Link href="/">
                <span className="material-symbols-outlined">Home</span>
            </Link>
            <div><Image width={250} height={62} src="/images/logo.png" alt="logo"/></div>
            <div className="mx-auto mt-4 sm:m-0">{t("infraction-notification-system")}</div>
        </header>
    )
}
export default Header;