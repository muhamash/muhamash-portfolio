"use server";

import { promises as fs } from "fs";
import path from "path";

export async function downloadResume() {
    const filePath = path.join(process.cwd(), "public", "resume.pdf");

    try {
        const fileBuffer = await fs.readFile(filePath);
        const base64File = fileBuffer.toString("base64");

        return {
            success: true,
            data: base64File,
        };
    } catch (error) {
        console.error("Error reading file:", error);
        return {
            success: false,
            message: "File not found",
        };
    }
}