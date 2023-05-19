import path from 'path';
import { readdir } from 'fs/promises';
import fs from 'fs';

const relativePath = 'program/';

export const getAllFoldersInFoldder = async (folderPath: string) => {
  const filesAndFolder = await readdir(path.join(process.cwd(), folderPath));
  const folders = filesAndFolder.filter((fileOrFolderName) => {
    const filePath = path.join(process.cwd(), folderPath, fileOrFolderName);
    const fileOrFolderStat = fs.statSync(filePath);
    return fileOrFolderStat.isDirectory();
  });
  return folders;
};

export const getAllCities = async () => {
  const cities = getAllFoldersInFoldder(relativePath);
  return cities;
};

export const getVarriantdayByCity = async (city: string) => {
  const folderpath = relativePath + city;
  const variantDaysForCity = getAllFoldersInFoldder(folderpath);
  return variantDaysForCity;
};
