export const ReceiptSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Receipt',
  type: 'object',
  properties: {
    datetime_raw: { type: 'string' },
    datetime_iso_8601: { type: 'string' },
    datetime_timezone: { type: 'string' },

    currency_primary: { type: 'string' },
    currency_secondary: { type: 'string' },
    currency_exchange_rate: { type: 'number' },
    currency_symbol: { type: 'string' },

    store_name: { type: 'string' },
    store_street: { type: 'string' },
    store_number: { type: 'string' },
    store_zip: { type: 'string' },
    store_city: { type: 'string' },
    store_country: { type: 'string' },

    total_subtotal: { type: 'number' },
    total_tax: { type: 'number' },
    total_price: { type: 'number' },

    payment_method: { type: 'string' },

    items: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          description: { type: 'string' },
          tags: {
            type: 'array',
            items: { type: 'string' },
          },
          raw_entry: { type: 'string' },
          quantity: { type: 'number' },
          price_per_unit: { type: 'number' },
          total_price: { type: 'number' },
        },
        required: [
          'description',
          'tags',
          'raw_entry',
          'quantity',
          'price_per_unit',
          'total_price',
        ],
      },
    },
  },
  required: [
    'datetime_raw',
    'datetime_iso_8601',
    'datetime_timezone',
    'currency_primary',
    'currency_symbol',
    'store_name',
    'store_city',
    'store_country',
    'total_price',
    'payment_method',
    'items',
  ],
}
