import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
export const getNfts = (address, setNfts) => {
  const options = {
    method: "GET",
    url: `https://deep-index.moralis.io/api/v2/${address}/nft`,
    params: {
      chain: "polygon",
      format: "decimal",
      limit: "10",
      normalizeMetadata: "false",
    },
    headers: {
      accept: "application/json",
      "X-API-Key": API_KEY,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      let nftResults = response.data.result;
      nftResults = nftResults.filter((n) => n.metadata);
      setNfts(nftResults);
    })
    .catch(function (error) {
      console.error(error);
    });
};
