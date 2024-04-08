import fs from "fs";
import path from "path";

const sourceDir =
  "D:/Trash/MITSO/Course 3/Semester 2/RICE/mitso-nodejs-basic/src/fs/files";
const destinationDir =
  "D:/Trash/MITSO/Course 3/Semester 2/RICE/mitso-nodejs-basic/src/fs/files_copy";
const copy = async () => {
  try {
    await fs.promises.access(sourceDir, fs.constants.F_OK);
    await fs.promises.access(destinationDir, fs.constants.F_OK);
    throw new Error(
      "FS operation failed: destination directory already exists."
    );
  } catch (error) {
    if (error.code === "ENOENT") {
      try {
        await fs.promises.mkdir(destinationDir);
        console.log("Created destination directory:", destinationDir);
        const files = await fs.promises.readdir(sourceDir);
        console.log("Read files directory:", files);
        for (const file of files) {
          const source = path.join(sourceDir, file);
          const destination = path.join(destinationDir, file);
          await fs.promises.copyFile(source, destination);
          console.log(`Copied file ${file}`);
        }
        console.log("Files copied successfully.");
      } catch (error) {
        console.error("Error:", error.message);
      }
    } else {
      console.error("Error:", error.message);
    }
  }
};

await copy();
