const ValidateError = ({errorMessage}: {errorMessage: string}) =>{
    return(
        <p className="flex absolute text-xs item-center right-0 -bottom-5 text-red">
            <span className="material-symbols-outlined text-sm ml-1">
                error
            </span>
            {errorMessage}
        </p>
    )
}
export default ValidateError;