import api from './api'

export const listReceipts = () => {
  return api.get('/receipts/')
}

export const listReceiptItems = (receiptId) => {
  return api.get(`/receipts/${receiptId}/`)
}
