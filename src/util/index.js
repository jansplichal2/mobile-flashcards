export const calculatePercentage = (success, failure, roundingDigits = 2) => {
    const ratio = success / (success + failure);
    return +(100 * ratio).toFixed(roundingDigits);
};

export const getDate = (dayOffset = 1, dayHours = 20, dayMinutes = 0) => {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + dayOffset);
    tomorrow.setHours(dayHours);
    tomorrow.setMinutes(dayMinutes);
    tomorrow.setSeconds(0);
    tomorrow.setMilliseconds(0);
    return tomorrow;
};