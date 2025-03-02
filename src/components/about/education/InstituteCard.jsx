export default async function InstituteCard ( { edu } )
{
    // console.log(edu)
    return (
        <div className="bg-gray-300 bg-opacity-70 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Institution Name */}
            <h2 className="text-xl font-bold  mb-2 font-edu">{edu?.institutionName}</h2>

            {/* Duration */}
            <div className="mb-4 flex gap-3">
                <p className="text-gray-700 font-medium font-nunito">Duration:</p>
                <p className="text-gray-500 font-outfit">{edu?.duration?.start}</p>
                <p className="text-gray-500 font-outfit">{edu?.duration?.end}</p>
            </div>

            {/* Department/Subject */}
            <div className="mb-4 flex gap-3 ">
                <p className="text-gray-700 font-medium font-nunito">Department/Subject:</p>
                <p className="text-gray-500 font-outfit">{edu?.department}</p>
            </div>

            {/* Result */}
            <div className="mb-4 flex gap-3">
                <p className="text-gray-700 font-medium font-nunito">Result:</p>
                <p className="text-gray-500 font-outfit">{edu?.result}</p>
            </div>

            {/* Achievements */}
            <div className="mb-4">
                <p className="text-gray-700 font-medium font-nunito">Achievements:</p>
                <ul className="list-disc list-inside text-gray-500 font-outfit">
                    {/* <li>Secured 1st position in the Science Fair at the district level.</li>
                    <li>Awarded a scholarship for outstanding academic performance.</li>
                    <li>Participated in national-level debate competitions.</li> */}
                    {
                        edu?.achievements && edu?.achievements?.map( ( achieve, i ) => (
                            <li key={ i } className="text-teal-700 font-arsenal">{ achieve }</li>
                        ))
                    }
                </ul>
            </div>

            {/* Additional Notes */}
            <div>
                <p className="text-gray-700 font-medium font-nunito">Additional Notes:</p>
                <p className="text-teal-700 font-outfit">{edu?.additionalNotes}</p>
            </div>
        </div>
    );
}