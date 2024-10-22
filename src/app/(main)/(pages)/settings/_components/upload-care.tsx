'use client' // is needed only if you’re using React Server Components
import { FileUploaderRegular } from '@uploadcare/react-uploader/next';
import '@uploadcare/react-uploader/core.css';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

type Props = {
    onUpload?: any 
}



function UploadCareButton({onUpload} : Props) {
    const router = useRouter()
    useEffect( () => {
        const handleUpload = async (e: any) => {
            const file = await onUpload(e.detail.cdnUrl)
            if(file){
                router.refresh();
            }
        }
    },[])
  return (
    <div>
      <FileUploaderRegular
         sourceList="local, url, camera, dropbox"
         classNameUploader="uc-dark"
         pubkey="926c164ad9b86c6244ef"
      />
    </div>
  );
}

export default UploadCareButton;