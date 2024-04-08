import { readFile } from "fs/promises";
const read = async () => {
  try {
    const data = await readFile(
      "D:/Trash/MITSO/Course 3/Semester 2/RICE/mitso-nodejs-basic/src/fs/filesfileToRead.txt",
      "utf8"
    );
    console.log(data);
  } catch (error) {
    console.error("FS operation failed:", error.message);
  }
};

await read();
