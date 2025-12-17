import { useTranslation } from 'react-i18next'

import {
  Typography,
  AccordionActions,
  Button,
  ButtonGroup,
} from '@mui/material'

const ReceiptItemDetails = ({ item, currency }) => {
  return (
    <>
      <Typography>{`Raw: ${item.raw_entry}`}</Typography>

      <Typography
        sx={{ fontVariantNumeric: 'tabular-nums' }}
      >{`Quantity: ${item.quantity}`}</Typography>
      <Typography
        sx={{ fontVariantNumeric: 'tabular-nums' }}
      >{`Price/Unit: ${item.price_per_unit} ${currency}`}</Typography>
      <Typography>{`Tags: ${item.tags}`}</Typography>

      <AccordionActions>
        <ButtonGroup variant="text">
          <Button>Edit</Button>
          <Button disabled>Discard</Button>
          <Button disabled>Save</Button>
        </ButtonGroup>
      </AccordionActions>
    </>
  )
}

export default ReceiptItemDetails
