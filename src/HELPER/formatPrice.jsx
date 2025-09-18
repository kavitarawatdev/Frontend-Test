export const formatPrice = (price) => {
    return Intl.NumberFormat("en-US", {
        style:"currency",
        currency:"USD",
        maximumFractionDigits:2,
    }).format(price)
};