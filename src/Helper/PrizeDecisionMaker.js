const decide = (arr) => {
    if(allSlotsMatched(arr)){
        return "Congratulations , You own $100"
    }else if(twoConsicutiveMatch(arr)){
        return "Congratulations , You own $20"
    }else if(twoNonConsicutiveMatch(arr)){
        return "Congratulations , You own $10"
    }else{
        return "Oops ! Better luck next time"
    }
}

const allSlotsMatched = (arr) => {
    const item = arr[0]
    let result = true
    arr.forEach(e => {
        if(e !== item){
            result = false
        }
    })
    return result
}

const twoConsicutiveMatch = (arr) =>{
    let prev;
    let result = false
    arr.forEach(e => {
        if(!prev){
            prev = e
        }else{
            if(prev === e){
                result = true
            }else{
                prev = e
            }
        }
    })
    return result
}

const twoNonConsicutiveMatch = (arr) =>{
    let prevItems = []
    let result = false;
    arr.forEach(e => {
        if(prevItems.includes(e)){
            result = true
        }else{
            prevItems.push(e)
        }
    })
    return result
}

const prizeDecisionMaker = (arr) =>{
    if(!arr || arr.length !== 3){
        return "Invalid input"
    }else{
        return decide(arr)
    }
}
export default prizeDecisionMaker;