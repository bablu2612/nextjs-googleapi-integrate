// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

const getList = (pageNo = 1) =>
  axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=794137e5f25823bf7b26a1b10ab26aaa&language=en-US&page=${pageNo}`
  );

const siteSearch = (name = "") =>
  axios.get(
    `${process?.env?.API_URL}sites/name?name=${[name]}`
  );

const siteLocation = (Latitude: number, Longitude: number) =>
  axios.get(
    `${process?.env?.API_URL}sites/location?lat=${[Latitude]}&lng=${[Longitude]}`
  );

const siteDetail = (SiteId: string) =>
  axios.get(
    `${process?.env?.API_URL}sites/detail/${[SiteId]}`
  );

export {
  getList,
  siteSearch,
  siteLocation,
  siteDetail
};


