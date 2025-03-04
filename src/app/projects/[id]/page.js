import { redirect } from "next/navigation";

export default async function ProjectDetailsPage({ params, searchParams }) {
  
    const getParams = await params;
    const getSearchParams = await searchParams;

    if ( getSearchParams?.page )
    {
    const cleanParams = Object.fromEntries(
      Object.entries(getSearchParams)
        .filter(([key]) => key !== "page")
    );

    const queryString = new URLSearchParams(cleanParams).toString();
    const destination = `/projects/${getParams.id}${queryString ? `?${queryString}` : ""}`;

    redirect(destination);
  }

  return (
    <div className="bg-gray-200 text-black">
      {getParams?.id}
    </div>
  );
}