import { v2 as cloudinary } from "cloudinary";
import { fileUpload } from "../../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: "dxyutuzu3",
  api_key: "951469894343583",
  api_secret: "BHxR1JhXVMkBPXMFsC58ICOJ4x4",
  secure: true,
});

describe("Pruebas en fileUpload", () => {
  test("debe de subir el archivo correctamente a clouddinary", async () => {
    const imageUrl =
      "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1600";
    const resp = await fetch(imageUrl);

    // Un blob es una especie de archivo que se puede leer como texto o como binario
    const blob = await resp.blob();
    // la creación del arhicvo
    const file = new File([blob], "foto.jpg");

    const url = await fileUpload(file);
    expect(typeof url).toBe("string");

    console.log(url);

    // Borrar la imagen por ID
    const segments = url.split("/");
    // console.log(segments);
    const imageId = segments[segments.length - 1].replace(".jpg", "");
    // console.log(imageId);

    const cloudResp = await cloudinary.api.delete_resources([
      "journal-app/" + imageId,
      { resource_type: "image" },
    ]);
    console.log(cloudResp);
  });

  test("debe de retornar un null", async () => {
    const file = new File([], "foto.jpg");
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
