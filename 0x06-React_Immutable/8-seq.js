//lazy seq

import { Seq } from "./node_modules/immutable/dist/immutable";


export default function printBestStudents(object) {
    const lazySeq = Seq(object)
    .filter((student) => student.score >= 70)
    .map((student) => ({
        score: student.score,
        firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
        lastName: student.lastNameName.charAt(0).toUpperCase() + student.lastName.slice(1),

    }));
    console.log(lazySeq.toJS());
}
