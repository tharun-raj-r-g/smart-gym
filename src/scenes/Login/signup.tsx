import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import axios from "@/api/axios";
import { initProfile } from "@/lib/profile";
function SignUp() {
  const { user } = useUser();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Select your gender"); // Default value set to "male"
  const [injury, setInjuries] = useState("Select if there is any injury"); // Default value set to "hands"
  const [medication, setMedication] = useState("");
  const [experience, setExperience] = useState("");
  const [bmi, setBMI] = useState("");
  const [specification, setSpecification] = useState("");
  const [showBMI, setShowBMI] = useState(false);

  const [userCheck,setUserCheck]=useState(null);

  useEffect(() => {
    if(userCheck!=null){
     window.location.pathname="/welcome";
    }
   }, [userCheck]);
 
 
   useEffect(() => {
     const fetchProfile = async () => {
       const userProfile = await initProfile(user);
         setUserCheck(userProfile);
         console.log(userProfile);
         console.log("hiii");
 
     };
     fetchProfile();
   }, [user]);

  useEffect(() => {
    if (user?.fullName) setName(user.fullName);
    if (user?.emailAddresses) setEmail(user.emailAddresses[0].emailAddress);
  }, [user]);

  const calculateBMI = () => {
    // Calculate BMI
    const heightInMeters = parseFloat(height) / 100; // convert height to meters
    const weightInKg = parseFloat(weight);
    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(2)); // round BMI to 2 decimal places

    // Determine BMI specification
    let bmiSpecification = "";
    if (bmiValue < 18.5) {
      bmiSpecification = "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      bmiSpecification = "Normal weight";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      bmiSpecification = "Overweight";
    } else {
      bmiSpecification = "Obese";
    }
    setSpecification(bmiSpecification);

    setShowBMI(true);
  };

  const handleCurrentSubmit=()=>{
    const queryParams = new URLSearchParams({
      name,
      email,
      height,
      weight,
      age,
      gender,
      injury,
      medication,
      experience,
      bmi,
      specification,
    }).toString();

    // Generate the URL with the query parameters
    const url = `/welcome?${queryParams}`;

    // Navigate to the URL with query parameters
    navigate(url);
  }
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
        const userData = {
            name,
            email,
            height,
            weight,
            bmi,
            age,
            gender,
            injury,
            medication,
            experience,
            specification,
            userId:user?.id
        };

        const response = await axios.post("/user", userData);
        console.log("post successful");
        console.log(response.data);
        
    } catch (error) {
        console.error("post error:", error);
    }
    navigate(`/welcome`);
};


  return (
    <div className="login flex flex-col items-center justify-center bg-inherit p-[2%]">
      <h1 className="font-bold text-[40px] mb-[2%] mt-[5%]">SignUp</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            className="w-[500px] h-[40px] border rounded-lg mb-[5%] pl-[2%] outline-white"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            className="w-[500px] h-[40px] border rounded-lg mb-[5%] pl-[2%] outline-white"
          />
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height (in cm)"
            className="h-[40px]  border rounded-lg mb-[5%] pl-[2%] outline-white"
          />
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight (in KG)"
            className="h-[40px]  border rounded-lg mb-[5%] pl-[2%] outline-white"
          />
          <button
            type="button"
            onClick={calculateBMI}
            className="bg-pink-500 text-white w-[200px] rounded-md h-[35px] self-center mb-[5%]"
          >
            Calculate BMI
          </button>
          {showBMI && (
            <div className=" border-2 rounded-lg mb-[5%] pl-[2%] border-blue-200 p-[3%] bg-white">
              <p>Your BMI: {bmi}</p>
              <p>Specification: {specification}</p>
            </div>
          )}
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age"
            className="h-[40px]  border rounded-lg mb-[5%] pl-[2%] outline-white"
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="h-[40px]  border rounded-lg mb-[5%] pl-[2%] outline-white"
          >
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
          <select
            value={injury}
            onChange={(e) => setInjuries(e.target.value)}
            className="h-[40px]  border rounded-lg mb-[5%] pl-[2%] outline-white"
          >
            <option value="">If you have injury, Select type</option>
            <option value="hands">Hands</option>
            <option value="legs">Legs</option>
            <option value="shoulders">Shoulders</option>
            <option value="chest">Chest</option>
          </select>
          <input
            type="text"
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
            placeholder="Medication"
            className="h-[40px]  border rounded-lg mb-[5%] pl-[2%] outline-white"
            />
            <input
              type="text"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Experience (in years)"
              className="h-[40px]  border rounded-lg mb-[5%] pl-[2%] outline-white"
            />
            <button
              type="submit"
              value="Submit"
              className="bg-red-800 text-white w-[200px] rounded-md h-[35px] self-center"
            >Submit</button>
          </div>
        </form>
        <br />
        <p>OR</p>
        <br />
        <div className="flex flex-row w-[200px]">
          <p className="mr-[10%]">New here?</p>
          <Link to="/login">
            <p className="underline">Signin</p>
          </Link>
        </div>
      </div>
    );
  }
  
  export default SignUp;
