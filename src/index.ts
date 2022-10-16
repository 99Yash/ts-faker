import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';
//avoid using the default statements as much as possible

// console.log(user);

// console.log(company);

// new google.maps.Map(document.getElementById('map')) ;//type
export const map = document.getElementById('map') as HTMLElement;

const user = new User();
const customMap = new CustomMap('map');
const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);
