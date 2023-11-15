'use client'
import {FormEvent, useState} from "react";
import ValidateIcon from "@/components/validate-icon";
import ListBox from "../../../../components/list-box";
import RadioButton from "../../../../components/radio-button";
import {useTranslations} from 'next-intl';
import { Company, InforemedItem, People } from "@/api/list-box-data";
import { IsColleague, IsInformed, IsWorkIn, NameAndDetails } from "@/enum/enum";
import { InfractionFormType } from "@/data-types/infraction-form-type";
import { submitInfraction } from "@/api/infraction-api";
import MultiSelect from "@/components/multi-select";
import {unstable_setRequestLocale} from 'next-intl/server';

const InformationForm =() => {
    // unstable_setRequestLocale(locale);
    const t = useTranslations('Index');
    
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [nameError, setNameError] = useState<string | null>(null);
    const [fullItem, setFullItem] = useState<InfractionFormType>({
        name: '',
        phoneNumber: '',
        nationalCode: '',
        reportSubject: '',
        attachFile:'',
        reportText:'',
        securityCode:'',
        role:false,
        inforemedItem: 0,
        company:0,
        isColleage:'',
        isWorkIn:'',
        isInformed:'',
        nameAndDetails:''
    });

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setError(null)
    
        try {
            if (!fullItem.name) {
                setNameError(`${t("field-is-required")}`);
            }
            else{

                const formData = new FormData(event.currentTarget)
                const response = submitInfraction(fullItem);
            }
        } 
        catch (error) {
            if (error instanceof Error){
                setError(error.message)
                console.error(error)
            }
        } finally {
            setIsLoading(false)
        }
    }
    
    if(error){
        return(
            <div className="text-red">{error}</div>
        )
    }

    return(
        <form onSubmit={onSubmit} className="flex flex-col">
            <div className="sm:flex flex-row justify-between sm:mb-6">
                <div className="flex flex-wrap sm:justify-between px-4 py-3 sm:ml-5 sm:py-0 mb-6 sm:mb-0 items-center sm:w-1/2 text-sm font-medium leading-10 bg-white-opacity rounded-lg">
                    <RadioButton 
                        title={t('is-golrang-colleague')} 
                        radioGroup="IsColleague" 
                        radioItem={IsColleague}
                        onChange={(event) => {
                            fullItem.isColleage = event.target.value;                        
                            setFullItem({ ...fullItem });
                        }}
                    />
                </div>
                <div className="flex flex-wrap sm:justify-between px-4 py-3 sm:py-0 mb-6 sm:mb-0 items-center sm:w-1/2 text-sm font-medium leading-10 bg-white-opacity rounded-lg">
                    <RadioButton 
                        title={t("is-work-in-golrang")} 
                        radioGroup="IsWorkIn" 
                        radioItem={IsWorkIn}
                        onChange={(event) => {
                            fullItem.isWorkIn = event.target.value;                        
                            setFullItem({ ...fullItem });
                    }}/>
                </div>
            </div>
            <div className="sm:flex flex-row mb-6 sm:overflow-hidden">
                <div className="flex flex-wrap sm:justify-between sm:ml-5 px-4 py-3 sm:py-0 mb-6 sm:mb-0 items-center sm:w-1/2 text-sm font-medium leading-10 bg-white-opacity rounded-lg">
                    <RadioButton 
                        title={t("name-and-details")} 
                        radioGroup="NameAndDetails" 
                        radioItem={NameAndDetails}
                        onChange={(event) => {
                            fullItem.nameAndDetails = event.target.value;                        
                            setFullItem({ ...fullItem });
                        }}/>
                </div>
                <div className="sm:flex justify-between sm:w-1/2 text-sm text-black ">
                    <div className="flex sm:w-1/3 relative sm:ml-3 mb-6 sm:mb-0">
                        <ValidateIcon/>
                        <input
                            onChange={(event) => {
                                fullItem.name = event.target.value;
                                setFullItem({ ...fullItem });
                            }}
                            value={fullItem.name} className="rounded-lg w-full p-3 h-11 placeholder:text-black placeholder:font-bold placeholder:text-sm" type="text" placeholder={t("name-and-family")} />

                    </div>
                        {nameError && <div className="absolute text-xs -bottom-4 overflow-hidden text-red">{nameError}</div>}
                    <div className="flex sm:w-1/3 relative sm:ml-3 mb-6 sm:mb-0">
                        <ValidateIcon/>
                        <input
                            onChange={(event) => {
                                fullItem.phoneNumber = event.target.value;
                                setFullItem({ ...fullItem });
                            }}
                            value={fullItem.phoneNumber} className="rounded-lg w-full p-3 h-11 placeholder:text-black placeholder:font-bold placeholder:text-sm" type="text" placeholder={t("phone-number")} />
                    </div>
                    <div className="flex sm:w-1/3 relative">
                        <ValidateIcon/>
                        <input 
                            onChange={(event) => {
                                fullItem.nationalCode = event.target.value;
                                setFullItem({ ...fullItem });
                            }}
                            value={fullItem.nationalCode} className="rounded-lg w-full p-2 h-11  placeholder:text-black placeholder:font-bold placeholder:text-sm" type="text" placeholder={t("national-code")} />
                    </div>
                </div>
            </div>
            <div className="sm:flex flex-row justify-between mb-6 text-black">
                <div className="flex sm:w-1/2 relative sm:ml-5 mb-6 sm:mb-0">
                    <ValidateIcon/>
                    <input
                        onChange={(event) => {
                            fullItem.reportSubject = event.target.value;
                            setFullItem({ ...fullItem });
                        }}
                        value={fullItem.reportSubject} className="rounded-lg w-full p-3 h-11 placeholder:text-black placeholder:font-bold placeholder:text-sm" type="text" placeholder={t("report-subject")} />
                </div>
                <div className="sm:flex justify-between sm:w-1/2 text-sm">
                    <ListBox
                        title="select-company"
                        data={Company}
                        value={fullItem.company.toString()} 
                        onChange={(event) => {
                            fullItem.company = Number(event.target.value);
                            setFullItem({ ...fullItem });
                        }}
                    />
                    <div className="flex relative sm:w-1/2">
                        <label className="bg-white w-full rounded-lg p-2 pt-3 h-11 cursor-pointer text-black font-bold text-sm" htmlFor="upload-photo"> {fullItem.attachFile ? fullItem.attachFile : `${t("attach-file")}`}</label>
                        <input 
                            onChange={(event) => {
                                fullItem.attachFile = event.target.value;
                                setFullItem({ ...fullItem });
                            }}
                            value={fullItem.attachFile}
                            className="opacity-0 absolute z-[-1]" type="file" name="file" id="upload-photo"
                        />
                        <span className="material-symbols-outlined text-sm leading-4 cursor-pointer left-2 absolute text-white rounded-[45px] p-1 rotate-45 bg-gradient-to-r from-yellow-600 to-yellow-500 shadow mt-2.5">
                            attach_file
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row relative justify-between mb-6 text-black">
                <ValidateIcon/>
                <textarea
                    onChange={(event) => {
                        fullItem.reportText = event.target.value;
                        setFullItem({ ...fullItem });
                    }}
                    value={fullItem.reportText} className="rounded-lg p-3 w-full sm:h-auto h-48 placeholder:text-black placeholder:font-bold placeholder:text-sm" rows={3} placeholder={t("report-text")} />
            </div>
            <div className="sm:flex flex-row justify-between sm:mb-6">
                <div className="flex flex-wrap sm:justify-between sm:ml-5 px-2 py-3 sm:py-0 mb-6 sm:mb-0 items-center sm:w-1/2 text-sm font-medium leading-10 bg-white-opacity rounded-lg">
                    <RadioButton 
                        title={t("has-this-matter-been-informed-before")} 
                        radioGroup={"IsInformed"} 
                        radioItem={IsInformed}
                        onChange={(event) => {
                            fullItem.isInformed = event.target.value;                        
                            setFullItem({ ...fullItem });
                        }}
                    />
                </div>
                <div className="sm:flex relative justify-between sm:w-1/2 text-sm text-black">
                    <ValidateIcon/>
                    <ListBox 
                        title="how" 
                        data={InforemedItem} 
                        value={fullItem.inforemedItem.toString()} 
                        onChange={(event) => {
                            fullItem.inforemedItem = Number(event.target.value);
                            setFullItem({ ...fullItem });
                        }}
                    />
                </div>
            </div>
            <div className="sm:flex flex-row justify-between mb-6 text-black">
                <MultiSelect title={t("informed-persons")} data={People}/>
                <div className="flex relative justify-between sm:w-1/2 text-sm">
                    <ValidateIcon/>
                    <input
                        onChange={(event) => {
                            fullItem.securityCode = event.target.value;
                            setFullItem({ ...fullItem });
                        }}
                        value={fullItem.securityCode} className="rounded-lg p-3 w-1/2 h-11 ml-3 placeholder:text-black placeholder:font-bold placeholder:text-sm" type="text" placeholder={t("security-code")} />
                    <input readOnly className="rounded-lg p-2 w-1/2 h-11  placeholder:text-gray-400 placeholder:italic placeholder:text-center placeholder:text-xl" type="text" placeholder="XFDNA" />
                </div>
            </div>
            <div className="sm:flex flex-row mb-6">
                <div className="sm:w-1/3">
                    <p className="text-base font-medium mb-3">{t("information-confidentiality-message")}</p>
                    <div className="flex items-center mb-6">
                        <input 
                            className=""
                            onChange={(event) => {
                                fullItem.role = event.target.checked;
                                setFullItem({ ...fullItem });
                            }}
                            checked={fullItem.role} type="checkbox" id="role" name="role"/>
                        <label className="text-base font-medium" htmlFor="role"><a className="font-medium text-cyan mr-9 cursor-pointer">{t("site-roles")}</a> {t("studied")}</label>
                    </div>
                </div>
                <div className="sm:w-1/3 flex justify-center">
                    <button 
                        className="px-9 py-1 h-11 text-base font-medium leading-10 mt-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 shadow" 
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? `${t('loading')}` : `${t("submit-information")}`}
                    </button>
                </div>
            </div>
            
        </form>
    )
}
export default InformationForm;