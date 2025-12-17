import {
  Box,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
  Paper,
  Typography,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

import ReceiptItemDetail from './ReceiptItemDetail'

const ReceiptItemList = ({ receipt }) => {
  if (!receipt.items) return <CircularProgress />

  return (
    <Paper>
      {receipt.items.map((item) => (
        <Accordion key={item.id}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                pr: 1, // space from expand icon
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              <Typography>{item.description}</Typography>
              <Typography>{`${receipt.currency_primary} ${item.total_price}`}</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <ReceiptItemDetail
              item={item}
              currency={receipt.currency_primary}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </Paper>
  )
}

export default ReceiptItemList
