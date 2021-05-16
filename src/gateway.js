const baseUrl =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false';

export const fetchCryptoList = () => {
  return fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
};
