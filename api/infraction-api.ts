import { InfractionFormType } from "@/data-types/infraction-form-type";

const submitInfraction = async (infractionFormData: InfractionFormType) => {
    console.log("ddddd");
    
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
};


export { submitInfraction };