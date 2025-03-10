import Modal from "@/components/common/Modal";
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
    <Modal>
      <div className="bg-gray-200 text-black text-xl h-full w-full flex items-center justify-center p-5 z-50">
        <p>project index : { getParams?.id }</p>
        <p className="font-code text-red-600 text-4xl">Under construction site!!</p>
      </div>
    </Modal>
  );
}