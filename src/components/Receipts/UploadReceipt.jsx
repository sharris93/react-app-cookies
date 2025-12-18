import { useRef } from 'react'
import { Paper } from '@mui/material'

import { uploadImage } from '../../utils/images.js'

const UploadReceipt = () => {
  const fileInputRef = useRef(null)

  const handleClick = () => {
    if (fileInputRef.current) fileInputRef.current.click()
  }

  const handleFileUpload = async (file) => {
    try {
      const imageUrl = await uploadImage(file)
      console.log('Uploaded:', imageUrl)
    } catch (error) {
      console.log(error)
    }
  }

  const handleFileChange = (e) => {
    handleFileUpload(e.target.files?.[0])
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const file = e.dataTransfer.files[0]
    handleFileUpload(file)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          // border: '2px dashed gray',
          // minHeight: '100px',
        }}
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        Drop a receipt image or click to upload
      </Paper>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleFileChange}
      />
    </>
  )
}

export default UploadReceipt
