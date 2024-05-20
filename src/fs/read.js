import { readFile } from "fs/promises";
const read = async () => {
  try {
    const data = await readFile(
      "D:/Trash/MITSO/Course3/Semester2/RICE/mitso-nodejs-basic/src/fs/files/fileToRead.txt",
      "utf8"
    );
    console.log(data);
  } catch (error) {
    console.error("FS operation failed:", error.message);
  }
};

await read();
