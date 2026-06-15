interface IType {
    attrOne: string,
    attrTwo: string
}

function getGeneric<T, R>(firstAttr: T, secondAttr: R): IType {
    console.log(typeof firstAttr, typeof secondAttr)
    return {
        attrOne: typeof firstAttr,
        attrTwo: typeof secondAttr
    }
}

getGeneric(10, 'str')
getGeneric('sfddfd', 10)
getGeneric({}, null)
let und: undefined
getGeneric(und, true)