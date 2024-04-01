// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import HomePageGraphic from "@/assets/bodybuildertwo.png";
import { initProfile } from "@/lib/profile";
import { useUser } from "@clerk/clerk-react";
interface UserProfileInterface {
  id: String;
  userId: String;
  name: String;
  email: String;
  height: String;
  weight: String;
  bmi: String;
  age: String;
  gender: String;
  injury: String;
  medication: String;
  experience: String;
  specification: String;
}
const Welcome = () => {
  const navigator = useNavigate();
  const [User, setUser] = useState<UserProfileInterface | null>(null);
  const { user } = useUser();
  // const handleUser = async () => {
  //   const userData = await initProfile();
  //   if (!userData) {
  //     navigator("/signup");
  //   } else {
  //     setUser(userData);
  //     console.log(userData);
  //     console.log(User); // This will log the previous state, not the updated state
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //   }
  // };
  console.log("Into welcome");
  console.log("Here is the user data" + User);

  useEffect(() => {
    const fetchProfile = async () => {
      const userProfile = await initProfile(user);
      setUser(userProfile);
      console.log(userProfile);
      console.log("hiii");
    };
    fetchProfile();
  }, [user]); // Make sure there are no dependencies here that might cause the effect to rerun

  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const name = queryParams.get("name");
  // const email = queryParams.get("email");
  // const password = queryParams.get("password");
  // const height = queryParams.get("height");
  // const weight = queryParams.get("weight");
  // const age = queryParams.get("age");
  // const gender = queryParams.get("gender");
  // const injuries = queryParams.get("injuries");
  // const medication = queryParams.get("medication");
  // const experience = queryParams.get("experience");
  // const bmi = queryParams.get("bmi");
  // const specification = queryParams.get("specification");

  const [Week, setWeek] = useState(1);

  const cases = [
    {
      id: 0,
      minimumBmi: 18.5,
      maximumBmi: 25,
      injuries: "nil",
      specification: "nil",
      gender: "male",
      circuit: [
        { name: "Warmup- 20 minutes", set: 3, reps: 10 },
        { name: "Flat Dumbbell press", set: 3, reps: 10 },
        { name: "Inclined Dumbbell press", set: 3, reps: 10 },
        { name: "Seated Machine Fly", set: 3, reps: 10 },
        { name: "Wide grip Lat pull down", set: 3, reps: 10 },
        { name: "Closed Cable Grip Seated Row", set: 3, reps: 10 },
        { name: "T-bar Row Machine", set: 3, reps: 10 },
        { name: "Leg Extension", set: 3, reps: 10 },
        { name: "Leg press", set: 3, reps: 10 },
        { name: "Leg Curl Machine", set: 3, reps: 10 },
        { name: "Standing Call Rise", set: 3, reps: 10 },
        { name: "Cables Push down", set: 3, reps: 10 },
        { name: "Bar Push down", set: 3, reps: 10 },
        { name: "Seated Bench- Tricep Dips", set: 3, reps: 10 },
        { name: "Barbell Curls", set: 3, reps: 10 },
        { name: "Dumbbell Curls", set: 3, reps: 10 },
        { name: "Hammer Curls", set: 3, reps: 10 },
        { name: "Seated Shoulder press", set: 3, reps: 10 },
        { name: "Dumbbell Front Rise", set: 3, reps: 10 },
        { name: "Dumbbell Side Rise", set: 3, reps: 10 },
        { name: "Barbell shrugs", set: 3, reps: 10 },
      ],
      workoutperweek: [
        {
          workoutperday: [
            { name: "Threadmill-15min", set: 3, reps: 10 },
            { name: "Pushups", set: 3, reps: 10 },
            { name: "Flat Bench Press - Dumbell", set: 3, reps: 10 },
            { name: "Incline Bench Press - Dumbell", set: 3, reps: 10 },
            { name: "Standing Chest Fly - Cable", set: 3, reps: 10 },
            { name: "Smith Machine - Chest", set: 3, reps: 10 },
            { name: "Pushups", set: 3, reps: 10 },
          ],
        },
        {
          workoutperday: [
            { name: "Bent - Over Row - Barbell", set: 3, reps: 10 },
            { name: "Lat pull down - Cable", set: 3, reps: 10 },
            { name: "Smith Machine - Barbell", set: 3, reps: 10 },
            { name: "Cuban Rotation - Dumbell", set: 3, reps: 10 },
            { name: "Good Morning - Smith Machine", set: 3, reps: 10 },
            { name: "Pullups", set: 3, reps: 10 },
          ],
        },
        {
          workoutperday: [
            { name: "Reverse Crunch - Cable", set: 3, reps: 10 },
            { name: "Hanging Leg Raise Twist", set: 3, reps: 10 },
            { name: "Kneeling Crunch - Cable", set: 3, reps: 10 },
            { name: "Lying Hip Raise - Smith Machine", set: 3, reps: 10 },
            { name: "Tuck Crunch - Dumbell", set: 3, reps: 10 },
          ],
        },
        {
          workoutperday: [
            { name: "Face Pull - Cable", set: 3, reps: 10 },
            { name: "Upright row Barbell", set: 3, reps: 10 },
            { name: "Shoulder Press", set: 3, reps: 10 },
            { name: "Front Raise", set: 3, reps: 10 },
            { name: "Lateral Raise", set: 3, reps: 10 },
          ],
        },
        {
          workoutperday: [
            { name: "Barbell Curls", set: 3, reps: 10 },
            { name: "Dumbell Curls", set: 3, reps: 10 },
            { name: "Peacher Curls", set: 3, reps: 10 },
            { name: "Inclined Curls", set: 3, reps: 10 },
            { name: "Hammer Curls", set: 3, reps: 10 },
            { name: "Closed Grip Bench Press", set: 3, reps: 10 },
            { name: "Cables Push Down", set: 3, reps: 10 },
            { name: "One Hand Dumbell - Low Weight", set: 3, reps: 10 },
            { name: "V- Curve tricep Rod - Press Down Bar", set: 3, reps: 10 },
            { name: "Tricep Dips - Seated Bench", set: 3, reps: 10 },
          ],
        },
        {
          workoutperday: [
            { name: "Free Squat", set: 3, reps: 10 },
            { name: "Squat", set: 3, reps: 10 },
            { name: "Leg Extension", set: 3, reps: 10 },
            { name: "Leg Press - No Weight", set: 3, reps: 10 },
            { name: "Self Raise", set: 3, reps: 10 },
            { name: "Hamstring", set: 3, reps: 10 },
          ],
        },
      ],
    },
    {
      id: 1,
      minimumBmi: 18.5,
      maximumBmi: 25,
      injuries: "",
      specification: "",
      gender: "male",
      circuit: [
        { name: "Warmup- 20 minutes", set: 3, reps: 10 },
        { name: "Flat Dumbbell press", set: 3, reps: 10 },
        { name: "Inclined Dumbbell press", set: 3, reps: 10 },
        { name: "Seated Machine Fly", set: 3, reps: 10 },
        { name: "Wide grip Lat pull down", set: 3, reps: 10 },
        { name: "Closed Cable Grip Seated Row", set: 3, reps: 10 },
        { name: "T-bar Row Machine", set: 3, reps: 10 },
        { name: "Leg Extension", set: 3, reps: 10 },
        { name: "Leg press", set: 3, reps: 10 },
        { name: "Leg Curl Machine", set: 3, reps: 10 },
        { name: "Standing Call Rise", set: 3, reps: 10 },
        { name: "Cables Push down", set: 3, reps: 10 },
        { name: "Bar Push down", set: 3, reps: 10 },
        { name: "Seated Bench- Tricep Dips", set: 3, reps: 10 },
        { name: "Barbell Curls", set: 3, reps: 10 },
        { name: "Dumbbell Curls", set: 3, reps: 10 },
        { name: "Hammer Curls", set: 3, reps: 10 },
        { name: "Seated Shoulder press", set: 3, reps: 10 },
        { name: "Dumbbell Front Rise", set: 3, reps: 10 },
        { name: "Dumbbell Side Rise", set: 3, reps: 10 },
        { name: "Barbell shrugs", set: 3, reps: 10 },
      ],
      workoutperweek: [
        {
          workoutperday: [
            { name: "Threadmill-15min", set: 3, reps: 10 },
            { name: "Pushups", set: 3, reps: 10 },
            { name: "Flat Bench Press - Dumbell", set: 3, reps: 10 },
            { name: "Incline Bench Press - Dumbell", set: 3, reps: 10 },
            { name: "Standing Chest Fly - Cable", set: 3, reps: 10 },
            { name: "Smith Machine - Chest", set: 3, reps: 10 },
            { name: "Pushups", set: 3, reps: 10 },
          ],
        },
        {
          workoutperday: [
            { name: "Bent - Over Row - Barbell", set: 3, reps: 10 },
            { name: "Lat pull down - Cable", set: 3, reps: 10 },
            { name: "Smith Machine - Barbell", set: 3, reps: 10 },
            { name: "Cuban Rotation - Dumbell", set: 3, reps: 10 },
            { name: "Good Morning - Smith Machine", set: 3, reps: 10 },
            { name: "Pullups", set: 3, reps: 10 },
          ],
        },
        {
          workoutperday: [
            { name: "Reverse Crunch - Cable", set: 3, reps: 10 },
            { name: "Hanging Leg Raise Twist", set: 3, reps: 10 },
            { name: "Kneeling Crunch - Cable", set: 3, reps: 10 },
            { name: "Lying Hip Raise - Smith Machine", set: 3, reps: 10 },
            { name: "Tuck Crunch - Dumbell", set: 3, reps: 10 },
          ],
        },
        {
          workoutperday: [
            { name: "Face Pull - Cable", set: 3, reps: 10 },
            { name: "Upright row Barbell", set: 3, reps: 10 },
            { name: "Shoulder Press", set: 3, reps: 10 },
            { name: "Front Raise", set: 3, reps: 10 },
            { name: "Lateral Raise", set: 3, reps: 10 },
          ],
        },
        {
          workoutperday: [
            { name: "Barbell Curls", set: 3, reps: 10 },
            { name: "Dumbell Curls", set: 3, reps: 10 },
            { name: "Peacher Curls", set: 3, reps: 10 },
            { name: "Inclined Curls", set: 3, reps: 10 },
            { name: "Hammer Curls", set: 3, reps: 10 },
            { name: "Closed Grip Bench Press", set: 3, reps: 10 },
            { name: "Cables Push Down", set: 3, reps: 10 },
            { name: "One Hand Dumbell - Low Weight", set: 3, reps: 10 },
            { name: "V- Curve tricep Rod - Press Down Bar", set: 3, reps: 10 },
            { name: "Tricep Dips - Seated Bench", set: 3, reps: 10 },
          ],
        },
        {
          workoutperday: [
            { name: "Free Squat", set: 3, reps: 10 },
            { name: "Squat", set: 3, reps: 10 },
            { name: "Leg Extension", set: 3, reps: 10 },
            { name: "Leg Press - No Weight", set: 3, reps: 10 },
            { name: "Self Raise", set: 3, reps: 10 },
            { name: "Hamstring", set: 3, reps: 10 },
          ],
        },
      ],
    },
    {},
  ];
  const week1 = [
    { name: "Warmup- 20 minutes", set: 3, reps: 10 },
    { name: "Flat Dumbbell press", set: 3, reps: 10 },
    { name: "Inclined Dumbbell press", set: 3, reps: 10 },
    { name: "Seated Machine Fly", set: 3, reps: 10 },
    { name: "Wide grip Lat pull down", set: 3, reps: 10 },
    { name: "Closed Cable Grip Seated Row", set: 3, reps: 10 },
    { name: "T-bar Row Machine", set: 3, reps: 10 },
    { name: "Leg Extension", set: 3, reps: 10 },
    { name: "Leg press", set: 3, reps: 10 },
    { name: "Leg Curl Machine", set: 3, reps: 10 },
    { name: "Standing Call Rise", set: 3, reps: 10 },
    { name: "Cables Push down", set: 3, reps: 10 },
    { name: "Bar Push down", set: 3, reps: 10 },
    { name: "Seated Bench- Tricep Dips", set: 3, reps: 10 },
    { name: "Barbell Curls", set: 3, reps: 10 },
    { name: "Dumbbell Curls", set: 3, reps: 10 },
    { name: "Hammer Curls", set: 3, reps: 10 },
    { name: "Seated Shoulder press", set: 3, reps: 10 },
    { name: "Dumbbell Front Rise", set: 3, reps: 10 },
    { name: "Dumbbell Side Rise", set: 3, reps: 10 },
    { name: "Barbell shrugs", set: 3, reps: 10 },
  ];

  const week2 = [
    [
      { name: "Thread Mill - 15 Min", set: 3, reps: 10 },
      { name: "Pushups", set: 3, reps: 10 },
      { name: "Flat Bench Press - Barbell", set: 3, reps: 10 },
      { name: "Inclined Bench Press - Dumbell", set: 3, reps: 10 },
      { name: "Standing Chest Fly - Cable", set: 3, reps: 10 },
      { name: "Thread Mill - 15 Min", set: 3, reps: 10 },
      { name: "Pushups", set: 3, reps: 10 },
      { name: "Flat Bench Press - Barbell", set: 3, reps: 10 },
      { name: "Inclined Bench Press - Dumbell", set: 3, reps: 10 },
      { name: "Standing Chest Fly - Cable", set: 3, reps: 10 },
    ],
    [
      { name: "Bent Over Row - Barbell", set: 3, reps: 10 },
      { name: "Lat Pull Down - Cable", set: 3, reps: 10 },
      { name: "Smith Machine - Barbell", set: 3, reps: 10 },
      { name: "Cuban Rotation - Dumbell", set: 3, reps: 10 },
      { name: "Thread Mill - 15 Min", set: 3, reps: 10 },
      { name: "Pushups", set: 3, reps: 10 },
      { name: "Flat Bench Press - Barbell", set: 3, reps: 10 },
      { name: "Inclined Bench Press - Dumbell", set: 3, reps: 10 },
      { name: "Standing Chest Fly - Cable", set: 3, reps: 10 },
    ],
    [
      { name: "Bent Over Row - Barbell", set: 3, reps: 10 },
      { name: "Lat Pull Down - Cable", set: 3, reps: 10 },
      { name: "Smith Machine - Barbell", set: 3, reps: 10 },
      { name: "Cuban Rotation - Dumbell", set: 3, reps: 10 },
      { name: "Thread Mill - 15 Min", set: 3, reps: 10 },
      { name: "Pushups", set: 3, reps: 10 },
      { name: "Flat Bench Press - Barbell", set: 3, reps: 10 },
      { name: "Inclined Bench Press - Dumbell", set: 3, reps: 10 },
      { name: "Standing Chest Fly - Cable", set: 3, reps: 10 },
    ],
    [
      { name: "Bent Over Row - Barbell", set: 3, reps: 10 },
      { name: "Lat Pull Down - Cable", set: 3, reps: 10 },
      { name: "Smith Machine - Barbell", set: 3, reps: 10 },
      { name: "Cuban Rotation - Dumbell", set: 3, reps: 10 },
      { name: "Thread Mill - 15 Min", set: 3, reps: 10 },
      { name: "Pushups", set: 3, reps: 10 },
      { name: "Flat Bench Press - Barbell", set: 3, reps: 10 },
      { name: "Inclined Bench Press - Dumbell", set: 3, reps: 10 },
      { name: "Standing Chest Fly - Cable", set: 3, reps: 10 },
    ],
    [
      { name: "Bent Over Row - Barbell", set: 3, reps: 10 },
      { name: "Lat Pull Down - Cable", set: 3, reps: 10 },
      { name: "Smith Machine - Barbell", set: 3, reps: 10 },
      { name: "Cuban Rotation - Dumbell", set: 3, reps: 10 },
      { name: "Thread Mill - 15 Min", set: 3, reps: 10 },
      { name: "Pushups", set: 3, reps: 10 },
      { name: "Flat Bench Press - Barbell", set: 3, reps: 10 },
      { name: "Inclined Bench Press - Dumbell", set: 3, reps: 10 },
      { name: "Standing Chest Fly - Cable", set: 3, reps: 10 },
    ],
    [
      { name: "Thread Mill - 15 Min", set: 3, reps: 10 },
      { name: "Pushups", set: 3, reps: 10 },
      { name: "Flat Bench Press - Barbell", set: 3, reps: 10 },
      { name: "Inclined Bench Press - Dumbell", set: 3, reps: 10 },
      { name: "Standing Chest Fly - Cable", set: 3, reps: 10 },
      { name: "Bent Over Row - Barbell", set: 3, reps: 10 },
      { name: "Lat Pull Down - Cable", set: 3, reps: 10 },
      { name: "Smith Machine - Barbell", set: 3, reps: 10 },
      { name: "Cuban Rotation - Dumbell", set: 3, reps: 10 },
    ],
  ];

  console.log(week2);

  return (
    <div className="login flex flex-col justify-start bg-blue-100">
      <div className="mb-[2%] mt-[8%] flex justify-around bg-blue-300 p-[2%]">
        <div>
          <header>
            {/* Your header content goes here */}
            <h1 className="mb-[2%] text-left text-[40px] font-bold">
              Welcome, {User?.name}
            </h1>
          </header>
          <div className="content">
            <ul>
              <li className="mb-[3%] text-[20px]">
                <strong>Age : </strong> {User?.age}
              </li>
              <li className="mb-[3%] text-[20px]">
                <strong>Height(in cms) : </strong> {User?.height}
              </li>
              <li className="text-[20px]">
                <strong>Weight(in kgs) : </strong>
                {User?.weight}
              </li>
              {/* Display other values as needed */}
            </ul>
          </div>
        </div>
        <div className="min-h-[200px] w-1/3 rounded-lg bg-white p-5 shadow-lg">
          <h2 className="text-[16px] font-bold text-black">BMI</h2>
          <h2 className="mb-[1%] text-[35px] font-bold text-green-500">
            {User?.bmi}
          </h2>
          <p className="text-[16px]">
            Your weight is{" "}
            <span className="font-bold text-green-500">SUITABLE</span> for body
            condition and fit enough. But{" "}
            <span className="font-bold text-green-500">MAINTAINING</span> it an
            important thing. You can maintain your weight by proper workout
            routines.
          </p>
        </div>
      </div>
      <div className="mt-[3%] flex w-full flex-col  p-[2%] ">
        <h1 className="mb-[2%] text-center text-[40px] font-bold">
          Your Workout Chart
        </h1>
        <h1 className="mb-[2%] text-left text-[35px] font-bold">Week {Week}</h1>
        <h2 className="mb-4 text-left text-xl font-bold">Instructions</h2>
        <div className="mb-[3%] text-base">
          <ul className="flex flex-col gap-5">
            <li className="text-[20px]">1. 1 Minute Gap between each set</li>
            <li className="text-[20px]">
              2. 2 Minutes Gap between each workout{" "}
            </li>
          </ul>
        </div>

        {cases.map((Case, index) => (
          <div>
            {Case.gender == User?.gender &&
              (Case.injuries == User?.injury || !User?.injury) &&
              (Case.specification == User?.specification || !User?.specification) &&
              parseInt(User?.bmi) >= Case.minimumBmi &&
              parseInt(User?.bmi) <= Case.maximumBmi && (
                <div>
                  {Week==1 &&(<div className="flex justify-around bg-inherit">
                    <motion.table
                      className="to-white-100 w-1/2 self-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-200 p-10 shadow-md"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      style={{
                        minHeight: "350px",
                        overflowY: "auto",
                        padding: "10%",
                      }} // Set constant height and enable vertical scrolling
                    >
                      <thead>
                        <tr>
                          <th className="px-[15%] py-[5%] text-left text-xl font-bold">
                            Workout
                          </th>
                          <th className="text-center text-xl font-bold">Set</th>
                          <th className="text-center text-xl font-bold">
                            Reputation
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Case.circuit.map((workout, index) => (
                          <tr key={index}>
                            <td className="px-[5%] pb-[3%] text-[20px]">
                              {workout.name}
                            </td>
                            <td className="text-center text-[20px]">
                              {workout.set}
                            </td>
                            <td className="text-center text-[20px]">
                              {workout.reps}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </motion.table>
                    <motion.div
                      className="flex w-1/3 flex-col p-6 "
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <div
                        className="flex basis-3/5 justify-center md:z-10
                md:ml-40 md:mt-16 md:justify-items-end"
                      >
                        <img
                          alt="home-pageGraphic"
                          className="h-[400px] w-[1000px]"
                          src={HomePageGraphic}
                          width={800}
                          height={800}
                        />
                      </div>
                    </motion.div>{" "}
                  </div>)}

                  {Week==2 && Case.workoutperweek.map((day, index) => (
                    <div className="flex justify-around bg-inherit">
                      <motion.table
                        className="to-white-100 mt-[5%] w-1/2 self-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-200 p-6 shadow-md"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        style={{ height: "300px", overflowY: "auto" }} // Set constant height and enable vertical scrolling
                      >
                        <thead>
                          <tr>
                            <td
                              colSpan={3}
                              className="pt-[4%] text-center text-xl font-bold"
                            >
                              Day {index + 1}
                            </td>
                          </tr>
                          <tr>
                            <th className="px-[15%] py-[5%] text-left text-xl font-bold">
                              Workout
                            </th>
                            <th className="text-center text-xl font-bold">
                              Set
                            </th>
                            <th className="text-center text-xl font-bold">
                              Reputation
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <React.Fragment key={index}>
                            {day.workoutperday.map((workout, workoutIndex) => (
                              <tr key={workoutIndex}>
                                <td className="px-[5%] pb-[4%] text-[20px]">
                                  {workout.name}
                                </td>
                                <td className="text-center text-[20px]">
                                  {workout.set}
                                </td>
                                <td className="text-center text-[20px]">
                                  {workout.reps}
                                </td>
                              </tr>
                            ))}
                          </React.Fragment>
                        </tbody>
                      </motion.table>
                      <motion.div
                        className="flex w-1/3 flex-col p-6 "
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <div
                          className="flex basis-3/5 justify-center md:z-10
                      md:ml-40 md:mt-16 md:justify-items-end"
                        >
                          <img
                            alt="home-pageGraphic"
                            className="h-[400px] w-[1000px]"
                            src={HomePageGraphic}
                            width={800}
                            height={800}
                          />
                        </div>
                      </motion.div>{" "}
                    </div>
                  ))}
                </div>
              )}
          </div>
        ))}

        {Week == 1 ? (
          <div className="flex justify-around bg-inherit">
            <motion.table
              className="to-white-100 w-1/2 self-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-200 p-10 shadow-md"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              style={{ minHeight: "350px", overflowY: "auto", padding: "10%" }} // Set constant height and enable vertical scrolling
            >
              <thead>
                <tr>
                  <th className="px-[15%] py-[5%] text-left text-xl font-bold">
                    Workout
                  </th>
                  <th className="text-center text-xl font-bold">Set</th>
                  <th className="text-center text-xl font-bold">Reputation</th>
                </tr>
              </thead>
              <tbody>
                {week1.map((workout, index) => (
                  <tr key={index}>
                    <td className="px-[5%] pb-[3%] text-[20px]">
                      {workout.name}
                    </td>
                    <td className="text-center text-[20px]">
                      {User?.gender == "male" ? "3" : "2"}
                    </td>
                    <td className="text-center text-[20px]">{workout.reps}</td>
                  </tr>
                ))}
              </tbody>
            </motion.table>
            <motion.div
              className="flex w-1/3 flex-col p-6 "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div
                className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
              >
                <img
                  alt="home-pageGraphic"
                  className="h-[400px] w-[1000px]"
                  src={HomePageGraphic}
                  width={800}
                  height={800}
                />
              </div>
            </motion.div>{" "}
          </div>
        ) : null}

        {Week >= 2 ? (
          <>
            {week2.map((day, index) => (
              <div className="flex justify-around bg-inherit">
                <motion.table
                  className="to-white-100 mt-[5%] w-1/2 self-center rounded-lg bg-gradient-to-br from-blue-400 to-blue-200 p-6 shadow-md"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  style={{ height: "300px", overflowY: "auto" }} // Set constant height and enable vertical scrolling
                >
                  <thead>
                    <tr>
                      <td
                        colSpan={3}
                        className="pt-[4%] text-center text-xl font-bold"
                      >
                        Day {index + 1}
                      </td>
                    </tr>
                    <tr>
                      <th className="px-[15%] py-[5%] text-left text-xl font-bold">
                        Workout
                      </th>
                      <th className="text-center text-xl font-bold">Set</th>
                      <th className="text-center text-xl font-bold">
                        Reputation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <React.Fragment key={index}>
                      {day.map((workout, workoutIndex) => (
                        <tr key={workoutIndex}>
                          <td className="px-[5%] pb-[4%] text-[20px]">
                            {workout.name}
                          </td>
                          <td className="text-center text-[20px]">
                            {User?.gender == "male" ? "3" : "2"}
                          </td>
                          <td className="text-center text-[20px]">
                            {workout.reps}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  </tbody>
                </motion.table>
                <motion.div
                  className="flex w-1/3 flex-col p-6 "
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div
                    className="flex basis-3/5 justify-center md:z-10
                      md:ml-40 md:mt-16 md:justify-items-end"
                  >
                    <img
                      alt="home-pageGraphic"
                      className="h-[400px] w-[1000px]"
                      src={HomePageGraphic}
                      width={800}
                      height={800}
                    />
                  </div>
                </motion.div>{" "}
              </div>
            ))}
          </>
        ) : null}

        <button
          className="mt-[5%] h-[50px] w-[200px] self-center rounded-md bg-blue-500 font-bold text-white shadow-lg"
          onClick={() => {
            setWeek(Week + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Next Week
        </button>
      </div>
    </div>
  );
};

export default Welcome;
