// format currency:
export const formatCurrency = (amount: number | null) => {
  const value = amount || 0;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

// format quantity:
export function formatQuantity(quantity: number, noun: string): string {
  return quantity === 1 ? `${quantity} ${noun}` : `${quantity} ${noun}s`;
}

// format date:
export const formatDate = (date: Date, monthOnly?: boolean) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  if (!monthOnly) options.day = "numeric";

  return new Intl.DateTimeFormat("en-US", options).format(date);
};
