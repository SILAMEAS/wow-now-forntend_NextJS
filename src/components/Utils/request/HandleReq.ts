import { $headers } from "@/components/Utils/reqHeader";
import axios from "axios";
import { deleteCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { API_URL } from "../constant";
export class HandleReq {
  private router = useRouter();

  // function
  login = async ({ email, password }: { email: string; password: string }) => {
    try {
      if (email !== "" && password !== "") {
        const response = await axios.post(
          `${API_URL}api/v1/users/get-token`,
          { username: email, password: password },
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET,PUT,POST,DELETE,PATCH,OPTIONS",
              "Access-Control-Allow-Credentials": true,
            },
          }
        );
        if (response) {
          const {
            isExpired,
            token,
            user: { familyName, givenName },
          } = response.data;

          if (!isExpired && token) {
            setCookie("logged", true, { maxAge: 18 * 3600 }); // 18 h
            setCookie("token", token, { maxAge: 18 * 3600 }); // 18 h
            // localStorage.setItem("username", familyName + " " + givenName);
          }

          window.location.reload();
          return response;
        }
      }
    } catch (e) {
      return e;
    }
  };
  // logout
  logout = () => {
    deleteCookie("logged");
    this.router.push("/login");
  };
  getProduct = async ({
    pageNumber = 0,
    pageSize = 5,
    search = "",
  }: {
    pageNumber?: string | number;
    pageSize?: string | number;
    search?: string;
  }) => {
    try {
      const response = await fetch(
        `${API_URL}api/v1/product/products?pageNumber=${pageNumber}&pageSize=${pageSize}&search=${search}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  getNew = async ({
    pageNumber = 0,
    pageSize = 5,
    search = "",
  }: {
    pageNumber?: string | number;
    pageSize?: string | number;
    search?: string;
  }) => {
    try {
      const response = await fetch(
        `${API_URL}api/v1/product/get/news?pageNumber=${pageNumber}&pageSize=${pageSize}&search=${search}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  };
  getType = async () => {
    try {
      const response = await fetch(`${API_URL}api/v1/general/get/type`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  getTypeById = async () => {
    try {
      const response = await fetch(`${API_URL}api/v1/general/get/type`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  addType = async ({ value, label }: { value: string; label: string }) => {
    try {
      await axios
        .post(
          `${API_URL}api/v1/general/type`,
          {
            value,
            label,
          },
          {
            headers: { ...$headers, "Content-Type": "application/json" },
          }
        )
        .then((r) => r.status);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  editType = async ({
    // value,
    label,
    id,
  }: {
    // value: string;
    label: string;
    id: string | number;
  }) => {
    try {
      await axios
        .patch(
          `${API_URL}api/v1/general/type`,
          {
            id,
            label,
          },
          {
            headers: { ...$headers, "Content-Type": "application/json" },
          }
        )
        .then((r) => r.status);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  editTitle = async ({
    // value,
    label,
    id,
  }: {
    // value: string;
    label: string;
    id: string | number;
  }) => {
    try {
      await axios
        .patch(
          `${API_URL}api/v1/general/title`,
          {
            id,
            label,
          },
          {
            headers: { ...$headers, "Content-Type": "application/json" },
          }
        )
        .then((r) => r.status);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  editCategory = async ({
    // value,
    label,
    id,
  }: {
    // value: string;
    label: string;
    id: string | number;
  }) => {
    try {
      await axios
        .patch(
          `${API_URL}api/v1/general/category`,
          {
            id,
            label,
          },
          {
            headers: { ...$headers, "Content-Type": "application/json" },
          }
        )
        .then((r) => r.status);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  deleteTypeOrCategoryById = async (id: string | number) => {
    try {
      const res = await axios.delete(
        `${API_URL}api/v1/general/delete/cate-or-type/` + id,
        {
          headers: { ...$headers, "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  /** Category **/
  getCategory = async () => {
    try {
      const response = await fetch(`${API_URL}api/v1/general/get/category`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  addCategory = async ({ value, label }: { value: string; label: string }) => {
    try {
      await axios
        .post(
          `${API_URL}api/v1/general/category`,
          {
            value,
            label,
          },
          {
            headers: { ...$headers, "Content-Type": "application/json" },
          }
        )
        .then((r) => r.status);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  getTitle = async () => {
    try {
      const response = await fetch(`${API_URL}api/v1/general/get/title`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  addTitle = async ({ value, label }: { value: string; label: string }) => {
    try {
      await axios
        .post(
          `${API_URL}api/v1/general/title`,
          {
            value,
            label,
          },
          {
            headers: { ...$headers, "Content-Type": "application/json" },
          }
        )
        .then((r) => r.status);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  deleteImgById = async ({ id }: { id: string | number }) => {
    try {
      await axios
        .delete(
          `${API_URL}api/v1/product/delete-file/id/${id}`,

          {
            headers: { ...$headers, "Content-Type": "application/json" },
          }
        )
        .then((r) => r.status);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
}
