import { Box } from '@mui/material'

import ReceiptSummary from './ReceiptSummary.jsx'
import ReceiptItemList from './ReceiptItemList.jsx'

const ReceiptItems = ({ receipt }) => {
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
        <ReceiptSummary receipt={receipt} />
        <ReceiptItemList receipt={receipt} />
      </Box>
    </>
  )
}

export default ReceiptItems
