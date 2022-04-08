const asc = (arr) => arr.sort((a, b) => a - b);

const trimArr = (arr, trim, key) => {
    // 100 items, 100*0.05 = 5, 12 items,12*0.05 = 0.6, becomes 1 
    const trimmingLength = Math.ceil(arr.length * trim)
    // 12 items, slice from 1 to 10, so trimming length = 1 and 12-1 = 11
    // 100 items slice from 5,end on 95
    const sorted = arr.sort((a, b) => key ? a[key] - b[key] : a - b)
    
    return {
        trimmed: sorted(arr).slice(trimmingLength, arr.length - trimmingLength),
        top5: sorted.slice(arr.length - trimmingLength),
        bottom5: sorted.slice(0, trimmingLength)
    }
}

const calSum = arr => arr.reduce((a, b) => a + b, 0);

const calMean = (arr) => {
    return arr.length ? calSum(arr) / arr.length : 'N/A'
}

const calPercentTile = (arr, percent) => {
    const sorted = asc(arr)
    // Get the idx of the median based on the %
    const idx = Math.floor(arr.length * percent)
    // Eg. If the value need to be calcualted, eg 100 values, if taking 50% (median), it should be the (50+51)/2 because the array is even number
    if (arr.length % 2) {
        // Eg. If 100 items, getting median, it will be index = 49 and index = 50 from the array which is the 50 and 51th value. 
        return (sorted[idx - 1] + sorted[idx]) / 2
    } else {
        // Since the value is floor, and if the arr  is odd number, it should reduce the number by 1 already, 
        // hence, dont need to -1 afterwards for the correct position from  array
        return sorted[idx]
    }

}

const calMedian = (arr) => {
    return arr.length ? calPercentTile(arr, 0.5) / arr.length : 'N/A'
}

const calTrimmedMean = (arr, trim) => {
    return calMean(trimArr(arr, trim).trimmed)
}

const calVariance = (arr) => {
    const mean = calMean(arr)
    // ** means to the power of, eg 3**2 = 9
    return calSum(arr.map(a => (a - mean) ** 2)) / (arr.length - 1)
}

const calStd = (arr) => {
    return Math.sqrt(calVariance(arr))
}


const calMax = (arr) => {
    return Math.max(arr)
}

const calMin = (arr) => {
    return Math.min(arr)
}

export {
    calSum,
    calTrimmedMean,
    calMedian,
    calPercentTile,
    calVariance,
    calMax,
    calMin,
    calStd,
    trimArr,
}