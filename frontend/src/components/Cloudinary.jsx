// export default function cloudinary() {
//     const uploadImage = (e) => {
//   const data = new FormData();
//     data.append("file", e.target.files[0]);
//   data.append("upload_preset", "ltv_p3_database");
//   data.append("cloud_name", "bibilekid");
//   fetch("  https://api.cloudinary.com/v1_1/bibilekid/image/upload", {
//     method: "post",
//     body: data,
//   })
//     .then((res) => res.json())
//     .then((data1) => {
//       setGetUser({ ...getUser, picture: data1.url });
//     //   a changer suivant la page setgetuser et getuser
//     })
//     .catch((err) => console.error(err));
//   }

//   return (
//     <div>
//       <img className="" src={getUser.image} alt="photo de profile" />
//       {/* changer getuser */}
//     </div>
//   );
// }
