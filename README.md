# launchdemo

This is Launch Demo with card display.

I have created it in stackblitz and is working on chrome and firefox. For IE https://stackblitz.com/ is not opening for me so I don't think hosted app will work here.

Design is based on flex model and it is responsive and media query is used to manage Filter component. I tried not to over exploit media query and used flex based design.

I have used class component for Launch card just sake of using it. That can also be done with functional component

A cardDetail component is created as a dumb component that is receving data as a props.

I have created seperate components for Filter. Here in index.js I have used hooks and use useState and useEffect component to manage filter query. 

Filter component is again a dump component that takes array as filter options, title as a props