// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
//   Avatar,
//   Button,
// } from "@mui/material";
// import { Box } from "@mui/system";
// import Image from "next/image";
// import LOGO from "../../../assets/images/logo04.png";
// import { useSession } from "next-auth/react";
// import getDietPlan from "@/app/api/get/getDietPlan";
// import Loader from "@/components/Shared/Loader/Loader";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import { useRouter } from "next/navigation";

// const DietTable = () => {
//   const { data: session } = useSession();
//   const email = session?.user?.email;
//   const image = session?.user?.image;
//   const name = session?.user?.name;
//   const [dietPlanData, setDietPlanData] = useState(null);
//   const [loader, setLoader] = useState(true);
//   const pdfRef = useRef();
//   const router = useRouter();
//   const downloadPDF = () => {
//     const input = pdfRef.current;
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "mm", "a4", true);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = pdf.internal.pageSize.getHeight();
//       const imgWidth = canvas.width;
//       const imgHeight = canvas.height;
//       const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
//       const imgX = (pdfWidth - imgWidth * ratio) / 2;
//       const imgY = (pdfHeight - imgHeight * ratio) / 2;

//       pdf.addImage(
//         imgData,
//         "PNG",
//         imgX,
//         imgY,
//         imgWidth * ratio,
//         imgHeight * ratio
//       );
//       pdf.save("Diet-plan.pdf");
//     });
//   };
//   const goHome = () => {
//     router.push("/");
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (email) {
//           const planData = await getDietPlan(email);
//           setDietPlanData(planData);

//           setLoader(false);
//         }
//       } catch (error) {
//         // Handle errors
//         console.error("Error fetching diet plan:", error.message);
//         setLoader(false);
//       }
//     };

//     fetchData();
//   }, [email]);

//   if (loader) {
//     return <Loader></Loader>;
//   }

//   if (!session || !dietPlanData) {
//     return <Loader></Loader>;
//   }

//   return (
//     <div
//     style={{
//       textAlign: "center",
//       maxWidth: "700px",
//       margin: "20px auto",
//     }}
//   >
//     <div
//       ref={pdfRef}
//       style={{
//         textAlign: "center",
//         maxWidth: "800px",
//         margin: "20px auto",
//         border: "1px solid gray",
//         borderRadius: "10px",
//       }}
//     >
//       <Box
//         sx={{
//           mx: "2rem",
//           my: "2rem",
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <Avatar sx={{ backgroundColor: "black" }} aria-label="recipe">
//           <Image width={500} height={500} src={image} alt="" />
//         </Avatar>
//         <Typography variant="h6" sx={{ color: "black" }}>
//           Name : {name}
//         </Typography>
//         <Typography variant="h6" sx={{ color: "black" }}>
//           {email}
//         </Typography>
//       </Box>

//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow className="bg-gray-200  font-bold uppercase">
//               <TableCell>Meal</TableCell>
//               <TableCell>Food</TableCell>
//               <TableCell>Quantity</TableCell>
//               <TableCell>Unit</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {dietPlanData.meal_plan.map((meal, mealIndex) => (
//               <React.Fragment key={mealIndex}>
//                 <TableRow>
//                   <TableCell
//                     sx={{ fontWeight: "bold" }}
//                     rowSpan={meal.foods.length + 1}
//                   >
//                     {meal.meal}
//                   </TableCell>
//                 </TableRow>
//                 {meal.foods.map((food, foodIndex) => (
//                   <TableRow key={foodIndex}>
//                     <TableCell>{food.food}</TableCell>
//                     <TableCell>{food.quantity}</TableCell>
//                     <TableCell>{food.unit}</TableCell>
//                   </TableRow>
//                 ))}
//               </React.Fragment>
//             ))}
//             <TableRow>
//               <TableCell colSpan={4} style={{ marginTop: "20px", border: "0" }}>
//                 <Table>
//                   <tbody>
//                     <TableRow>
//                       <TableCell sx={{ fontWeight: "bold" }} rowSpan={5}>
//                         Nutritional Information:
//                       </TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>Calories</TableCell>
//                       <TableCell>{dietPlanData.calories}</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>Protein</TableCell>
//                       <TableCell>{dietPlanData.protein_grams}g</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>Carbs</TableCell>
//                       <TableCell>{dietPlanData.carbs_grams}g</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>Fat</TableCell>
//                       <TableCell>{dietPlanData.fat_grams}g</TableCell>
//                     </TableRow>
//                   </tbody>
//                 </Table>
//               </TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Box
//         sx={{
//           mb: "2rem",
//           mx: "2rem",
//           display: "flex",
//           justifyContent: "end",
//         }}
//         id="scroll-dialog-title"
//       >
//         <Image src={LOGO} width={150} height={150} alt="Logo" />
//       </Box>
//     </div>
//     <Button
//       sx={{
//         mx: "2rem",
//         backgroundColor: "black !important",
//         color: "white",
//         "&:hover": {
//           color: "black",
//           backgroundColor: "white !important",
//         },
//       }}
//       onClick={goHome}
//     >
//       GO HOME
//     </Button>
//     <Button
//       sx={{
//         mx: "2rem",
//         backgroundColor: "blue !important",
//         color: "white",
//         "&:hover": {
//           color: "black",
//           backgroundColor: "white !important",
//         },
//       }}
//       onClick={downloadPDF}
//     >
//       Download PDF
//     </Button>
//   </div>
//   );
// };

// export default DietTable;
"use client";
import React, { useState, useEffect, useRef } from "react";
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
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import LOGO from "../../../assets/images/logo04.png";
import { useSession } from "next-auth/react";
import getDietPlan from "@/app/api/get/getDietPlan";
import Loader from "@/components/Shared/Loader/Loader";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRouter } from "next/navigation";

const DietTable = () => {
  const { data: session } = useSession();
  const email = session?.user?.email;
  const image = session?.user?.image;
  const name = session?.user?.name;
  const [dietPlanData, setDietPlanData] = useState(null);
  const [loader, setLoader] = useState(true);
  const pdfRef = useRef();
  const router = useRouter();
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = (pdfHeight - imgHeight * ratio) / 2;

      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("Diet-plan.pdf");
    });
  };
  const goHome = () => {
    router.push("/");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (email) {
          const planData = await getDietPlan(email);
          setDietPlanData(planData);

          setLoader(false);
        }
      } catch (error) {
        // Handle errors
        console.error("Error fetching diet plan:", error.message);
        setLoader(false);
      }
    };

    fetchData();
  }, [email]);

  if (loader) {
    return <Loader></Loader>;
  }

  if (!session || !dietPlanData) {
    return <Loader></Loader>;
  }

  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "700px",
        margin: "20px auto",
      }}
    >
      <div
        ref={pdfRef}
        style={{
          textAlign: "center",
          maxWidth: "900px",
          margin: "20px auto",
          border: "1px solid gray",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            mx: "2rem",
            my: "2rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ backgroundColor: "black" }} aria-label="recipe">
            <Image width={500} height={500} src={image} alt="" />
          </Avatar>
          <Typography variant="h6" sx={{ color: "black", fontSize: "1.5rem" }}>
            Name : {name}
          </Typography>
          <Typography variant="h6" sx={{ color: "black", fontSize: "1.5rem" }}>
            {email}
          </Typography>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow className="bg-gray-200  font-bold uppercase">
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
                      sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
                      rowSpan={meal.foods.length + 1}
                    >
                      {meal.meal}
                    </TableCell>
                  </TableRow>
                  {meal.foods.map((food, foodIndex) => (
                    <TableRow key={foodIndex}>
                      <TableCell sx={{ fontSize: "1.1rem" }}>{food.food}</TableCell>
                      <TableCell sx={{ fontSize: "1.1rem" }}>{food.quantity}</TableCell>
                      <TableCell sx={{ fontSize: "1.1rem" }}>{food.unit}</TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              ))}
              <TableRow>
                <TableCell colSpan={4} style={{ marginTop: "20px", border: "0" }}>
                  <Table>
                    <tbody>
                      <TableRow>
                        <TableCell
                          sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
                          rowSpan={5}
                        >
                          Nutritional Information:
                        </TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem" }}>Calories</TableCell>
                        <TableCell sx={{ fontSize: "1.1rem" }}>{dietPlanData.calories}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold", fontSize: "1.1rem" }}> Protein</TableCell>
                        <TableCell sx={{ fontSize: "1.1rem" }}>{dietPlanData.protein_grams}g</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>Carbs</TableCell>
                        <TableCell sx={{ fontSize: "1.2rem" }}>{dietPlanData.carbs_grams}g</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>Fat</TableCell>
                        <TableCell sx={{ fontSize: "1.2rem" }} >{dietPlanData.fat_grams}g</TableCell>
                      </TableRow>
                    </tbody>
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
      <Button
        sx={{
          mx: "2rem",
          backgroundColor: "black !important",
          color: "white",
          "&:hover": {
            color: "black",
            backgroundColor: "white !important",
          },
        }}
        onClick={goHome}
      >
        GO HOME
      </Button>
      <Button
        sx={{
          mx: "2rem",
          backgroundColor: "blue !important",
          color: "white",
          "&:hover": {
            color: "black",
            backgroundColor: "white !important",
          },
        }}
        onClick={downloadPDF}
      >
        Download PDF
      </Button>
    </div>
  );
};

export default DietTable;
