import { projects } from "@/utils/demo/projectsDemo";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const categoryParam = searchParams.get("category") || "all";
  const nameParam = searchParams.get("name") || "all"; 
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 4;

  let filteredItems = projects;

  console.log("Filters Applied:", { categoryParam, nameParam });

  // If category is NOT "all", filter by category
  if (categoryParam.toLowerCase() !== "all") {
    filteredItems = filteredItems.filter(
      project => project.type.toLowerCase() === categoryParam.toLowerCase()
    );
  }

  // If nameParam is NOT "all" or "undefined", filter by technology names
  if (nameParam.toLowerCase() !== "all" && nameParam.toLowerCase() !== "undefined") {
    const queryNames = nameParam.split(",").map(name => name.trim().toLowerCase());

    filteredItems = filteredItems.filter(project =>
      queryNames.some(queryName =>
        project.technologies.some(tech => tech.name.toLowerCase() === queryName)
      )
    );
  }

  // Pagination logic
  const totalData = filteredItems.length;
  const totalPages = Math.ceil(totalData / limit);
  const startIndex = (page - 1) * limit;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + limit);

  return new Response(
    JSON.stringify({
      data: paginatedItems,
      page,
      limit,
      pageData: {
        totalPages,
        page,
        limit,
        totalData,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}