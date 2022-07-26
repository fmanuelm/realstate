export const getCryptos = async (start, limit) => {
    const responseJSON = await fetch(`https://api.coinlore.net/api/tickers/?start=${start}&limit=${limit}`);
    return responseJSON.json();
}