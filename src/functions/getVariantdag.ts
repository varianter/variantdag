import path from 'path';
import { readFile, readdir } from 'fs/promises';
import fs from 'fs';
import matter from 'gray-matter';
import markdownit from 'markdown-it/lib';

const relativePath = 'program/';

export const getAllFoldersInFoldder = async (folderPath: string) => {
  const filesAndFolder = await readdir(path.join(process.cwd(), folderPath));
  const folders = filesAndFolder.filter((fileOrFolderName) => {
    const filePath = path.join(process.cwd(), relativePath, fileOrFolderName);
    const fileOrFolderStat = fs.statSync(filePath);
    return fileOrFolderStat.isDirectory();
  });
  return folders;
};

export const getAllCities = async () => {
  const cities = getAllFoldersInFoldder(relativePath);
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

export const getVariantdagByCityAndDate = async (
  city: string,
  date: string,
) => {
  const file = readFile(
    path.join(process.cwd(), relativePath, city, `${date}/index.mdx`),
  );
  const matterFile = matter(file.toString());
  const md = markdownit({ linkify: true, html: true, typographer: true });
  const html = await md.render(matterFile.content);
  return html;
};

export const getMatterFile = async (city: string, variantdayDate: string) => {
  const file = fs.readFileSync(`program/${city}/${variantdayDate}/index.mdx`);

  return matter(file.toString());
};

export const getMarkdownObject = async (
  city: string,
  variantdayDate: string,
) => {
  const matterFile = await getMatterFile(city, variantdayDate);
  const md = markdownit({ linkify: true, html: true, typographer: true });
  const html = md.render(matterFile.content);
  return {
    fileContents: html,
  };
};
