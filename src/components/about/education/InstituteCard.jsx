export default async function InstituteCard() {
    return (
        <div className="bg-gray-100 bg-opacity-70 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Institution Name */}
            <h2 className="text-xl font-semibold mb-2">Cantt. Public School & College, Saidpur</h2>

            {/* Duration */}
            <div className="mb-4">
                <p className="text-gray-700 font-medium">Duration:</p>
                <p className="text-gray-600">Started: June 2016</p>
                <p className="text-gray-600">Ended: October 2018</p>
            </div>

            {/* Department/Subject */}
            <div className="mb-4 flex gap-3 ">
                <p className="text-gray-700 font-medium">Department/Subject:</p>
                <p className="text-gray-600">Science</p>
            </div>

            {/* Result */}
            <div className="mb-4 flex gap-3">
                <p className="text-gray-700 font-medium">Result:</p>
                <p className="text-gray-600">GPA: 4.92/5.00</p>
            </div>

            {/* Achievements */}
            <div className="mb-4">
                <p className="text-gray-700 font-medium">Achievements:</p>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Secured 1st position in the Science Fair at the district level.</li>
                    <li>Awarded a scholarship for outstanding academic performance.</li>
                    <li>Participated in national-level debate competitions.</li>
                </ul>
            </div>

            {/* Additional Notes */}
            <div>
                <p className="text-gray-700 font-medium">Additional Notes:</p>
                <p className="text-gray-600">Completed Higher Secondary School Certificate (HSC) with a focus on Physics, Chemistry, and Mathematics.</p>
            </div>
        </div>
    );
}