export const formatPrice = (cents: number): string => {
  const options = {
    style: 'currency',
    currency: 'USD'
  }
  return (cents / 100).toLocaleString('en-US', options)
}