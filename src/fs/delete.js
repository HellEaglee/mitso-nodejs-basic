import fs from "fs/promises";

const remove = async () => {
  const filePath =
    "D:/Trash/MITSO/Course 3/Semester 2/RICE/mitso-nodejs-basic/src/fs/files/fileToRemove.txt";

  try {
    await fs.unlink(filePath);
    console.log("File deleted successfully");
  } catch (err) {
    console.error("FS operation failed:", err);
  }
};

await remove();
