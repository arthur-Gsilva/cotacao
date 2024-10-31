const baseURL = 'https://economia.awesomeapi.com.br/json'

export const getDolar = async () => {
    let url = `${baseURL}/last/USD-BRL`

    const req = await fetch(url)
    const json = await req.json()

    if(json.USDBRL){
        return parseFloat(json.USDBRL.ask)
    }

    return 0
}
export const getEuro = async () => {
    let url = `${baseURL}/last/EUR-BRL`

    const req = await fetch(url)
    const json = await req.json()

    if(json.EURBRL){
        return parseFloat(json.EURBRL.ask)
    }

    return 0
}