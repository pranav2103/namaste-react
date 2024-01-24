// Header
// -logo
// -Nav Items
// Body
// -Search
// -Restaurant container
// - Restaurant card
// -img, name of res,rating,cusine,time of delivery
// Footer
// -Copyright
// -Links
// -Address
// -Contact Information

two types of export and import

1. default export/import

export default Component;
import component from "path";

2. names export import

export const component
import {component} from "path"

#React Hooks

1. They are normal JS utility functions
2. given by react to us
3. two very important react hooks - use state and use effect
4. useState()- super powerfull state variables in react
5. useEffect()

#Routing
There are 2 types of routing in web apps

1. client side routing
2. server side routing

server side
you have a index.html ,about.html and click on about.html link, it reloads the page , puts a network call on about.html page , gets data and presents it on UI (make a network call , and page index.html is coming from server)

client side

there is no network call , because no network calls are happening , whenever we render the page , it loads all the components just show based on the functionality
