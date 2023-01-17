export function wholeNumberOnly (e:any) {
    if (e.key === '.') e.preventDefault()
    e.target.value = e.target.value.replace(/[^0-9]*/g,'')
}

export function currencyFormatter (num : number) {
    let formatter = new Intl.NumberFormat('en-PH', {
        style: 'currency',
        currency: 'PHP',
    })

    return formatter.format(num)
}