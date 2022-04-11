import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

export default function FileDrop(props) {
    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        acceptedFiles.forEach((file) => {
        const reader = new FileReader()

        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
        // Do whatever you want with the file contents
            const binaryStr = reader.result
            console.log(binaryStr)
        }
        reader.readAsArrayBuffer(file);
        });

        console.log(rejectedFiles);
        
    }, [])

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: props?.accepts || undefined
    });


    const placeholder = props.placeholder || "Drag 'n' drop some files here, or click to select files";

    return (
        <section className='flex flex-grow mb-3'>
            <div {...getRootProps()} className='block w-full py-4 px-3 relative bg-white appearance-none border-2 border-grey-300 border-dashed rounded-md hover:border-blue-300'>
            <input {...getInputProps()} />
            
            <p className='text-center text-slate-500'>{placeholder}</p>
            </div>
        </section>
    )
}