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
import { useForm } from "react-hook-form";
import ValidateError from "@/components/validate-error";

const InformationForm =() => {
    
    const t = useTranslations('Index');
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const [fullItem, setFullItem] = useState<InfractionFormType>({
        name: '',
        phoneNumber: '',
        nationalCode: '',
        reportSubject: '',
        attachFile:'',
        reportText:'',
        securityCode:'',
        role:false,
        inforemedItem: '',
        company:'',
        isColleage:'',
        isWorkIn:'',
        isInformed:'',
        nameAndDetails:'',
        people:[]
    });

    async function onSubmit() {        
        setIsLoading(true)
        setError(null)

        let errorMsg = t('failed-to-fetch');
        submitInfraction(fullItem, setError, setIsLoading, errorMsg);
        
    }
    

    const handleCheckboxChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { value } = event.target as HTMLInputElement;
        let item;
        if (fullItem.people.find(x=>x.includes(value))) {
          item = fullItem.people.filter((option) => option !== value)
          fullItem.people = item;
          setFullItem({...fullItem})
          
        } else {
          item = People.find(x=>x.id.toString() === value);
          if(item)
          {
            fullItem.people.push(value);
            setFullItem({...fullItem})
          }
        }
      };
    
      const handleCheckBoxRemove = (item: string) => {    
        if (fullItem.people.includes(item)) {
            let removeItem = fullItem.people.filter((option) => option !== item);
            fullItem.people = removeItem;
            setFullItem({...fullItem});
        } 
      };
    

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            {error && <div className="text-red">{error}</div>}
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
            <div className="sm:flex flex-row mb-6 ">
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
                <div className="sm:flex justify-between relative sm:w-1/2 text-sm text-black ">
                    <div className="flex sm:w-1/3 relative sm:ml-3 mb-6 sm:mb-0">
                        <ValidateIcon/>
                        <input
                            {...register('name', { required: true })}
                            onChange={(event) => {
                                fullItem.name = event.target.value;
                                setFullItem({ ...fullItem });
                            }}
                            value={fullItem.name} 
                            className="rounded-lg w-full p-3 h-11 placeholder:text-black placeholder:font-bold placeholder:text-sm" type="text" placeholder={t("name-and-family")} 
                        />
                        {errors.name && 
                            <ValidateError errorMessage={`${t("field-is-required")}`}/>
                        }
                    </div>
                    <div className="flex sm:w-1/3 relative sm:ml-3 mb-6 sm:mb-0">
                        <ValidateIcon/>
                        <input
                            {...register('phoneNumber', { required: true })}
                            onChange={(event) => {
                                fullItem.phoneNumber = event.target.value;
                                setFullItem({ ...fullItem });
                            }}
                            value={fullItem.phoneNumber} className="rounded-lg w-full p-3 h-11 placeholder:text-black placeholder:font-bold placeholder:text-sm" type="text" placeholder={t("phone-number")} 
                        />
                        {errors.phoneNumber && 
                            <ValidateError errorMessage={`${t("field-is-required")}`}/>
                        }
                    </div>
                    <div className="flex sm:w-1/3 relative">
                        <ValidateIcon/>
                        <input 
                            {...register('nationalCode', { required: true })}
                            onChange={(event) => {
                                fullItem.nationalCode = event.target.value;
                                setFullItem({ ...fullItem });
                            }}
                            value={fullItem.nationalCode} className="rounded-lg w-full p-2 h-11  placeholder:text-black placeholder:font-bold placeholder:text-sm" type="text" placeholder={t("national-code")} 
                        />
                        {errors.nationalCode && 
                            <ValidateError errorMessage={`${t("field-is-required")}`}/>
                        }
                    </div>
                </div>
            </div>
            <div className="sm:flex flex-row justify-between mb-6 text-black">
                <div className="flex sm:w-1/2 relative sm:ml-5 mb-6 sm:mb-0">
                    <ValidateIcon/>
                    <input
                        {...register('reportSubject', { required: true })}
                        onChange={(event) => {
                            fullItem.reportSubject = event.target.value;
                            setFullItem({ ...fullItem });
                        }}
                        value={fullItem.reportSubject} className="rounded-lg w-full p-3 h-11 placeholder:text-black placeholder:font-bold placeholder:text-sm" type="text" placeholder={t("report-subject")} 
                    />
                    {errors.reportSubject && 
                        <ValidateError errorMessage={`${t("field-is-required")}`}/>
                    }
                </div>
                <div className="sm:flex relative justify-between sm:w-1/2 text-sm">
                    <p className="flex absolute text-xs item-center right-0 sm:-bottom-5 top-11 text-yellow-primary">
                        <span className="material-symbols-outlined text-sm ml-1">
                            warning
                        </span>
                        {t('select-report-company')}
                    </p>
                    <ListBox
                        title="select-company"
                        register={register}
                        isRequired={false}
                        data={Company}
                        value={fullItem.company} 
                        onChange={(event) => {
                            fullItem.company = event.target.value;
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
                    {...register('reportText', { required: true })}
                    onChange={(event) => {
                        fullItem.reportText = event.target.value;
                        setFullItem({ ...fullItem });
                    }}
                    value={fullItem.reportText} className="rounded-lg p-3 w-full sm:h-auto h-48 placeholder:text-black placeholder:font-bold placeholder:text-sm" rows={3} placeholder={t("report-text")}
                />
                {errors.reportText && 
                    <ValidateError errorMessage={`${t("field-is-required")}`}/>
                }
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
                        register={register}
                        isRequired
                        title="informedItem" 
                        data={InforemedItem} 
                        value={fullItem.inforemedItem} 
                        onChange={(event) => {
                            fullItem.inforemedItem = event.target.value;
                            setFullItem({ ...fullItem });
                        }}
                    />
                    {errors.informedItem && 
                        <ValidateError errorMessage={`${t("field-is-required")}`}/>
                    }
                </div>
            </div>
            <div className="sm:flex flex-row justify-between mb-6 text-black">
                <MultiSelect 
                    title={t("informed-persons")} 
                    data={People}
                    value={fullItem.people}
                    handleRemove={handleCheckBoxRemove}
                    handleCheckboxChange={handleCheckboxChange}
                />
                <div className="flex relative justify-between sm:w-1/2 text-sm">
                    <ValidateIcon/>
                    <input
                        {...register('securityCode', { required: true })}
                        onChange={(event) => {
                            fullItem.securityCode = event.target.value;
                            setFullItem({ ...fullItem });
                        }}
                        value={fullItem.securityCode} className="rounded-lg p-3 w-1/2 h-11 ml-3 placeholder:text-black placeholder:font-bold placeholder:text-sm" type="text" placeholder={t("security-code")} 
                    />
                    {errors.securityCode && 
                        <ValidateError errorMessage={`${t("field-is-required")}`}/>
                    }
                    <input readOnly className="rounded-lg p-2 w-1/2 h-11  placeholder:text-gray-400 placeholder:italic placeholder:text-center placeholder:text-xl" type="text" placeholder="XFDNA" />
                </div>
            </div>
            <div className="sm:flex flex-row mb-6">
                <div className="sm:w-1/3">
                    <p className="text-base font-medium mb-3">{t("information-confidentiality-message")}</p>
                    <div className="flex items-center mb-6">
                        <input 
                            className="checkbox"
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