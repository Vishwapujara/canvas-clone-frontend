"use client";

import CourseNavigation from "../Navigation";
import PeopleTable from "./Table/page";

export default function PeoplePage({ params }: { params: { cid: string } }) {
	const { cid } = params;
	return (
		<div id="wd-people">
			<h1>Course {cid}</h1>
			<hr />
			<div className="d-flex">
				<div className="flex-fill p-3">
					<div id="wd-people-page">
						<PeopleTable />
					</div>
				</div>
			</div>
		</div>
	);
}

