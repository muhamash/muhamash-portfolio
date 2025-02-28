export async function downloadResume() {
    return {
        success: true,
        data: "/resume.pdf",
    };
}

export async function downloadRecommendation() {
    return {
        success: true,
        data: "/lwsReco.pdf",
    };
}