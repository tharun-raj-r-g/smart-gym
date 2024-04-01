
import axios from "@/api/axios";
export const initProfile = async (user) => {
    console.log("chk");
    console.log("check2profile");
    console.log("user data in profile: ",user);
     if (!user) { // Call the navigation function passed from the component
        return;
     }
    try {
        console.log("profile try");
        const response = await axios.get("/user?id=" + user.id);

        console.log(response);
        return response.data;
    } catch (error) {
        console.log("Error occurred:", error);
        return null;
    }
};
