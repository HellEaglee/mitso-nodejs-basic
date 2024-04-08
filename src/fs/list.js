import fs from "fs/promises";

const list = async () => {
  const folderPath =
    "D:/Trash/MITSO/Course 3/Semester 2/RICE/mitso-nodejs-basic/src/fs/files";

  try {
    const files = await fs.readdir(folderPath);
    if (files.length === 0) {
      console.log("The folder is empty.");
    } else {
      console.log("Files in the folder:");
      files.forEach((file) => {
        console.log(file);
      });
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error("FS operation failed: The folder does not exist.");
    } else {
      console.error("FS operation failed:", error.message);
    }
  }
};
await list();
