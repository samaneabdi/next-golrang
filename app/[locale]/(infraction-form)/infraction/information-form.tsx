'use client'
import {useState} from "react";
import ValidateIcon from "@/components/validate-icon";
import ListBox from "../../../../components/list-box";
import RadioButton from "../../../../components/radio-button";
import {useTranslations} from 'next-intl';
import { Company, InforemedItem } from "@/api/list-box-data";
import { IsColleague, IsInformed, IsWorkIn, NameAndDetails } from "@/enum/enum";
import { InfractionFormType } from "@/data-types/infraction-form-type";

const InformationForm = () => {
    const t = useTranslations('Index');

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

    const handleSave = async () => {
        
        console.log("ffff",fullItem);
        
        const response = await fetch("https://sample.com/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(fullItem),
        });
    
        const data = await response.json();
        console.log("data",data);
        
        if (data.success) {
          console.log("Form submitted successfully!");
        } else {
          console.error("Error submitting form:", data.error);
        }
      };
    

    return(
        <form className="flex flex-col">
            <div className="sm:flex flex-row justify-between sm:mb-6">
                <RadioButton 
                    title={t('is-golrang-colleague')} 
                    radioGroup="IsColleague" 
                    radioItem={IsColleague}
                    onChange={(event) => {
                        fullItem.isColleage = event.target.value;                        
                        setFullItem({ ...fullItem });
                    }}
                />
                <RadioButton 
                    title={t("is-work-in-golrang")} 
                    radioGroup="IsWorkIn" 
                    radioItem={IsWorkIn}
                    onChange={(event) => {
                        fullItem.isWorkIn = event.target.value;                        
                        setFullItem({ ...fullItem });
                    }}/>
            </div>
            <div className="sm:flex flex-row mb-6 sm:overflow-hidden">
                <RadioButton 
                    title={t("name-and-details")} 
                    radioGroup="NameAndDetails" 
                    radioItem={NameAndDetails}
                    onChange={(event) => {
                        fullItem.nameAndDetails = event.target.value;                        
                        setFullItem({ ...fullItem });
                    }}/>
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
                <div className="flex sm:w-1/2 relative sm:ml-3 mb-6 sm:mb-0">
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
                            value={fullItem.attachFile} className="opacity-0 absolute z-[-1]" type="file" name="file" id="upload-photo"/>
                        <span className="material-symbols-outlined cursor-pointer left-2 absolute text-white rounded-full p-1 rotate-45 bg-gradient-to-r from-orange-500 via-yellow-500 to-yellow-200 mt-2">
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
                    value={fullItem.reportText} className="rounded-lg p-3 w-full placeholder:text-black placeholder:font-bold placeholder:text-sm" rows={3} placeholder={t("report-text")} />
            </div>
            <div className="sm:flex flex-row justify-between sm:mb-6">
                <RadioButton 
                    title={t("has-this-matter-been-informed-before")} 
                    radioGroup={"IsInformed"} 
                    radioItem={IsInformed}
                    onChange={(event) => {
                        fullItem.isInformed = event.target.value;                        
                        setFullItem({ ...fullItem });
                    }}
                />
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
            {/* <Multi/> */}
                <input className="rounded-lg p-3 sm:w-1/2 w-full h-11 sm:ml-3 sm:mb-0 mb-6 placeholder:text-black placeholder:font-bold placeholder:text-sm" type="text" placeholder={t("informed-persons")} />
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
                    <p>{t("information-confidentiality-message")}</p>
                    <div className="flex items-center mb-6">
                        <input 
                            onChange={(event) => {
                                fullItem.role = event.target.checked;
                                setFullItem({ ...fullItem });
                            }}
                            checked={fullItem.role} type="checkbox" id="role" name="role"/>
                        <label htmlFor="role"><a className="text-blue-color mr-9 cursor-pointer">{t("site-roles")}</a> {t("studied")}</label>
                    </div>
                </div>
                <div className="sm:w-1/3 flex justify-center">
                    <button onClick={() => handleSave()} className="px-9 py-1 h-11 font-medium rounded-xl bg-gradient-to-r from-blue-500 to-purple-500" type="submit">{t("submit-information")}</button>
                </div>
            </div>
            
        </form>
    )
}
export default InformationForm;