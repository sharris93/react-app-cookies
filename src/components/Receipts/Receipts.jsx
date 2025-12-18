import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { CircularProgress, Paper, Stack, Box } from '@mui/material'

import UploadReceipt from './UploadReceipt.jsx'
import ReceiptList from './ReceiptList.jsx'

const Receipts = ({ receiptList, selectedReceiptId, setSelectedReceiptId }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          p: 2,
          gap: 2,
        }}
      >
        <UploadReceipt />
        <ReceiptList
          receiptList={receiptList}
          selectedReceiptId={selectedReceiptId}
          setSelectedReceiptId={setSelectedReceiptId}
        />
      </Box>
    </>
  )
}

export default Receipts
