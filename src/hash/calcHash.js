import crypto from "crypto";
import fs from "fs";

const calculateHash = async () => {
  const filePath =
    "D:/Trash/MITSO/Course3/Semester2/RICE/mitso-nodejs-basic/src/hash/files/fileToCalculateHashFor.txt";

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error("Ошибка чтения файла:", err);
      return;
    }

    const hash = crypto.createHash("sha256");
    hash.update(data);
    const hexHash = hash.digest("hex");
    console.log("SHA256 хэш файла:", hexHash);
  });
};

calculateHash();
