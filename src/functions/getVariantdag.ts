import path from 'path';
import { readdir } from 'fs/promises';
import fs from 'fs';

const relativePath = 'program/';

export const getAllSubfoldersInFolder = async (folderPath: string) => {
  const filesAndFolder = await readdir(path.join(process.cwd(), folderPath));
  const folders = filesAndFolder.filter((fileOrFolderName) => {
    const filePath = path.join(process.cwd(), relativePath, fileOrFolderName);
    const fileOrFolderStat = fs.statSync(filePath);
    return fileOrFolderStat.isDirectory();
  });
  return folders;
};

export const getAllCities = async () => {
  const cities = getAllSubfoldersInFolder(relativePath);
  return cities;
};

export const getAllVariantdaysByCity = async (city: string) => {
  const filesAndFolder = await readdir(
    path.join(process.cwd(), relativePath, city),
  );
  const variantDaysForCity = filesAndFolder.filter((fileOrFolderName) => {
    const filePath = path.join(
      process.cwd(),
      relativePath,
      city,
      fileOrFolderName,
    );
    const fileOrFolderStat = fs.statSync(filePath);
    return fileOrFolderStat.isDirectory();
  });
  return variantDaysForCity;
};

export const getMarkdownObject = async (
  city: string,
  variantdayDate: string,
) => {
  const file = fs.readFileSync(`program/${city}/${variantdayDate}/index.mdx`);
  return file.toString();
};
