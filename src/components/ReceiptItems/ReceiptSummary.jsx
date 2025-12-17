import { useState, useEffect } from 'react'
import { Paper, Button, ButtonGroup, Typography, Box } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const ReceiptSummary = ({ receipt }) => {
  const [confirmDelete, setConfirmDelete] = useState(false)

  const handleOpenMap = () => {
    const address = `${receipt.store_name}, ${receipt.store_street}, ${receipt.store_city}, ${receipt.store_country}`
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
      '_blank',
    )
  }

  useEffect(() => {
    if (!confirmDelete) return
    const timer = setTimeout(() => {
      setConfirmDelete(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [confirmDelete])

  return (
    <Paper sx={{ p: 2 }}>
      <Typography
        noWrap
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        {receipt.store_name}
      </Typography>

      <Typography
        noWrap
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {`${receipt.store_street}, ${receipt.store_city}`}
      </Typography>

      <Typography
        noWrap
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {`${new Date(receipt.datetime_parsed).toLocaleDateString(
          'en-US', // TODO: Depend on user's locale choice
          {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          },
        )}, ${new Date(receipt.datetime_parsed).toLocaleTimeString(
          'en-US', // TODO: Depend on user's locale choice
          {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          },
        )}`}
      </Typography>

      <Typography
        noWrap
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {`${receipt.currency_primary} ${receipt.total_price}, ${receipt.payment_method}`}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ButtonGroup variant="text">
          <Button onClick={handleOpenMap}>
            Map <OpenInNewIcon fontSize="inherit" />
          </Button>
          <Button disabled>
            View <OpenInNewIcon fontSize="inherit" />
          </Button>
          {confirmDelete ? (
            <Button color="warning" disabled>
              Confirm
            </Button>
          ) : (
            <Button onClick={() => setConfirmDelete(true)}>Delete</Button>
          )}
        </ButtonGroup>
      </Box>
    </Paper>
  )
}

export default ReceiptSummary
