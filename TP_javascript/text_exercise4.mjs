"use strict";

import {Promo} from "./exercise4.mjs";

// create a JSON string representing a promo object
const jsonString = '{"students":[{"name":"Alice","id":1,"grade":"A"},{"name":"Bob","id":2,"grade":"B"},{"name":"Charlie","id":3,"grade":"B+","country":"France"}]}';

// deserialize the promo object from the JSON string
const promo = new Promo().read(jsonString);

// print the list of students in the promo object
for (const student of promo.students) {
  console.log(`${student.name} (${student.id}) - Grade: ${student.grade}${student.country ? ` - Country: ${student.country}` : ''}`);
}