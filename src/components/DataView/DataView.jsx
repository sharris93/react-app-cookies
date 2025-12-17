import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useUser } from '../../contexts/UserContext.jsx'

import { Box, CircularProgress } from '@mui/material'

import SignIn from '../account/SignIn/SignIn.jsx'
import Receipts from '../Receipts/Receipts.jsx'
import ReceiptItems from '../ReceiptItems/ReceiptItems.jsx'

import { listReceipts, listReceiptItems } from '../../utils/receipts.js'

const DataView = () => {
  const { user, loading } = useUser()

  const [receiptList, setReceiptList] = useState([])
  const [selectedReceiptId, setSelectedReceiptId] = useState(null)
  const [receipt, setReceipt] = useState([])
  const [errorData, setErrorData] = useState({})
  const [isLoadingReceipts, setIsLoadingReceipts] = useState(true)
  const [isLoadingReceiptItems, setIsLoadingReceiptItems] = useState(true)

  useEffect(() => {
    // console.log('USE EFFECT -> DataView on init')
    const getData = async () => {
      try {
        const { data } = await listReceipts()
        setReceiptList(data)
        if (data.length !== 0) setSelectedReceiptId(data[0].id)
      } catch (error) {
        console.log(error)
        setErrorData(error.response.data)
      } finally {
        setIsLoadingReceipts(false)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    /* console.log(
      'USE EFFECT -> DataView on selectedReceiptId change -> ',
      selectedReceiptId,
    )*/
    const getData = async () => {
      try {
        if (selectedReceiptId) {
          const { data } = await listReceiptItems(selectedReceiptId)
          setReceipt(data)
        }
      } catch (error) {
        console.log(error)
        setErrorData(error.response.data)
      } finally {
        setIsLoadingReceiptItems(false)
      }
    }
    getData()
  }, [selectedReceiptId])

  if (isLoadingReceipts || isLoadingReceiptItems) return <CircularProgress />
  if (!user) return <SignIn />

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', xl: 'row' },
        width: '100%',
        gap: 2,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Receipts
          receiptList={receiptList}
          selectedReceiptId={selectedReceiptId}
          setSelectedReceiptId={setSelectedReceiptId}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <ReceiptItems receipt={receipt} />
      </Box>
    </Box>
  )
}

export default DataView
