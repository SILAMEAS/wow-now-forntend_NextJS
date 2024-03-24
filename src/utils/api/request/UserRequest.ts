import axios from "axios";
import {deleteCookie, setCookie} from "cookies-next";
import {API_URL} from "../constant";
import {ICreateAccount} from "@/app/register/page";
import {EnumData, keyAuthentication} from "@/Constant/auth/ConstantAuthConfig";

export class UserRequest {
    /** login account **/
    login = async ({ email, password }: { email: string; password: string }) => {
        console.log("email",email)
        try {
            if (email !== "" && password !== "") {
                const response = await axios
                    .post(
                        `${API_URL}auth/sign-in`,
                        { email: email, password: password },
                        {
                            headers: {
                                "Content-Type": "application/json",
                                "Access-Control-Allow-Origin": "*",
                                "Access-Control-Allow-Methods":
                                    "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                                "Access-Control-Allow-Credentials": true,
                            },
                        }
                    )
                    .then((res) => {
                        setCookie(keyAuthentication.logged, true, { maxAge: 18 * 3600 }); // 18 h
                        setCookie(keyAuthentication.token, res.data.jwt, {
                            maxAge: 18 * 3600,
                        }); // 18 h
                        setCookie(keyAuthentication.role, res.data.role, {
                            maxAge: 18 * 3600,
                        });
                        window.location.reload();
                        // this.router.push("/")
                    });
            }
        } catch (e) {
            return e;
        }
    };
    /** create account **/
    createAcc = async (data:ICreateAccount) => {
        const {email,password,firstName,postalCode,LastName,streetAddress,city,confirmPassword,country,stateProvince,role}=data;
        const dataDto:{
            password: string;
            address: {
                country: string;
                streetAddress: string;
                city: string;
                postalCode: string;
                stateProvince: string
            };
            role: EnumData;
            fullName: string;
            email: string
        }={fullName:firstName+" "+LastName,address:{streetAddress,city,country,postalCode,stateProvince},password,email,role:role??EnumData.ROLE_CUSTOMER};
        console.log("dataDto",dataDto)

        try {
            await axios
                .post(
                    `${API_URL}auth/sign-up`,
                    dataDto,
                    {
                        headers: {
                            // "Content-Type": "application/json",
                            // "Access-Control-Allow-Origin": "*",
                            // "Access-Control-Allow-Methods":
                            //     "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                            // "Access-Control-Allow-Credentials": true,
                        },
                    }
                )
                .then((res) => {
                    console.log("REs",res);
                    this.login({email,password});
                });
        } catch (e) {
            return e;
        }
    };
    /** logout **/
    logout = () => {
        deleteCookie(keyAuthentication.logged);
        deleteCookie(keyAuthentication.role);
        deleteCookie(keyAuthentication.token);
        window.location.reload();
        // this.router.push("/login");
      };

}
