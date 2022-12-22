import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const galleriesDirectory = path.join(process.cwd(), 'public', 'galleries');

export function getAllGalleriesIds() {
    const fileNames = fs.readdirSync(galleriesDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName
            },
        };
    });
}

export async function getGalleryData(id) {
    const galleryDescriptionFile = id + ".md"

    const galleryDescriptionFilePath = path.join(galleriesDirectory, id, galleryDescriptionFile)
    const galleryDescriptionFileContent = fs.readFileSync(galleryDescriptionFilePath, 'utf8');
    const matterResult = matter(galleryDescriptionFileContent);

    const galleryPath = path.join(galleriesDirectory, id)
    const galleryPathContents = fs.readdirSync(galleryPath, 'utf8');

    let images = []
    galleryPathContents.forEach(galleryPathContent => {
        if (path.extname(galleryPathContent) != ".md") {
            images.push({
                image: `/galleries/${id}/${galleryPathContent}`,
                metadata: 'Todo Metadata'
            });
        };
    });

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...matterResult.data,
        images,
    };
}

export function getSortedGalleriesData() {
    const galleryDirs = fs.readdirSync(galleriesDirectory);


    const allGalleriesData = galleryDirs.map((galleryDir) => {
        const id = galleryDir
        const galleryDescriptionFile = galleryDir + ".md"

        const galleryDescriptionFilePath = path.join(galleriesDirectory, galleryDir, galleryDescriptionFile)
        const galleryDescriptionFileContent = fs.readFileSync(galleryDescriptionFilePath, 'utf8');
        const matterResult = matter(galleryDescriptionFileContent);

        const galleryPath = path.join(galleriesDirectory, galleryDir)
        const galleryPathContents = fs.readdirSync(galleryPath, 'utf8');

        let images = []
        galleryPathContents.forEach(galleryPathContent => {
            if (path.extname(galleryPathContent) != ".md") {
                images.push("/galleries/" + galleryDir + "/" + galleryPathContent)
            }
        })

        return {
            id,
            ...matterResult.data,
            images,
        };
    });
    return allGalleriesData
}