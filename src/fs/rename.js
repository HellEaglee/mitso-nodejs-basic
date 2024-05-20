import { promises as fs } from "fs";
const rename = async () => {
  const sourcePath =
    "D:/Trash/MITSO/Course3/Semester2/RICE/mitso-nodejs-basic/src/fs/files/wrongFilename.txt";
  const destinationPath =
    "D:/Trash/MITSO/Course3/Semester2/RICE/mitso-nodejs-basic/src/fs/files/properFilename.md";

  try {
    await fs.access(sourcePath);

    try {
      await fs.access(destinationPath);
      throw new Error(
        "FS operation failed: File properFilename.md already exists"
      );
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }

    await fs.rename(sourcePath, destinationPath);
    console.log("File renamed successfully.");
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error(
        "FS operation failed: File wrongFilename.txt does not exist"
      );
    } else {
      throw error;
    }
  }
};

await rename();
