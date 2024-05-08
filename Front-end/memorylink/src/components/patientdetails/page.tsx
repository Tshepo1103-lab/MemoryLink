// import React, { useEffect, useState } from "react";
// import { useStyles } from "./style/style";
// import { Button, ConfigProvider, Modal, Table, Drawer } from "antd";
// import CommentFC
// import {
//   useProfileActions,
//   useProfileState,
// } from "@/providers/ProfileProvider";

// const PatientDetailsPage = ({ params }: { params: { profileId: string } }) => {
//   const { getprofile } = useProfileActions();
//   const status = useProfileState();
//   const { styles } = useStyles();

//   useEffect(() => {
//     if (getprofile) getprofile(params.profileId);
//   });
//   interface DataType {
//     key: string;
//     gender: string;
//     name: string;
//     address: string;
//     ward: string;
//     hospital: string;
//     age: string;
//     image: string;
//     EyeColor: string;
//     Build: string;
//     HairColor: string;
//     SkinTone: string;
//     DistinguishingFeature: string;
//     MoreDetails: string;
//     dateAdmitted: string;
//   }

//   const dataSource: DataType[] = [
//     {
//       key: "1",
//       gender: "Male",
//       name: "John",
//       address: "New York",
//       ward: "4",
//       hospital: "Bara",
//       age: "30-35",
//       image: "/assets/images/Patient2.png",
//       EyeColor: "brown",
//       Build: "slender",
//       HairColor: "Black",
//       SkinTone: "Brown",
//       DistinguishingFeature: "Tattoo on the left wrist",
//       MoreDetails: "None",
//       dateAdmitted: "01-01-2023",
//     },
//   ];

//   const columns = [
//     {
//       title: "Hospital",
//       dataIndex: "hospital",
//       key: "hospital",
//     },
//     {
//       title: "Ward",
//       dataIndex: "ward",
//       key: "ward",
//     },
//     {
//       title: "Gender",
//       dataIndex: "gender",
//       key: "gender",
//     },
//     {
//       title: "Build",
//       dataIndex: "Build",
//       key: "Build",
//     },

//     {
//       title: "Age-Range",
//       dataIndex: "age",
//       key: "age",
//     },
//     {
//       title: "Eye Color",
//       dataIndex: "EyeColor",
//       key: "EyeColor",
//     },
//     {
//       title: "Hair Color",
//       dataIndex: "HairColor",
//       key: "HairColor",
//     },
//     {
//       title: "Skin Tone",
//       dataIndex: "SkinTone",
//       key: "SkinTone",
//     },
//     {
//       title: "Distinguishing Feature",
//       dataIndex: "DistinguishingFeature",
//       key: "DistinguishingFeature",
//     },
//     {
//       title: "More Details",
//       dataIndex: "MoreDetails",
//       key: "MoreDetails",
//     },
//     {
//       title: "Date Admitted",
//       dataIndex: "dateAdmitted",
//       key: "dateAdmitted",
//     },
//   ];

//   const comments = [
//     {
//       name: "Tshepo Mahlangu",
//       paragraph: "I love this",
//       datetime: "01-01-2024",
//     },
//     {
//       name: "Polane Mahloko",
//       paragraph:
//         "Ouh yfdkkk kkkkkkkkk kkkkkkk kkkkkkk kkkkk kkkkkk kkkkkk kdfedf sdfvdv dfvsv ffvsfd erfrf ref erff rwfg thtg eretn 5eth 5et 6jn  54yi8yrfbs h5wete sss!",
//       datetime: "01-01-2024",
//     },
//   ];
//   const transposedDataSource = columns.map((column) => {
//     return {
//       key: column.key,
//       attribute: column.title,
//       "Row 1": dataSource[0][column.dataIndex as keyof DataType],
//     };
//   });
//   const transposedColumns = [
//     {
//       title: "Attribute",
//       dataIndex: "attribute",
//       key: "attribute",
//       width: "120px",
//     },
//     {
//       title: "Details",
//       dataIndex: "Row 1",
//       key: "Row 1",
//       width: "400px",
//     },
//   ];

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   const [open, setOpen] = useState(false);

//   const showDrawer = () => {
//     setOpen(true);
//   };

//   const onClose = () => {
//     setOpen(false);
//   };
//   return (
//     <div className={styles.main}>
//       <h1 className={styles.header}>Patient Details</h1>
//       <div className={styles.mother}>
//         <div className={styles.child}>
//           <img
//             src={status.profile.image}
//             alt={status.profile.distinguishingFeature}
//             style={{ width: "50%", height: "50vh", marginLeft: "20px" }}
//           />
//           <div
//             style={{ display: "flex", flexDirection: "column", width: "90%" }}
//           >
//             <ConfigProvider
//               theme={{
//                 components: {
//                   Table: {
//                     headerBg: "#003366",
//                     headerColor: "#fff",
//                     borderColor: "#003366",
//                     colorIcon: "#fff",
//                   },
//                 },
//               }}
//             >
//               <Table
//                 style={{
//                   width: "100%",
//                   height: "40vh",
//                   marginLeft: "20px",
//                   display: "flex",
//                   marginTop: "10px",
//                   marginBottom: "10px",
//                 }}
//                 dataSource={status.profile}
//                 columns={transposedColumns}
//                 bordered
//                 pagination={{ pageSize: 4 }}
//               />
//             </ConfigProvider>
//             <div style={{ marginTop: "25px" }}>
//               <Button className={styles.button}>Directions</Button>
//               <Button className={styles.button} onClick={showModal}>
//                 Comment
//               </Button>
//               <Button className={styles.button} onClick={showDrawer}>
//                 View Comments
//               </Button>
//             </div>
//             <Modal
//               title="Add Comment"
//               okText="Send"
//               open={isModalOpen}
//               onOk={handleOk}
//               onCancel={handleCancel}
//             >
//               <CommentFC />
//             </Modal>
//             <Drawer title="Comments" onClose={onClose} visible={open}>
//               {comments.map((item, index) => (
//                 <div key={index} className={styles.comment}>
//                   <h3>{item.name}</h3>
//                   <br />
//                   <h5>{item.paragraph}</h5>
//                   <br />
//                   <h6>{item.datetime}</h6>
//                 </div>
//               ))}
//             </Drawer>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PatientDetailsPage;
