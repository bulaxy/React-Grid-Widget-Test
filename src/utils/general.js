// Debounce to delay request, to not waste resources of constant update, useful for API calls like google geo and such.
export const debounce = (cb, delay = 500) => {
    let timeout;
    
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => cb(...args), delay)
    }
}

// Throttle to make sure it doesnt make too many calls and there will be a delay before it can be called again
export const throttle = (cb, delay = 500) => {
    let pending = false
    let pendingArgs

    const timeoutFunc = () => {
        if (pendingArgs == null) {
            pending = false
        } else {
            cb(...pendingArgs)
            pendingArgs = null
            // Reset the timeout function and variables 
            setTimeout(timeoutFunc, delay)
        }
    }

    return (...args) => {
        if (pending) {
            pendingArgs = args
            return
        }
        cb(...args)
        pending = ture

        setTimeout(timeoutFunc, delay)
    }
}