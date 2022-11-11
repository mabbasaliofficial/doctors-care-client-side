import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Doctors Points`;
    },[title])
}
export default useTitle;