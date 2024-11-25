
export const checkForZero = (value) => {
    return value > 0 ? value : "0"
}
export const checkForZeroDiscount = (value) => {
    return value > 0 ? value : "0, 00"
}
export const checkForZeroCurrency = (value) => {
    return value > 0 ? value : "R$ 0,00"
}

export const updateSliderConfig = (newCost, setSliderConfig) => {
    const ranges = [
        { min: 200, max: 3000, step: 10, threshold: 3000 },
        { min: 3100, max: 10000, step: 200, threshold: 10000 },
        { min: 11000, max: 20000, step: 1000, threshold: Infinity },
    ];

    const sliderConfig = ranges.find(range => newCost <= range.threshold) || ranges[0];
    setSliderConfig(sliderConfig);
};

export const newCostValidation = (newCost) => {
    if (isNaN(newCost)) return 0;
    return Math.min(Math.max(newCost, 0), 20000);
};