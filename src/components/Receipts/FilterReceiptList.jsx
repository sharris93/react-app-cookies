import { useTranslation } from 'react-i18next'

import { Box, TextField } from '@mui/material'

const FilterReceiptList = () => {
  const { t } = useTranslation()
  return (
    <>
      <TextField
        id="filter-terms"
        label={t('filterReceiptList.filterTerms')}
        variant="outlined"
        fullWidth
        disabled
      />
    </>
  )
}

export default FilterReceiptList
