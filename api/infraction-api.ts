import { InfractionFormType } from "@/data-types/infraction-form-type";
import { log } from "console";
import { SetStateAction } from "react";


const submitInfraction = async (infractionFormData:InfractionFormType,
   setError:(value: SetStateAction<string | null>) => void,
   setIsLoading:(value: SetStateAction<boolean>) => void,
   errorMsg:string)=> {
    
  try {
    const response = await fetch("https://sample.com/post", {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
        body: JSON.stringify(infractionFormData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.')
        }
        const data = await response.json()
        return data;
      } 
      catch (error) {
        if (error instanceof Error){
            setError(errorMsg + ' (' + error.message +')')
            console.error(error)
        }
      } finally {
          setIsLoading(false)
      }

};


export { submitInfraction };