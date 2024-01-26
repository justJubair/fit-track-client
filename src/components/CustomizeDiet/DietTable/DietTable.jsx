"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Avatar,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import LOGO from "../../../assets/images/logo04.png";
import { useSession } from "next-auth/react";
import getDietPlan from "@/app/api/get/getDietPlan";

const DietTable = () => {
  const { data: session } = useSession();
  const email = session?.user?.email;
  const image = session?.user?.image;
  const name = session?.user?.name;
  console.log(session.user)
  const [dietPlanData, setDietPlanData] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (email) {
          const planData = await getDietPlan(email);
          setDietPlanData(planData);
          console.log(planData);
          setLoader(false); // Set loader to false once data is loaded
        }
      } catch (error) {
        // Handle errors
        console.error("Error fetching diet plan:", error.message);
        setLoader(false); // Set loader to false in case of an error
      }
    };

    fetchData();
  }, [email]);

  if (loader) {
    // Render loading state
    return <div>Loading...</div>;
  }

  if (!session || !dietPlanData) {
    // Render additional loading state or redirect to login page
    return <div>Loading...</div>;
  }


  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "600px",
        margin: "20px auto",
        border: "1px solid gray",
        borderRadius: "50px",
      }}
    >
      <Box
        sx={{
          mx: "2rem",
          my: "2rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
            <Avatar sx={{ backgroundColor: "black" }} aria-label="recipe">
          <Image
            width={500}
            height={500}
            src={image}
            alt=""
          />
        </Avatar>
        <Typography variant="h6" sx={{ color: "black" }}>
         {name}
        </Typography>
        <Typography variant="h6" sx={{ color: "black" }}>
         {email}
        </Typography>
      </Box>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Meal</TableCell>
              <TableCell>Food</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Unit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dietPlanData.meal_plan.map((meal, mealIndex) => (
              <React.Fragment key={mealIndex}>
                <TableRow>
                  <TableCell
                    sx={{ fontWeight: "bold" }}
                    rowSpan={meal.foods.length + 1}
                  >
                    {meal.meal}
                  </TableCell>
                </TableRow>
                {meal.foods.map((food, foodIndex) => (
                  <TableRow key={foodIndex}>
                    <TableCell>{food.food}</TableCell>
                    <TableCell>{food.quantity}</TableCell>
                    <TableCell>{food.unit}</TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
            <TableRow>
              <TableCell colSpan={4} style={{ marginTop: "20px", border: "0" }}>
                <Table>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }} rowSpan={5}>
                      Nutritional Information:
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Calories</TableCell>
                    <TableCell>{dietPlanData.calories}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Protein</TableCell>
                    <TableCell>{dietPlanData.protein_grams}g</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Carbs</TableCell>
                    <TableCell>{dietPlanData.carbs_grams}g</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Fat</TableCell>
                    <TableCell>{dietPlanData.fat_grams}g</TableCell>
                  </TableRow>
                </Table>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          mb: "2rem",
          mx: "2rem",
          display: "flex",
          justifyContent: "end",
        }}
        id="scroll-dialog-title"
      >
        <Image src={LOGO} width={150} height={150} alt="Logo" />
      </Box>
    </div>
  );
};

export default DietTable;
