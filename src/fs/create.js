import fs from "fs";
const create = async () => {
  const folderPath = "./src/fs/files";
  const filePath = `${folderPath}/fresh.txt`;
  const fileContent = "I am fresh and young";
  try {
    const isFileExists = fs.existsSync(filePath);
    if (isFileExists) {
      throw new Error("FS operation failed: File already exists");
    }
    fs.writeFileSync(filePath, fileContent);
    console.log("File created successfully");
  } catch (error) {
    console.error(error.message);
  }
};
await create();
