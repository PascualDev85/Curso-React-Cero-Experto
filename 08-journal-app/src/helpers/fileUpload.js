export const fileUpload = async (file) => {
  if (!file) throw new Error("No file selected");

  const cloudURL = "https://api.cloudinary.com/v1_1/dxyutuzu3/upload";

  // creamos el form data
  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudURL, {
      method: "POST",
      body: formData,
    });
    // console.log(resp);

    // mostrar un error
    if (!resp.ok) throw new Error("Error uploading file");

    // si todo sale bien
    const cloudResp = await resp.json();
    // console.log(cloudResp);

    return cloudResp.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
