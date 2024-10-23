import { BASE_URL } from "./Common";
import axiosInstance from "./axiosConfig";

export function getNotices(page = 0, size = 20, sort = "asc") {

  return axiosInstance.get(`${BASE_URL}/notices`, {
    params: {
      page,
      size,
      sort,
    },
  })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error("Error fetching notices data: ", error);
      throw error;
    });
}

export function getNoticeById(noticeId) {

  return axiosInstance.get(`${BASE_URL}/notices/${noticeId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error("Error fetching notice data: ", error);
      throw error;
    });
}