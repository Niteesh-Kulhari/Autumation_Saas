"use client"
import { useRouter } from "next/navigation"
import UploadCareButton from "./upload-care"
import Image from "next/image"
import { Button } from "@/components/ui/button"

type Props = {
    userImage: string | null,
    onDelete?: any,
    onUpload?: any
}


const ProfilePicture = ({userImage, onDelete, onUpload} : Props) => {

    const router = useRouter()

    const onRemoveProfile = async () => {
        const response = await onDelete();
        if(response){
            router.refresh
        }
    }
    return (
        <div className="flex flex-col">
            <p className="text-lg text-white"> Profile Picture</p>
            <div className="flex h-[20vh] flex-col items-center justify-center">
                {userImage ? <>
                <div>
                    <Image 
                    src={userImage}
                    alt="User_image"
                    width={70}
                    height={70}
                    />
                </div>
                <Button
                    onClick={onRemoveProfile}
                    className="bg-transparent text-white hover:bg-transparent hover:text-white"
                >
                </Button>
                </>  : <UploadCareButton/>}
                
            </div>
            
        </div>
    )
}



export default ProfilePicture